import { Hand } from "lucide-react";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { useNavigate } from "react-router";

type BaseErrorType =    'PASSWORD-REQUIRED' | 
                        'EMAIL-REQUIRED' |
                        'SOMETHING-WENT-WRONG' |
                        'UNKNOWN-ERROR-IN-REQUEST'

type SignUpFailedType = BaseErrorType | 'NAME-REQUIRED' | 'USER-ALREADY-EXISTS'
type LoginFailedType = BaseErrorType | 'INCORRECT-PASSWORD' | 'USER-DOES-NOT-EXIST' | 'EMAIL-PASSWORD-REQUIRED'

type AllErrorTypes = BaseErrorType | SignUpFailedType | LoginFailedType
                        
export const errorMessages: Record<AllErrorTypes, string> = {
    'EMAIL-REQUIRED': "Email Address Required",
    'PASSWORD-REQUIRED': "Password Required",
    'EMAIL-PASSWORD-REQUIRED': "Email Address & Password Required",
    'NAME-REQUIRED': "Name Required",

    'INCORRECT-PASSWORD': "Incorrect Username or Password",
    'SOMETHING-WENT-WRONG': "Something Went Wrong",

    "USER-ALREADY-EXISTS": "User already exists",
    'USER-DOES-NOT-EXIST': "Account Does Not Exist",

    'UNKNOWN-ERROR-IN-REQUEST': 'Unknown Error Occured When Processing Request'
};

export type UserData = {
    user_id: string 
    user_name: string
    user_email: string
    user_avatar: string,
    user_role: 'customer' | 'admin'
}

interface LoginResponse {
  user: {
    "user-id": string;
    "user-email": string;
    "user-name": string;
    "user-avatar": string;
    "user-role": "customer" | "admin";
  };
}

type AuthContextType = {
    user: UserData | null
    login: (email: string, password: string) => Promise<AuthResult>
    google_login: () => void
    google_login_redirect: (authorization: AuthorizationType, userID: string) => Promise<void>
    logout: () => void
}

export type AuthorizationType = 'authorized' | 'unauthorized'

type AuthResult = { success: true } | { success: false, error: AllErrorTypes }

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider ({ children }:{ children:ReactNode }) {
    
    const navigate = useNavigate()
    
    const [user, setUser] = useState<UserData | null>(null)

    
    const MapUserData = (apiResponse: LoginResponse['user']):UserData => ({
        user_id: apiResponse['user-id'],
        user_name: apiResponse['user-name'],
        user_email: apiResponse['user-email'],
        user_avatar: apiResponse['user-avatar'],
        user_role: apiResponse['user-role']
    })

    
    useEffect(() => { 
        const HandleUserDataStore = () => {
            try {
                const localStorageUser = localStorage.getItem('user')
                if(localStorageUser) {
                    const parsedUser = JSON.parse(localStorageUser)
                    const mappedUser = MapUserData(parsedUser)
                    setUser(mappedUser)
                }
            } catch(err) {
                console.error("Failed to parse user data from local stroage")
                localStorage.removeItem('user')
            }
        
            if (localStorage.getItem('user')) {
                let user = JSON.parse(localStorage.getItem("user") as string)
                let mapped = MapUserData(user);
                console.log(`This is user info from useEffect hook local stroage ${JSON.stringify(mapped)}`)
                setUser(mapped)
            }
        }
        HandleUserDataStore()
    },[])

    const login = async (email: string, password: string):Promise<AuthResult> => {
        try {
            const response = await fetch("http://127.0.0.1:5000/auth/login", {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            )

            const data = await response.json();

            if (!response.ok) {
                if ( response.status === 401 ) {
                
                    return { success: false, error: 'INCORRECT-PASSWORD' }

                } else if ( response.status === 404 ) {
                
                    return { success: false, error: 'USER-DOES-NOT-EXIST' }
                
                } else {

                    return { success: false, error: 'SOMETHING-WENT-WRONG' }
                
                }
            }

            const userData = data.body.user
            const mappedUser:UserData = MapUserData(userData)

            if(mappedUser){
                setUser(mappedUser);
                localStorage.setItem('user', JSON.stringify(mappedUser))
            }

            return { success: true }
        } catch( error ) {
            console.error(error);
            return { success: false, error: 'UNKNOWN-ERROR-IN-REQUEST' }
        }

    }

    const google_login = ():void => { window.location.href = "http://localhost:5000/google_auth/google_login" }

    const google_login_redirect = async (authorization: AuthorizationType, userID: string):Promise<void> => {

        try {

            if (!authorization || !userID) {
                if (!authorization) throw new Error('Authorization Incomplete')
                if (!userID) throw new Error('User ID Requried')
            }

            const response  = await fetch('http://localhost:5000/google_auth/get-cookies', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "auth_status": authorization,
                    "auth_id": userID
                })
            })

            if (response.ok) {
                const response = await fetch("http://localhost:5000/user/info", {
                    method: 'GET',
                    credentials: 'include'
                });

                const data = await response.json()
                const userData = data.body.user
                const mappedUser = MapUserData(userData)
                
                if(mappedUser) {
                    setUser(mappedUser)
                    localStorage.setItem("user", JSON.stringify(data.body.user))
                }

                navigate('/')
            }
        } catch(e) {
            console.error(e)
        }
    }
 
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/')
    }

    return (
        <AuthContext.Provider value={{ user, login, google_login, google_login_redirect, logout }}>
            
            { children }

        </AuthContext.Provider>
    )
}

export const useAuth = () => {
 
    const context = useContext(AuthContext);
 
    if(!context) { throw new Error('useAuth must be used within AuthProvider') }

    const { user, login,  google_login, google_login_redirect, logout } = context;

    const isAdmin = () => {
        return user && user.user_role === 'admin'
    }

    return { user, login, google_login, google_login_redirect, logout, isAdmin }
}