import {Grid, GridItem, Text} from "@chakra-ui/react";
import Game from "../entities/Game.ts";
import GameAttribute from "./GameAttribute.tsx";
import CriticScore from "./CriticScore.tsx";

interface Props {
    game: Game
}

function GameAttributes({game}: Props) {
    const platforms = game.parent_platforms.map(
        ({platform}) => <Text key={platform.id}>{platform.name}<br/></Text>
    );
    const metascore = <CriticScore score={game.metacritic} fontSize={13}/>;
    const genres = game.genres.map(
        genre => <Text key={genre.id}>{genre.name}<br/></Text>
    );
    const publishers = game.publishers.map(
        publisher => <Text key={publisher.id}>{publisher.name}<br/></Text>
    );

    return (
        <>
            <Grid templateAreas={{base: `"platforms metascore" "genres publishers"`}}>

                <GridItem area="platforms">
                    <GameAttribute heading="Platforms" body={platforms}/>
                </GridItem>

                <GridItem area="metascore">
                    <GameAttribute heading="Metascore" body={metascore}/>
                </GridItem>

                <GridItem area="genres">
                    <GameAttribute heading="Genres" body={genres}/>
                </GridItem>

                <GridItem area="publishers">
                    <GameAttribute heading="Publishers" body={publishers}/>
                </GridItem>

            </Grid>
        </>
    );
}

export default GameAttributes;
