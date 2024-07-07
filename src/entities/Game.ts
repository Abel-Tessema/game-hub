import {Platform} from "./Platform.ts";
import {Genre} from "./Genre.ts";
import Publisher from "./Publisher.ts";

export interface Game {
    background_image: string,
    description_raw: string,
    genres: Genre[],
    id: number,
    metacritic: number,
    name: string,
    parent_platforms: { platform: Platform }[],
    publishers: Publisher[],
    rating_top: number
    slug: string,
}