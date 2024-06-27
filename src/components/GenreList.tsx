import useGenres from "../hooks/useGenres.ts";
import {HStack, Image, List, ListItem, Text} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

function GenreList() {
    const {data} = useGenres();
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
                        <Text
                            key={genre.id}
                            fontSize="lg"
                        >
                            {genre.name}
                        </Text>
                    </HStack>
                </ListItem>
            )}
        </List>
    );
}

export default GenreList;