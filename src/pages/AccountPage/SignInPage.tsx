import React, { useState } from "react";
import GoogleButton from "../../components/GoogleButton";
import { Link } from "react-router";

export default function SignInPage() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleEmailInput = (e:React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value) };
    const handlePasswordInput = (e:React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value) };

    const handleGoogleLogin = async () => {
        window.location.href = "http://127.0.0.1:5000/auth/google_login";
    }
    
    const handleLogin = async () => {

        console.log(`Email ==> ${email} | Password ==> ${password}`)

            if (!email.trim() && !password.trim() ) { 
                alert("Email & Password Required"); 
                return
            } else if (!email) { 
                alert("Email Required");
                return
            } else if (!password) { 
                alert("Password Required");
                return
            }

        const res = await fetch("http://127.0.0.1:5000/auth/login", {
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
        console.log(data);
    }

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

                <div className="flex flex-col w-full h-2/6 gap-2 font-marquee text-xl">
                    <input  required 
                            title="email" 
                            placeholder="Email Address"
                            onChange={ handleEmailInput } 
                            className="w-full h-14 px-4 border" />

                    <input  required 
                            title="password" 
                            placeholder="Password" 
                            onChange={ handlePasswordInput }
                            className="w-full h-14 px-4 border" />
                </div>
                <div className="flex w-full h-12 gap-4 font-marquee">
                    <button type="button" onClick={ handleLogin } className="h-full w-1/2 border cursor-pointer">Login</button>
                    <Link to={"/account/signup"} className="flex items-center justify-center h-full w-1/2 border cursor-pointer">
                        <span className="">Create Account</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
