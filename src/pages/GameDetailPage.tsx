import {useParams} from "react-router-dom";
import useGame from "../hooks/useGame.ts";
import {Center, Divider, Heading, Spinner} from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText.tsx";
import GameAttributes from "../components/GameAttributes.tsx";
import GameTrailer from "../components/GameTrailer.tsx";
import GameScreenshots from "../components/GameScreenshots.tsx";

function GameDetailPage() {
    const {slug} = useParams();
    const {data: game, isLoading, error} = useGame(slug!);

    if (isLoading) return <Spinner/>

    if (error || !game) throw error;

    return (
        <>
            <Heading>{game.name}</Heading>
            <ExpandableText>{game.description_raw}</ExpandableText>
            <GameAttributes game={game}/>
            <Center><Divider width={300} marginTop={5}/></Center>
            <GameTrailer slug={game.slug}/>
            <Center><Divider width={300} marginTop={5}/></Center>
            <GameScreenshots slug={game.slug}/>
        </>
    );
}

export default GameDetailPage;