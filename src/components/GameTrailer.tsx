import useTrailers from "../hooks/useTrailers.ts";
import {Center, Heading, Spinner} from "@chakra-ui/react";

interface Props {
    slug: string
}

function GameTrailer({slug}: Props) {
    const {data, isLoading, error} = useTrailers(slug);

    if (isLoading) return <Spinner/>;

    if (error) throw error;

    const first = data?.results[0];

    return first ? (
        <>
            <Heading textAlign="center" fontSize={25} marginY={5}>{first.name}</Heading>
            <Center>
                <video
                    src={first.data.max}
                    controls
                    poster={first.preview}
                />
            </Center>
        </>
    ) : null;
}

export default GameTrailer;

// <Box marginY={10}>
//     {data?.results.map(trailer =>
//         <Box marginY={5}>
//             <Heading textAlign="center" fontSize={20} marginY={5}>{trailer.name}</Heading>
//             <Center>
//                 <video
//                     controls={true}
//                     width={600}
//                     poster={trailer.preview}
//                 >
//                     <source src={trailer.data["480"]}/>
//                     <source src={trailer.data["max"]}/>
//                 </video>
//             </Center>
//             <Center><Divider width={300} marginTop={5}/></Center>
//         </Box>
//     )}
// </Box>
