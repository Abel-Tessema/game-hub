import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch.tsx";

function NavBar() {
    return (
        <HStack justifyContent="space-between" padding="5px 12px">
            <Image src={logo} boxSize="60px"></Image>
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;