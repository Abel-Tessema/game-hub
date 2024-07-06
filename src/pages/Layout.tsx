import NavBar from "../components/NavBar.tsx";
import {Analytics} from "@vercel/analytics/react";
import {Outlet} from "react-router-dom";

function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Analytics/>
        </>
    )
}

export default Layout
