import {Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

function SortSelector() {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: Relevance
            </MenuButton>
            <MenuList maxHeight={400} overflowY="auto">
                <MenuItem key={"all"} onClick={() => {

                }}>
                    None
                </MenuItem>
                <MenuDivider />
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Release Date</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default SortSelector;