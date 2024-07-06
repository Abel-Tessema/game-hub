import NavBar from "../components/NavBar.tsx";
import {Analytics} from "@vercel/analytics/react";
import {Outlet} from "react-router-dom";
import {Box} from "@chakra-ui/react";

function Layout() {
    return (
        <>
            <NavBar/>
            <Box padding={5}>
                <Outlet/>
            </Box>
            <Analytics/>
        </>
    )
}

export default Layout
