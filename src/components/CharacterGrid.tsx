import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setCharacters, setCount, setPage } from "../utils/redux/characterSlice";
import { filterCharacters } from "../utils/fetchFromApi";

import { Box, Grid, Pagination } from "@mui/material";
import LoadingCircle from "./LoadingCircle";
import Toast from "./Toast";
import CharacterCard from "./CharacterCard";

const CharacterGrid = () => {
    const { characters, page, count, name, species, gender, status } = useSelector((state) => state.characterStore);
    const dispatch = useDispatch();

    const { isLoading, isError, error, data } = useQuery(['characters', page, name, species, gender, status], () =>
        filterCharacters(page, name, species, gender, status)
    );

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    };

    if (isLoading) return <LoadingCircle />

    if (isError) return <Toast error={error} />

    if (data) {
        const { results, info } = data;
        dispatch(setCharacters(results));
        dispatch(setCount(info.pages));

        return (
            <Box sx={{ width: '100%', marginY: '4rem' }}>
                <Grid container spacing={{ xs: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
                    {characters.map((character) => (
                        <Grid item xs={4} key={character.id}>
                            <CharacterCard character={character} />
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginY: '2rem' }}>
                    <Pagination count={count} page={page} variant="outlined" shape="rounded" onChange={handleChange} siblingCount={1} />
                </Box>
            </Box>
        );
    }
};

export default CharacterGrid;
