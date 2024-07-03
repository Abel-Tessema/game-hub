import {Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platform} from "../hooks/usePlatforms.ts";
import usePlatform from "../hooks/usePlatform.ts";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void,
    selectedPlatformId?: number
}

function PlatformSelector({onSelectPlatform, selectedPlatformId}: Props) {
    const {data: {results: platforms}, error, isLoading} = usePlatforms();
    const platform = usePlatform(selectedPlatformId);

    if (error) return null;

    if (isLoading) return <Spinner/>

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatformId ? platform?.name : "All Platforms"}
            </MenuButton>
            <MenuList maxHeight={400} overflowY="auto">
                <MenuItem key={"all"} onClick={() => {
                    onSelectPlatform(null)
                }}>
                    All Platforms
                </MenuItem>
                <MenuDivider/>
                {platforms.map(platform =>
                    <MenuItem
                        key={platform.id}
                        onClick={() => {
                            onSelectPlatform(platform);
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