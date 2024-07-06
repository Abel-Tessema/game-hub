import {Platform} from "./Platform.ts";

export interface Game {
    description_raw: string,
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number,
    rating_top: number
    slug: string,
}