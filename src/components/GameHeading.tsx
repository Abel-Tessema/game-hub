import {Heading} from "@chakra-ui/react";
import {GameQuery} from "../App.tsx";
import usePlatforms from "../hooks/usePlatforms.ts";
import useGenres from "../hooks/useGenres.ts";

interface Props {
    gameQuery: GameQuery
}

function GameHeading({gameQuery}: Props) {
    const {data: {results: platforms}} = usePlatforms();
    const {data: {results: genres}} = useGenres();
    const platform = platforms.find(platform => gameQuery.platformId === platform.id);
    const genre = genres.find(genre => gameQuery.genreId === genre.id);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

    return (
        <Heading as="h1" marginBottom={5}>{heading}</Heading>
    );
}

export default GameHeading;