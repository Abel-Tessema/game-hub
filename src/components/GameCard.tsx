import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconsList from "./PlatformIconsList.tsx";
import CriticScore from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";
import Emoji from "./Emoji.tsx";
import {Link} from "react-router-dom";
import Game from "../entities/Game.ts";

interface Props {
    game: Game;
}

function GameCard({game}: Props) {
    return (
        <Link to={"/games/" + game.slug}>
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
                    <Emoji rating={game.rating_top}/>
                </CardBody>
            </Card>
        </Link>
    );
}

export default GameCard;