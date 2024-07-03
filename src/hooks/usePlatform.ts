import usePlatforms from "./usePlatforms.ts";

const usePlatform = (platformId?: number) => {
    const {data: {results: platforms}} = usePlatforms();
    return platforms.find(platform => platformId === platform.id);
}

export default usePlatform;