import useGenres from "./useGenres.ts";

const useGenre = (genreId?: number) => {
    const {data: {results: genres}} = useGenres();
    return genres.find(genre => genreId === genre.id);
}

export default useGenre;