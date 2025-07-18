import { Outlet } from "react-router";

export default function AdminDashboard() {
    return (
        <div className="w-screen h-screen">
            <Outlet />
        </div>
    )
}