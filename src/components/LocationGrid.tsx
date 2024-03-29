import { Alert, Box, Card, CardActionArea, CardContent, CircularProgress, Grid, Pagination, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { filterLocation } from "../utils/fetchFromApi";
import { setCount, setLocation, setPage } from "../utils/redux/locationSlice";
import LoadingCircle from "./LoadingCircle";
import Toast from "./Toast";

const LocationGrid = () => {
    const { locations, name, page, count, type, dimension } = useSelector((state) => state.locationStore);
    const dispatch = useDispatch();

    const { isLoading, isError, error, data } = useQuery(['locations', name, page, count, type, dimension], () =>
        filterLocation(name, type, dimension)
    );

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setPage(value))
    };

    if (isLoading) return <LoadingCircle />

    if (isError) return <Toast error={error} />

    if (data) {
        const { results, info } = data;
        dispatch(setLocation(results));
        dispatch(setCount(info.pages));

        return (
            <Box sx={{ width: '100%', marginY: '4rem' }}>
                <Grid container spacing={{ xs: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 16 }}>
                    {locations.map((location) => (
                        <Grid item xs={4} key={location.id}>
                            <Card>
                                <CardActionArea>
                                    <CardContent sx={{ padding: '12px 16px' }}>
                                        <Typography gutterBottom component="div" sx={{ fontSize: '20px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', textAlign: 'center' }}>
                                            {location.name}
                                        </Typography>
                                        <Typography gutterBottom component="div" sx={{ fontSize: '14px', textAlign: 'center' }}>
                                            {location.type}
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
    }
}

export default LocationGrid