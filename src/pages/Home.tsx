import { Box } from "@mui/material";
import CharacterFilter from "../components/CharacterFilter";
import CharacterGrid from "../components/CharacterGrid";
import Banner from "../components/Banner";
import banner from '../assets/characters.svg';

const Home = () => {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', marginTop: '4rem' }}>
            <Box sx={{ width: '80%' }}>
                <Banner image={banner} width={600} height={200} />
                <CharacterFilter />
                <CharacterGrid />
            </Box>
        </Box>
    );
};

export default Home;
