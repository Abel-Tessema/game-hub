import useScreenshots from "../hooks/useScreenshots.ts";
import {GridItem, Image, SimpleGrid} from "@chakra-ui/react";

interface Props {
    slug: string
}

function GameScreenshots({slug}: Props) {
    const {data, isLoading, error} = useScreenshots(slug);

    if (isLoading) return null;

    if (error) throw error;

    const screenshots = data?.results;

    return screenshots ? (
        <>
            <SimpleGrid columns={{base: 1, md: 2}} spacing={5} margin={2}>
                {screenshots.map(screenshot =>
                    <GridItem key={screenshot.id}>
                        <Image src={screenshot.image}/>
                    </GridItem>
                )}
            </SimpleGrid>
        </>
    ) : null;
}

export default GameScreenshots;