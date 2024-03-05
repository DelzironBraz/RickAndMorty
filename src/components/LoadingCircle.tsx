import { Box, CircularProgress } from '@mui/material'

const LoadingCircle = () => {
    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', marginTop: '3rem' }}>
            <CircularProgress color="success" size={200} />
        </Box>
    )
}

export default LoadingCircle;