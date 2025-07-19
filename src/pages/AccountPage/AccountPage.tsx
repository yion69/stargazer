import { Outlet } from "react-router";

export default function Account() {
    return (
        <div className="flex flex-col w-screen h-auto">
            <Outlet />
        </div>
    )
}