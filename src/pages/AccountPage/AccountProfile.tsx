import { useEffect, useState } from "react"
import { useAuth, type UserData } from "../../utils/useAuth";
import Button from "../../components/Button";
import TextField from "../../components/TextField";

export default function AccountProfile() {

    const auth = useAuth()
    const [user, setUser] = useState<UserData>();
    useEffect(() => {
        console.log("outer ==> ", auth.user)
        if(auth.user) {
            setUser(auth.user)
            console.log(user)
        }
    }, [])

    return (
        <div className="flex flex-col items-center w-full h-auto py-10 gap-10">
            <div className="flex flex-col w-11/12 lg:w-9/12 h-auto gap-4">
                <h1 className="text-2xl lg:text-4xl">Account</h1>
                <div className="flex w-full h-auto min-h-52 gap-4">
                {
                    user && 
                    <>
                        <div className="flex flex-col w-full h-auto gap-3">
                            <div className="flex flex-col w-full h-fit gap-1">
                                <label htmlFor="#user-id" className="lg:text-2xl">User ID</label>
                                <TextField disabled id="user-id" title={'User-ID'} value={user.user_id}/>
                            </div>
                            <div className="flex flex-col w-full h-fit gap-2">
                                <label htmlFor="#user-name" className="lg:text-2xl">Name</label>
                                <TextField disabled id="user-name" title={'User-Name'} value={user.user_name}/>
                            </div>
                            <div className="flex flex-col w-full h-fit gap-2">
                                <label htmlFor="#user-email" className="lg:text-2xl">Email Address</label>
                                <TextField disabled id="user-email" title={'User-Email'} value={user.user_email}/>
                            </div>
                        </div>
                    </>
                }
                </div>
                <div className="h-14 lg:h-14 w-1/2 lg:w-1/4 text-sm lg:text-base ms-auto font-semibold">
                    <Button color={"danger"} size={"full"} onClick={auth.logout}>LOG OUT</Button>
                </div>
            </div>
            <div className="flex flex-col w-11/12 lg:w-9/12 h-auto gap-4">
                <h1 className="text-4xl">Order History</h1>
                <div className="w-full h-auto min-h-80">
            </div>

            </div>
        </div>
    )
}