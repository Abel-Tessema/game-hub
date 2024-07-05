import {Box, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";
import useGameQueryStore from "../gameQueryStore.ts";

function SearchInput() {
    const ref = useRef<HTMLInputElement>(null);

    const setSearchText = useGameQueryStore(selector => selector.setSearchText);

    return (
        <Box marginX={5} width="100%">
            <form onSubmit={event => {
                event.preventDefault();
                if (ref.current) setSearchText(ref.current.value);
            }}>
                <InputGroup>
                    <InputLeftElement children={<BsSearch/>}/>
                    <Input ref={ref} borderRadius={20} placeholder="Search games…" variant="filled"/>
                </InputGroup>
            </form>
        </Box>
    );
}

export default SearchInput;