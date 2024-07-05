import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import useGameQueryStore from "../gameQueryStore.ts";

function SortSelector() {
    const sortOrder = useGameQueryStore(selector => selector.gameQuery.sortOrder);

    const setSortOrder = useGameQueryStore(selector => selector.setSortOrder);

    const sortOrders = [
        {value: "", label: "Relevance"},
        {value: "-added", label: "Date Added"},
        {value: "name", label: "Name"},
        {value: "-released", label: "Release Date"},
        {value: "-metacritic", label: "Popularity"},
        {value: "-rating", label: "Average Rating"}
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                Order by: {currentSortOrder?.label || "Relevance"}
            </MenuButton>
            <MenuList maxHeight={400} overflowY="auto">
                {sortOrders.map(order =>
                    <MenuItem
                        key={order.value}
                        value={order.value}
                        onClick={() => setSortOrder(order.value)}
                    >
                        {order.label}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    );
}

export default SortSelector;