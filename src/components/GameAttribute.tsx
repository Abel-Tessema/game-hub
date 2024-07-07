import {Box, Heading} from "@chakra-ui/react";
import {ReactNode} from "react";

interface Props {
    heading: string,
    body: ReactNode | ReactNode[]
}

function GameAttribute({heading, body}: Props) {
    return (
        <>
            <Box marginBottom={7}>
                <Heading fontSize={16} color="gray">{heading}</Heading>
                {body}
            </Box>
        </>
    );
}

export default GameAttribute;