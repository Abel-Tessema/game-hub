import {useState} from 'react';
import {Button, Text} from "@chakra-ui/react";

interface Props {
    children: string,
}

function ExpandableText({children}: Props) {
    const [isExpanded, setExpanded] = useState<boolean>(false);
    const limit = 300;

    if (!children) return null;

    if (children.length <= limit) return <Text>children</Text>

    const summary = children?.substring(0, limit) + "… ";

    return (
        <Text>
            {isExpanded ? children + " " : summary}
            <Button
                onClick={() => setExpanded(!isExpanded)}
                size={"xs"}
                fontWeight="bold"
                colorScheme="yellow"
            >
                Show {isExpanded ? "Less" : "More"}
            </Button>
        </Text>
    );
}

export default ExpandableText;