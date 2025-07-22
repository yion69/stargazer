import { createContext, useContext, useState, type ReactNode } from "react";

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

type UserData = {
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
    user_name: string;
    user_avatar: string;
    "user-role": "customer" | "admin";
  };
  tokens: {
    "access-token": string;
    "refresh-token": string;
  };
}

type AuthContextType = {
    user: UserData | null
    login: (email: string, password: string) => Promise<AuthResult>
    logout: () => void
}

type AuthResult = { success: true } | { success: false, error: AllErrorTypes }

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider ({ children }:{ children:ReactNode }) {
    
    const [user, setUser] = useState<UserData | null>(() => {

        const userData = localStorage.getItem("user");
        return userData ? JSON.parse(userData) : null
 
    });

    const MapUserData = (apiResponse: LoginResponse['user']):UserData => ({
        user_id: apiResponse['user-id'],
        user_name: apiResponse['user_name'],
        user_email: apiResponse['user-email'],
        user_avatar: apiResponse['user_avatar'],
        user_role: apiResponse['user-role']
    })

    const login = async (email: string, password: string):Promise<AuthResult> => {
        try {
            const response = await fetch("http://127.0.0.1:5000/auth/login", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            )

            const data:LoginResponse = await response.json();

            if (!response.ok) {
                if ( response.status === 401 ) {
                
                    return { success: false, error: 'INCORRECT-PASSWORD' }

                } else if ( response.status === 404 ) {
                
                    return { success: false, error: 'USER-DOES-NOT-EXIST' }
                
                } else {

                    return { success: false, error: 'SOMETHING-WENT-WRONG' }
                
                }
            }

            const userData = MapUserData(data['user']);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData))
            
            localStorage.setItem('access-token', data.tokens['access-token'])
            localStorage.setItem('refresh-token', data.tokens['refresh-token'])

            return { success: true }
        } catch( error ) {
            console.error(error);
            return { success: false, error: 'UNKNOWN-ERROR-IN-REQUEST' }
        }

    }
 
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            
            { children }

        </AuthContext.Provider>
    )
}

export const useAuth = () => {
 
    const context = useContext(AuthContext);
 
    if(!context) { throw new Error('useAuth must be used within AuthProvider') }

    const { user, login, logout } = context;

    const isAdmin = () => {
        return user && user.user_role === 'admin'
    }

    return { user, login, logout, isAdmin }
}