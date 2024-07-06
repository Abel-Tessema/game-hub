import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

function NavBar() {
    return (
        <HStack paddingX={15} paddingY={3} paddingRight={7}>
            <Image src={logo} alt="Game Hub" boxSize="60px"></Image>
            <SearchInput/>
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;