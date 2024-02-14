import { Box, FormControl, InputAdornment, MenuItem, TextField } from "@mui/material";
import { BiSearchAlt } from "react-icons/bi";
import { Dimension, Type } from "../utils/locationsFilters";
import { useDispatch, useSelector } from "react-redux";
import { setDimension, setName, setType } from "../utils/redux/locationSlice";

const LocationFilter = () => {
    const { name, type, dimension } = useSelector((state) => state.locationStore);
    const dispatch = useDispatch();

    return (
        <Box>
            <FormControl sx={{
                display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem', flexDirection: 'row',
                '@media (max-width: 910px)': {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                },
                '@media (max-width: 500px)': {
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                },
            }}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Name"
                    placeholder="   Filter by name..."
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
                    fullWidth
                />
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Type"
                    placeholder="Type"
                    onChange={event => dispatch(setType(event.target.value))}
                    value={type}
                    fullWidth
                >
                    {Type.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Dimension"
                    placeholder="Dimension"
                    onChange={event => dispatch(setDimension(event.target.value))}
                    value={dimension}
                    fullWidth
                >
                    {Dimension.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </FormControl>
        </Box>
    )
};

export default LocationFilter;
