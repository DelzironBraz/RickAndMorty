import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters, setCount, setPage } from "../utils/redux/characterSlice";
import { filterCharacters } from "../utils/fetchFromApi";

import { Alert, Box, Card, CardActionArea, CardContent, CardMedia, CircularProgress, Grid, Pagination, Typography } from "@mui/material";

const CharacterGrid = () => {
    const { characters, page, count, name, species, gender, status } = useSelector((state) => state.characterStore);
    const dispatch = useDispatch();

    const { isLoading, isError, error, data } = useQuery(['characters', page, name, species, gender, status], () =>
        filterCharacters(page, name, species, gender, status)
    );

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
        dispatch(setCharacters(results));
        dispatch(setCount(info.pages));
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    };

    return (
        <Box sx={{ width: '100%', marginY: '4rem' }}>
            <Grid container spacing={{ xs: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
                {characters.map((character) => (
                    <Grid item xs={4} key={character.id}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="168"
                                    image={character.image}
                                    alt={character.name}
                                />
                                <CardContent sx={{ padding: '12px 16px' }}>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '20px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                        {character.name}
                                    </Typography>
                                    <Typography gutterBottom component="div" sx={{ fontSize: '14px' }}>
                                        {character.status}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginY: '2rem' }}>
                <Pagination count={count} page={page} variant="outlined" shape="rounded" onChange={handleChange} siblingCount={1} />
            </Box>
        </Box>
    );
};

export default CharacterGrid;
