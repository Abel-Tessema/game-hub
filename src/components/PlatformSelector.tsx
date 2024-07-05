import {Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms.ts";
import usePlatform from "../hooks/usePlatform.ts";
import useGameQueryStore from "../gameQueryStore.ts";

function PlatformSelector() {
    const {data: {results: platforms}, error, isLoading} = usePlatforms();

    const selectedPlatformId = useGameQueryStore(selector => selector.gameQuery.platformId);
    const selectedPlatform = usePlatform(selectedPlatformId);

    const setPlatformId = useGameQueryStore(selector => selector.setPlatformId);

    if (error) return null;

    if (isLoading) return <Spinner/>

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || "All Platforms"}
            </MenuButton>
            <MenuList maxHeight={400} overflowY="auto">
                <MenuItem key={"all"} onClick={() => {
                    setPlatformId(undefined)
                }}>
                    All Platforms
                </MenuItem>
                <MenuDivider/>
                {platforms.map(platform =>
                    <MenuItem
                        key={platform.id}
                        onClick={() => {
                            setPlatformId(platform.id);
                        }}
                    >
                        {platform.name}
                    </MenuItem>
                )}
            </MenuList>
        </Menu>
    );
}

export default PlatformSelector;