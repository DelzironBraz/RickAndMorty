import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSingleCharacter } from "../utils/fetchFromApi";

import CharacterTable from "../components/CharacterTable";
import { Alert, Box, CircularProgress } from "@mui/material";
import Banner from "../components/Banner";

const CharacterInfo = () => {
    const { characterId } = useParams();

    const { isLoading, isError, error, data } = useQuery(['character'], () =>
        getSingleCharacter(Number(characterId))
    );

    if (isLoading) {
        return (
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', marginTop: '3rem' }}>
                <CircularProgress color="success" size={200} />
            </Box>
        )
    }

    if (isError) {
        return (
            <Alert severity="error" sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', marginTop: '3rem' }}>
                {error.message}
            </Alert>
        )
    }

    if (data) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', marginTop: '4rem' }}>
                <Box sx={{ width: '80%' }}>
                    <Banner image={data.image} width={300} height={300} name={data.name} borderRadius="50%" isBack={true} />
                    <CharacterTable character={data} />
                </Box>
            </Box>
        )
    }
}

export default CharacterInfo