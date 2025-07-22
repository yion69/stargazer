import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../components/Button";
import TextField from "../../components/TextField";


export default function SignUpPage() {
 
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>();
    const [name, setName] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    const handleEmailInput = (event:React.ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value) };
    const handlePasswordInput = (event:React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) };
    const handleNameInput = (event:React.ChangeEvent<HTMLInputElement>) => { setName(event.target.value) };
    
    const handleNevigateToLogin = () => { navigate("/account/signin") };

    const handleSubmit = async (e:React.FormEvent) => {
        
        e.preventDefault();

        if (!email?.trim() || !name?.trim() || !password?.trim() ) {
            if ( !email ) {

            }

            return 
        }

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
            
            <form method="submit" onSubmit={ handleSubmit } className="flex flex-col w-full lg:w-4/6 h-auto p-4 lg:p-10 gap-10 lg:gap-4">
                <div className="w-full h-fit">
                    <h1 className="text-4xl lg:text-5xl">Create an Account</h1>
                </div>
                <div className="flex flex-col w-full h-auto gap-4 font-marquee text-xl">
                    <TextField  required
                                title={ "name" } 
                                placeholder="Full Name"
                                onChange={ handleNameInput }
                                className="has-invalid:border-red-400" />
                    <TextField  required
                                id="email" 
                                title="email" 
                                placeholder="Email Address"
                                onChange={ handleEmailInput } 
                                className="has-invalid:border-red-400" />
                    <TextField  required 
                                title="password" 
                                placeholder="Password" 
                                onChange={ handlePasswordInput } 
                                className="has-invalid:border-red-400" />
                </div>
                <div className="flex w-full h-12 gap-4 font-marquee">
                    <Button type="button"
                            onClick={ handleNevigateToLogin } 
                            color={"primary"} 
                            size="full" >
                                Back to Login
                    </Button>
                    <Button type="submit"
                            color="secondary" 
                            size="full" >
                                Create
                    </Button>
                </div>
            </form>

        </div>
    )
}