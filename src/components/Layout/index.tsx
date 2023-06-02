import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

export default function Layout() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}