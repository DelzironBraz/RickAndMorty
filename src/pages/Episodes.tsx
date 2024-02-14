import { Box } from "@mui/material"
import Banner from "../components/Banner"
import banner from '../assets/episodes.svg';
import EpisodesFilter from "../components/EpisodeFilter";
import EpisodeGrid from "../components/EpisodeGrid";

const Episodes = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', marginTop: '4rem' }}>
            <Box sx={{ width: '80%' }}>
                <Banner image={banner} width={326} height={202} />
                <EpisodesFilter />
                <EpisodeGrid />
            </Box>
        </Box>
    )
}

export default Episodes