import { Box } from "@mui/material"
import Banner from "../components/Banner"
import banner from '../assets/locations.svg';
import LocationFilter from "../components/LocationFilter";
import LocationGrid from "../components/LocationGrid";

const Locations = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', flexDirection: 'column', marginTop: '4rem' }}>
            <Box sx={{ width: '80%' }}>
                <Banner image={banner} width={326} height={202} />
                <LocationFilter />
                <LocationGrid />
            </Box>
        </Box>
    )
}

export default Locations