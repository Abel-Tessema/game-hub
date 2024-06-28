import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

function NavBar() {
    return (
        <HStack padding="5px 12px">
            <Image src={logo} alt="Game Hub" boxSize="60px"></Image>
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;