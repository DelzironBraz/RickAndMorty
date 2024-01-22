import { Box, FormControl, InputAdornment, MenuItem, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Gender, Species, Status } from "../utils/charactersFilters";
import { setGender, setName, setSpecies, setStatus } from "../utils/redux/characterSlice";
import { BiSearchAlt } from "react-icons/bi";

const CharacterFilter = () => {
    const { name, species, gender, status } = useSelector((state) => state.characterStore);
    const dispatch = useDispatch();

    return (
        <Box>
            <FormControl sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', gap: '2rem' }}>
                <TextField
                    id="input-with-icon-textfield"
                    label="Name"
                    placeholder="Filter by name..."
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
                    label="Species"
                    placeholder="Species"
                    onChange={event => dispatch(setSpecies(event.target.value))}
                    value={species}
                    fullWidth
                >
                    {Species.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Gender"
                    placeholder="Gender"
                    onChange={event => dispatch(setGender(event.target.value))}
                    value={gender}
                    fullWidth
                >
                    {Gender.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Status"
                    placeholder="Status"
                    onChange={event => dispatch(setStatus(event.target.value))}
                    value={status}
                    fullWidth
                >
                    {Status.map((option, index) => (
                        <MenuItem key={index} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </TextField>
            </FormControl>
        </Box>
    );
};

export default CharacterFilter;