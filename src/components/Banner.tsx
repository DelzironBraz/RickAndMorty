import { Box } from "@mui/material"

const Banner = ({ image }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginY: '2rem' }}>
            <img src={image} alt="banner" width="600" height="200" />
        </Box>
    )
}

export default Banner;