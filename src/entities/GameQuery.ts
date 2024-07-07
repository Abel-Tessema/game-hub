export default interface GameQuery {
    genreId?: number,
    pageSize?: number,
    platformId?: number,
    sortOrder?: string,
    searchText?: string
}