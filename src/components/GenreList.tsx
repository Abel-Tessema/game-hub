import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface Props {
    onSelectGenre: (genre: Genre) => void
}

function GenreList({onSelectGenre}: Props) {
    const {data, isLoading, error} = useGenres();

    if (error) return null;

    if (isLoading) return <Spinner />;

    return (
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY="5px">
                    <HStack>
                        <Image
                            src={getCroppedImageUrl(genre.image_background)}
                            boxSize="32px"
                            borderRadius="8px"
                        />
                        <Button
                            key={genre.id}
                            fontSize="lg"
                            variant="link"
                            overflow="clip"
                            onClick={() => onSelectGenre(genre)}
                        >
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    );
}

export default GenreList;