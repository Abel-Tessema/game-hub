import {Heading} from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform.ts";
import useGenre from "../hooks/useGenre.ts";
import useGameQueryStore from "../gameQueryStore.ts";

function GameHeading() {
    const platformId = useGameQueryStore(selector => selector.gameQuery.platformId);
    const platform = usePlatform(platformId);

    const genreId = useGameQueryStore(selector => selector.gameQuery.genreId);
    const genre = useGenre(genreId);

    const heading = `${platform?.name || ""} ${genre?.name || ""} Games`

    return (
        <Heading as="h1" marginBottom={5}>{heading}</Heading>
    );
}

export default GameHeading;