import {Box, Button, SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import GameCard from "./GameCard.tsx";
import GameCardSkeleton from "./GameCardSkeleton.tsx";
import GameCardContainer from "./GameCardContainer.tsx";
import {GameQuery} from "../App.tsx";
import {Fragment} from "react";

interface Props {
    gameQuery: GameQuery
}

function GameGrid({gameQuery}: Props) {
    const {
        data,
        error,
        isLoading,
        fetchNextPage,
        isFetchingNextPage,
        hasNextPage
    } = useGames({...gameQuery, pageSize: 10});
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    return (
        <Box padding={5}>
            <SimpleGrid
                columns={{sm: 1, md: 2, lg: 3, xl: 4}}
                spacing={5}
            >
                {isLoading && skeletons.map(skeleton =>
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                )}
                {data?.pages.map((page, index) => (
                    <Fragment key={index}>
                        {page.results.map(game =>
                            <GameCardContainer key={game.id}>
                                <GameCard game={game}/>
                            </GameCardContainer>)}
                    </Fragment>
                ))}
            </SimpleGrid>
            {hasNextPage &&
                <Button
                    marginTop={5}
                    marginBottom={150}
                    disabled={isFetchingNextPage}
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            }
        </Box>
    );
}

export default GameGrid;
