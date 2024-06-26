import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import {Game} from "../hooks/useGames.ts";
import PlatformIconsList from "./PlatformIconsList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    game: Game;
}

function GameCard({game}: Props) {
    return (
        <Card borderRadius={10} overflow="hidden">
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}></Image>
            <CardBody>
                <Heading fontSize="2xl">{game.name}</Heading>
                <HStack justifyContent="space-between">
                    <PlatformIconsList
                        platforms={game.parent_platforms.map(parentPlatform =>
                            parentPlatform.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
            </CardBody>
        </Card>
    );
}

export default GameCard;