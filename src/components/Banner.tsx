import { Box } from "@mui/material"

const Banner = ({ image, width, height }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginY: '2rem' }}>
            <img src={image} alt="banner" width={width} height={height} />
        </Box>
    )
}

export default Banner;