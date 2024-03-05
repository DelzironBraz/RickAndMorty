import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"

import { getSingleEpisode } from "../utils/fetchFromApi"
import { useQueries } from "react-query";
import LoadingCircle from "./LoadingCircle";
import Toast from "./Toast";

const CharacterTable = ({ character }) => {

    const episodeQueries = useQueries(
        character.episode.slice(0, 6).map((episodeUrl, index) => ({
            queryKey: ['episode', index],
            queryFn: () => getSingleEpisode(episodeUrl),
        }))
    );

    if (episodeQueries.some((query) => query.isLoading)) return <LoadingCircle />;

    // if (episodeQueries.some((query.error) => query.isError)) 

    if (episodeQueries.every(query => query.data)) {
        return (
            <Box sx={{ width: '100%', marginY: '6rem' }}>
                <TableContainer sx={{
                    width: '100%', display: 'flex', justifyContent: 'center', gap: '3rem',
                    '@media (max-width: 500px)': {
                        flexDirection: 'column'
                    },
                }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5" sx={{ fontWeight: '100' }}>Informations</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ width: '100%', justifyContent: 'center' }}>
                            <TableRow>
                                <TableCell align="left" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Gender</Typography>
                                    <Typography variant="subtitle1">{character.gender}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Status</Typography>
                                    <Typography variant="subtitle1">{character.status}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Species</Typography>
                                    <Typography variant="subtitle1">{character.species}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Origin</Typography>
                                    <Typography variant="subtitle1">{character.origin.name}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Type</Typography>
                                    <Typography variant="subtitle1">{character.type === '' ? 'unknown' : character.type}</Typography>
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell align="left" sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Location</Typography>
                                    <Typography variant="subtitle1">{character.location.name}</Typography>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography variant="h5" sx={{ fontWeight: '100' }}>Episodes</Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ width: '100%' }}>
                            {episodeQueries.map((query, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        <Typography variant="h6">{query.data.episode}</Typography>
                                        <Typography variant="subtitle1">{query.data.name}</Typography>
                                        <Typography variant="subtitle1">{query.data.air_date}</Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer >
            </Box>
        )
    }
}


export default CharacterTable