import {Badge} from "@chakra-ui/react";

interface Props {
    score: number,
    fontSize?: number
}
function CriticScore({score, fontSize}: Props) {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
    return (
        <Badge
            colorScheme={color}
            fontSize={fontSize ? fontSize : 10}
            paddingX={2}
            borderRadius={3}
        >
            {score}
        </Badge>
    );
}

export default CriticScore;