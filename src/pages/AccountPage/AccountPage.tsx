import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { useAuth } from "../../utils/AuthValidation";

export default function Account() {
    
    const auth = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(auth.user) {
            navigate('/account/profile')
        } else {
            navigate('/account/signin')
        }
    },[])

    return (
        <div className="flex flex-col w-screen h-auto">
            <Outlet />
        </div>
    )
}