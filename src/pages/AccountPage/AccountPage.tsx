import { Link, Outlet } from "react-router";

export default function Account() {
    return (
        <div className="flex flex-col w-screen h-auto">
            <div className="grow w-full h-auto">
                <Outlet />
            </div>

            {/* <div className="flex h-20 w-full gap-10">
                <Link to={"/account/signin"}>
                    <span className="text-4xl border px-10">LOGIN</span>
                </Link>
                <Link to={"/account/signup"}>
                    <span className="text-4xl border px-10">SIGN UP</span>
                </Link>
            </div> */}
        </div>
    )
}