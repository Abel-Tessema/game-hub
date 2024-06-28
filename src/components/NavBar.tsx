import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch.tsx";
import SearchInput from "./SearchInput.tsx";

interface Props {
    onSearch: (searchText: string) => void
}

function NavBar({onSearch}: Props) {
    return (
        <HStack paddingX={15} paddingY={3}>
            <Image src={logo} alt="Game Hub" boxSize="60px"></Image>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch />
        </HStack>
    );
}

export default NavBar;