import { Box, Button, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Banner = ({ image, width, height, isBack = false, name = '', borderRadius = '' }) => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginY: '3rem' }}>
            {isBack ?
                <Box sx={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', display: 'flex', gap: '.5rem' }}>
                    <FaArrowLeft /> <Link to="/" className="text-black font-semibold">GO BACK</Link>
                </Box>
                : ''}

            <img src={image} alt="banner" width={width} height={height} style={{ 'borderRadius': borderRadius }} />
            {name && <Typography variant="h4">{name}</Typography>}
        </Box >
    )
}

export default Banner;