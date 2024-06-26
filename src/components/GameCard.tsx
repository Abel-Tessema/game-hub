import {Card, CardBody, Heading, Image} from "@chakra-ui/react";
import {Game} from "../hooks/useGames.ts";
import PlatformIconsList from "./PlatformIconsList.tsx";

interface Props {
    game: Game;
}

function GameCard({game}: Props) {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={game.background_image} alt={game.name}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <PlatformIconsList platforms={game.parent_platforms.map(parentPlatform => parentPlatform.platform)} />
            </CardBody>
        </Card>
    );
}

export default GameCard;