import { Link, Outlet } from "react-router";

export default function AdminDashboard() {

    const AdminPageRoutes = [
        {
            text: 'Components',
            uri: '/admin/components'
        },
        {
            text: 'Items Management',
            uri: '/admin/items-management'
        },
    ]

    return (
        <div className="flex w-screen h-auto py-10">
            <div className="flex flex-col w-3/12 h-auto min-h-screen gap-4 text-base font-mono">
                <h1 className="text-2xl">Dashboard</h1>
                <ul className="w-full h-auto flex flex-col">
                    {
                        AdminPageRoutes.map((element, index) => (
                            <li key={ index }>
                                <Link to={ element.uri }> | { element.text } </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="w-9/12 h-auto min-h-screen">
                <Outlet />
            </div>
        </div>
    )
}