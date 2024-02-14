import { Box, FormControl, InputAdornment, TextField } from "@mui/material"
import { BiSearchAlt } from "react-icons/bi"
import { useDispatch, useSelector } from "react-redux";
import { setName } from "../utils/redux/episodeSlice";


const EpisodesFilter = () => {
    const { name } = useSelector((state) => state.episodeStore);
    const dispatch = useDispatch();

    return (
        <Box>
            <FormControl sx={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', flexDirection: 'row', width: 'center',
                '@media (max-width: 910px)': {
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                },
                '@media (max-width: 500px)': {
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                },
            }}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Name"
                    placeholder="   Filter by name or episode (ex. S01 or S01E02)..."
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="end">
                                <BiSearchAlt />
                            </InputAdornment>
                        ),
                    }}
                    variant="outlined"
                    onChange={event => dispatch(setName(event.target.value))}
                    value={name}
                    sx={{ width: '50%' }}
                />
            </FormControl>
        </Box>
    )
}

export default EpisodesFilter