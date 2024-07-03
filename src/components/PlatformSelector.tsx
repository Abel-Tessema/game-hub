import {Button, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platform} from "../hooks/usePlatforms.ts";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void
    selectedPlatform: Platform | null
}

function PlatformSelector({onSelectPlatform, selectedPlatform}: Props) {
    const {data: platforms, error, isLoading} = usePlatforms();

    if (error) return null;

    if (isLoading) return <Spinner/>

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || "All Platforms"}
            </MenuButton>
            <MenuList maxHeight={400} overflowY="auto">
                <MenuItem key={"all"} onClick={() => {
                    onSelectPlatform(null)
                }}>
                    All Platforms
                </MenuItem>
                <MenuDivider />
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