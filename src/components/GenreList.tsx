import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre | null) => void,
    selectedGenre: Genre | null
}

function GenreList({onSelectGenre, selectedGenre}: Props) {
    const {data, isLoading, error} = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner/>;

    return (
        <>
            <Heading fontSize="2xl" marginY={4}>Genres</Heading>
            <List>
                {data.map(genre =>
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
                                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                                variant="link"
                                whiteSpace="wrap"
                                textAlign="left"
                                onClick={() => {
                                    genre.id !== selectedGenre?.id
                                        ? onSelectGenre(genre)
                                        : onSelectGenre(null);
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
