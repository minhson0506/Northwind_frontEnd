import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CSS from 'csstype';
import { useMainContext } from '../contexts/MainContext';
import { InputAdornment } from '@mui/material';

interface SearchBarMobileProps {}

export const SearchBarMobile: React.FC<SearchBarMobileProps> = () => {
    const { setInput, checked, setChecked } = useMainContext();

    return (<div style={titleBoxStyles}>
        <p style={textStyles}>Filter orders by product name</p>
        <TextField
            id="input-with-sx"
            placeholder="Aniseed Syrup"
            variant="standard"
            onChange={(e) => {
                setInput(e.target.value);
            }}
            InputProps={{
                disableUnderline: true,
                endAdornment: (
                    <InputAdornment position="end">
                        <SearchIcon style={iconStyle} />
                    </InputAdornment>
                ),
            }}
            style={textFieldStyles}
        />
        <FormControlLabel
            control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} style={checkBoxStyles} />}
            label="Show only shipped orders"
            style={textStyles}
        />
    </div>);
};
const titleBoxStyles: CSS.Properties = {
    margin: 0,
    padding: 0,
    width: '50%',
    alignContent: 'center',
};

const textStyles: CSS.Properties = {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    marginLeft: '5px',
    color: '#ffffff',
    fontSize: '16px',
    lineHeight: '19px',
    marginTop: '10px',
};

const iconStyle: CSS.Properties = {
    fontSize: '30px',
    marginRight: '20px',
    color: '#ffffff',
};

const checkBoxStyles: CSS.Properties = {
    color: '#b54139',
};

const textFieldStyles: CSS.Properties = {
    background: 'rgba(255,255,255, 0.08)',
    color: 'rgba(255,255,255, 0.5)',
    borderRadius: '20px',
    width: '100%',
    height: '40px',
    justifyContent: 'center',
    paddingLeft: '20px',
};
