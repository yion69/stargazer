import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router";
import Button from "../../components/Button";
import { LassoSelectIcon } from "lucide-react";
import TextField from "../../components/TextField";

export default function SignUpPage() {
 
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();

    const emailRef = useRef<HTMLInputElement>(null);
    const nameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleEmailInput = (event:React.ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value) };
    const handlePasswordInput = (event:React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) };
    const handleNameInput = (event:React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value) };
    
    const handleNevigateToLogin = () => { navigate("/account/signin") };

    const handleSubmit = async () => {
        const response = await fetch("http://127.0.0.1:5000/auth/signup", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        });
 
        const data = await response.json()
        console.log(data)

    }
    
    return (
        <div className="flex justify-center items-center w-full h-auto min-h-[75dvh] text-base lg:text-lg">
            <div className="flex flex-col w-full lg:w-4/6 h-auto p-4 lg:p-10 gap-10 lg:gap-4">
                <div className="w-full h-fit">
                    <h1 className="text-4xl lg:text-5xl">Create an Account</h1>
                </div>
                <div className="flex flex-col w-full h-auto gap-4 font-marquee text-xl">
                    <div className="w-full h-fit">
                        <TextField  ref={ nameRef }  
                                    required
                                    title={ "namek" } 
                                    placeholder="Full Name"
                                    onChange={ handleNameInput } />
                    </div>
                    <div className="w-full h-fit">
                        <TextField  ref={ emailRef }
                                    required
                                    id="email" 
                                    title="email" 
                                    placeholder="Email Address"
                                    onChange={ handleEmailInput } />
                    </div>
                    <div className="w-full h-fit">
                        <TextField  ref={ passwordRef }
                                    required 
                                    title="password" 
                                    placeholder="Password" 
                                    onChange={ handlePasswordInput } />
                    </div>
                </div>
                <div className="flex w-full h-12 gap-4 font-marquee">
                    {/* <Link to={"/account/signin"} className="flex items-center justify-center h-full w-1/2 border cursor-pointer">
                        <span className="">Back to Login</span>
                    </Link> */}
                    <Button type="button"
                            onClick={ handleNevigateToLogin } 
                            color={"primary"} 
                            size="full" >
                                Back to Login
                    </Button>
                    <Button type="submit"
                            onSubmit={ handleSubmit } 
                            color="secondary" 
                            size="full" >
                                Create
                    </Button>
                </div>
            </div>
        </div>
    )
}