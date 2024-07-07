import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import GenreList from "../components/GenreList.tsx";
import GameHeading from "../components/GameHeading.tsx";
import PlatformSelector from "../components/PlatformSelector.tsx";
import SortSelector from "../components/SortSelector.tsx";
import GameGrid from "../components/GameGrid.tsx";

function HomePage() {
    return (
        <Grid
            templateAreas={{
                base: `"main"`,
                lg: `"aside main"`
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr"
            }}
        >
            <Show above="lg">
                <GridItem area="aside">
                    <GenreList/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <Box paddingLeft={7}>
                    <GameHeading/>
                    <HStack spacing={5} marginBottom={5}>
                        <PlatformSelector/>
                        <SortSelector/>
                    </HStack>
                </Box>
                <GameGrid/>
            </GridItem>
        </Grid>
    );
}

export default HomePage;