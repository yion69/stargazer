import { Loader2 } from "lucide-react";
import { useAuth, type AuthorizationType } from "../../utils/AuthValidation";
import { useEffect } from "react";

export default function Middleware() {

    const auth = useAuth()
    const searchParams = new URLSearchParams(window.location.search);

    useEffect(() => {
        const authStatus = searchParams.get('auth_check') as AuthorizationType
        const id = searchParams.get('user_id') as string
        const handleAuthRedirect = async () => auth.google_login_redirect(authStatus, id)
        handleAuthRedirect()
    }, [])
 
    return (
        <div className="absolute top-0 left-0 bg-zinc-50 z-20 flex items-center justify-center w-screen h-screen">
            <h1 className="flex flex-col items-center justify-center gap-4 text-5xl">
                Authenticating
                <Loader2 size={ 35 } className="animate-spin" />
            </h1>
        </div>
    )
}