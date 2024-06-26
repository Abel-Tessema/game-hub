import {
    FaWindows,
    FaXbox,
    FaPlaystation,
    FaApple,
    FaLinux,
    FaAndroid
} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "../hooks/useGames.ts";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props {
    platforms: Platform[]
}

function PlatformIconsList({platforms}: Props) {
    const iconsMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe
    }
    return (
        <HStack marginY={2.5}>
            {platforms.map(platform =>
                <Icon as={iconsMap[platform.slug]} key={platform.id} color="gray.500"/>)}
        </HStack>
    );
}

export default PlatformIconsList;