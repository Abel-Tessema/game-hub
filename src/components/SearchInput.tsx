import {Box, Input, InputGroup, InputLeftElement} from "@chakra-ui/react";
import {BsSearch} from "react-icons/bs";
import {useRef} from "react";

interface Props {
    onSearch: (searchText: string) => void
}

function SearchInput({onSearch}: Props) {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <Box marginX={5} width="100%">
            <form onSubmit={event => {
                event.preventDefault();
                if (ref.current) onSearch(ref.current.value);
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