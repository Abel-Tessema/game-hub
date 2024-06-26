import {Badge} from "@chakra-ui/react";

interface Props {
    score: number
}
function CriticScore({score}: Props) {
    const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
    return (
        <Badge colorScheme={color} fontSize={10} paddingX={1.5} borderRadius={3}>{score}</Badge>
    );
}

export default CriticScore;