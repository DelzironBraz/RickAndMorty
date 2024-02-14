import { Alert, Box, Card, CardActionArea, CardContent, CircularProgress, Grid, Pagination, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { filterEpisode } from "../utils/fetchFromApi";
import { setEpisodes, setPage, setCount } from "../utils/redux/episodeSlice";

const EpisodeGrid = () => {
    const { episodes, name, page, count } = useSelector((state) => state.episodeStore);
    const dispatch = useDispatch();

    const { isLoading, isError, error, data } = useQuery(['episodes', name, page, count], () =>
        filterEpisode(page, name)
    )

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
        const { results, info } = data;
        dispatch(setEpisodes(results));
        dispatch(setCount(info.pages));
        console.info(info.pages);
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    };

    return (
        <Box sx={{ width: '100%', marginY: '4rem' }}>
            <Grid container spacing={{ xs: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
                {episodes.map((episode) => (
                    <Grid item xs={4} key={episode.id}>
                        <Card>
                            <CardActionArea>
                                <CardContent sx={{ padding: '12px 16px' }}>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '20px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', textAlign: 'center' }}>
                                        {episode.name}
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '14px', textAlign: 'center' }}>
                                        {episode.episode}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginY: '2rem' }}>
                <Pagination count={3} page={page} variant="outlined" shape="rounded" onChange={handleChange} siblingCount={1} />
            </Box>
        </Box>
    );
}

export default EpisodeGrid