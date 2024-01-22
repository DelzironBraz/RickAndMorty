import { Box } from "@mui/material";
import CharacterFilter from "../components/CharacterFIlter";
import CharacterGrid from "../components/CharacterGrid";
import Banner from "../components/Banner";
import banner from '../assets/banner_home.png'

const Home = () => {

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column' }}>
            <Box sx={{ width: '80%' }}>
                <Banner image={banner} />
                <CharacterFilter />
                <CharacterGrid />
            </Box>
        </Box>
    );
};

export default Home;
