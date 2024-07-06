import {ReactNode} from "react";
import {Box} from "@chakra-ui/react";

interface Props {
    children: ReactNode
}

function GameCardContainer({children}: Props) {
    return (
        <Box
            borderRadius={10}
            overflow="hidden"
            _hover={{ transform: 'scale(1.05)', boxShadow: 'lg', cursor: 'pointer'}}
            transition="transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out"
        >
            {children}
        </Box>
    );
}

export default GameCardContainer;