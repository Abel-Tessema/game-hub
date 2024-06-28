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
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)} alt={game.name}></Image>
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                    <PlatformIconsList
                        platforms={game.parent_platforms.map(parentPlatform =>
                            parentPlatform.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize="xl">{game.name}</Heading>
            </CardBody>
        </Card>
    );
}

export default GameCard;