import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import bullsEye from "../assets/bulls-eye.webp";
import {Image, ImageProps} from "@chakra-ui/react";

interface Props {
    rating: number
}

function Emoji({rating}: Props) {
    if (rating < 3) return null;

    const emojiMap: {[key: string]: ImageProps} = {
        3: {src: meh, alt: "Meh", boxSize: 7},
        4: {src: thumbsUp, alt: "Cool", boxSize: 5},
        5: {src: bullsEye, alt: "Awesome", boxSize: 7}
    };

    return (
        <Image {...emojiMap[rating]} marginTop={2}/>
    );
}

export default Emoji;