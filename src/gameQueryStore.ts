import {create} from "zustand";
import {mountStoreDevtool} from "simple-zustand-devtools";
import GameQuery from "./entities/GameQuery.ts";

export interface GameQueryStore {
    gameQuery: GameQuery;

    setGenreId: (genreId?: number) => void,
    setPageSize: (pageSize?: number) => void,
    setPlatformId: (platformId?: number) => void,
    setSortOrder: (sortOrder: string) => void,
    setSearchText: (searchText?: string) => void,
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},

    setGenreId: (genreId?: number) => set(store => ({gameQuery: {...store.gameQuery, genreId}})),
    setPageSize: (pageSize?: number) => set(store => ({gameQuery: {...store.gameQuery, pageSize}})),
    setPlatformId: (platformId?: number) => set(store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder: string) => set(store => ({gameQuery: {...store.gameQuery, sortOrder}})),
    setSearchText: (searchText?: string) => set(() => ({gameQuery: {searchText}})),
}));

if (process.env.NODE_ENV === 'development')
    mountStoreDevtool("Game Query Store", useGameQueryStore);

export default useGameQueryStore;