import useGenres from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";
import useGameQueryStore from "../gameQueryStore.ts";

function GenreList() {
    const {data: {results: genres}, isLoading, error} = useGenres();

    const selectedGenreId = useGameQueryStore(selector => selector.gameQuery.genreId);

    const setGenreId = useGameQueryStore(selector => selector.setGenreId);

    if (error) return null;

    if (isLoading) return <Spinner/>;

    return (
        <>
            <Heading fontSize="2xl" marginY={4}>Genres</Heading>
            <List>
                {genres.map(genre =>
                    <ListItem key={genre.id} paddingY="5px">
                        <HStack>
                            <Image
                                objectFit="cover"
                                src={getCroppedImageUrl(genre.image_background)}
                                boxSize="32px"
                                borderRadius="8px"
                            />
                            <Button
                                key={genre.id}
                                fontSize="lg"
                                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                                variant="link"
                                whiteSpace="wrap"
                                textAlign="left"
                                onClick={() => {
                                    genre.id !== selectedGenreId
                                        ? setGenreId(genre.id)
                                        : setGenreId(undefined);
                                }}
                            >
                                {genre.name}
                            </Button>
                        </HStack>
                    </ListItem>
                )}
            </List>
        </>
    );
}

export default GenreList;
