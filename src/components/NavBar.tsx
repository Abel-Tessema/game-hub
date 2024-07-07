import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <HStack paddingX={15} paddingY={3} paddingRight={7}>
            <Link to="/"><Image src={logo} alt="Game Hub" boxSize="60px" objectFit="cover"/></Link>
            <SearchInput/>
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;