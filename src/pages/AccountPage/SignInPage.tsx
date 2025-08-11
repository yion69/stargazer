import React, { useEffect, useState } from "react";
import GoogleButton from "../../components/GoogleButton";
import { useNavigate } from "react-router";
import TextField from "../../components/TextField";
import Button from "../../components/Button";
import { useAuth } from "../../utils/AuthValidation";

type LoginFailedType =  'USER-DOES-NOT-EXISTS' | 'INCORRECT-PASSWORD' | 
                        'SOMETHING-WENT-WRONG' | 'EMAIL-REQUIRED' |
                        'PASSWORD-REQUIRED' | 'EMAIL-PASSWORD-REQUIRED'

export default function SignInPage() {

    const navigate = useNavigate();

    const auth = useAuth();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loginError, setLoginError] = useState<LoginFailedType | null >(null);

    const errorMessages: Record<LoginFailedType, string> = {
        'EMAIL-REQUIRED': "Email Address Required",
        'PASSWORD-REQUIRED': "Password Required",
        'EMAIL-PASSWORD-REQUIRED': "Email Address & Password Required",
        'INCORRECT-PASSWORD': "Incorrect Username or Password",
        'USER-DOES-NOT-EXISTS': "Account Does Not Exist",
        'SOMETHING-WENT-WRONG': "Something Went Wrong"
    };

    const handleEmailInput = (e:React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) };
    const handlePasswordInput = (e:React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) };

    const handleNavigateToSignUp = () => { navigate("/account/signup") };

    const handleGoogleLogin = () => { auth.google_login() };
    
    const handleLogin = async () => {

        if (!email.trim() && !password.trim() ) { 

            setLoginError('EMAIL-PASSWORD-REQUIRED');
            return

        } else if (!email) { 

            setLoginError('EMAIL-REQUIRED')
            return

        } else if (!password) { 

            setLoginError('PASSWORD-REQUIRED')
            return
        
        }

        const res = await fetch("http://localhost:5000/auth/login", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': "*",
                    'Access-Control-Allow-Headers': "*",
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            }
        )
        
        const data = await res.json();
        
        if (!res.ok) {
            if ( res.status === 401 ) {

                console.error(data.error);
                setLoginError('INCORRECT-PASSWORD');       

            } else if ( res.status === 404 ) {
                
                console.error(data.error)
                setLoginError('USER-DOES-NOT-EXISTS');

            } else {

                console.error("Login Failed")
                setLoginError('SOMETHING-WENT-WRONG');
            
            }
            
            return
        }

        console.log(data);
    }

    useEffect(() => {
        const timeout = setTimeout(() =>
            setLoginError( null )
        ,5000)

        return () => {
            clearTimeout( timeout )
        }

    }, [ loginError]) 

    return (
        <div className="flex justify-center items-center w-full h-auto min-h-[75dvh] text-base lg:text-lg">
            <div className="flex flex-col w-full lg:w-4/6 h-full p-4 lg:p-10 gap-10 lg:gap-4">
                <div className="w-full h-fit">
                    <h1 className="text-5xl">Account Login</h1>
                </div>
 
                <div className="w-full h-14">
                    <GoogleButton onClick={ handleGoogleLogin } />
                </div>

                <div className="flex items-center w-full h-fit">
                    <div className="w-full h-[1px] bg-zinc-950"></div>
                    <h2 className="px-4"> or </h2>
                    <div className="w-full h-[1px] bg-zinc-950"></div>
                </div>

                <div className="flex flex-col w-full h-2/6 gap-2 text-xl">
                {
                    loginError && 
                    <label htmlFor="emailField" className="font-inter text-sm text-red-500">
                        { errorMessages[loginError] || 'Unknown Error'}
                    </label>
                }

                    <TextField  required 
                                id="emailField"
                                title="email" 
                                placeholder="Email Address"
                                onChange={ handleEmailInput }
                                className={ 
                                (loginError === 'PASSWORD-REQUIRED' || loginError === null)
                                    ? ''
                                    : 'border-red-500!'
                                } />

                    <TextField  required
                                title="password" 
                                placeholder="Password" 
                                onChange={ handlePasswordInput }
                                className={  
                                (loginError === 'EMAIL-REQUIRED' || loginError === null)
                                    ? ''
                                    : 'border-red-500!'
                                } />
                </div>
                <div className="flex w-full h-12 gap-4 font-marquee">
                    <Button type="button"
                            onClick={ handleNavigateToSignUp } 
                            color={"primary"} 
                            size={"full"} >
                                Create Account
                    </Button>
                    <Button type="button"
                            onClick={handleLogin} 
                            color="secondary" 
                            size="full" >
                                Login
                    </Button>
                </div>
            </div>
        </div>
    )
}
