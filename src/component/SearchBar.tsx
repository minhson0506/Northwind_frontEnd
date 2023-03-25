import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CSS from 'csstype';
import { useMainContext } from '../contexts/MainContext';

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
    const { setInput, checked, setChecked } = useMainContext();

    return (
        <div>
            <div style={titleBoxStyles}>
                <p style={textStyles}>Filter orders by product name</p>
                <Box style={boxStyles}>
                    <TextField
                        id="input-with-sx"
                        label="Aniseed Syrup"
                        variant="standard"
                        onChange={(e) => {
                            setInput(e.target.value);
                        }}
                        InputProps={{ disableUnderline: true }}
                        style={{ marginLeft: '10px' }}
                    />
                    <IconButton edge="end">
                        <SearchIcon style={iconStyle} />
                    </IconButton>
                </Box>
            </div>

            <FormControlLabel
                control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} style={checkBoxStyles} />}
                label="Show only shipped orders"
                style={textStyles}
            />
        </div>
    );
};

const titleBoxStyles: CSS.Properties = {
    margin: 0,
    padding: 0,
};

const textStyles: CSS.Properties = {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    marginLeft: '20px',
    color: '#ffffff',
    fontSize: '16px',
    lineHeight: '19px',
    marginTop: '20px',
};

const boxStyles: CSS.Properties = {
    margin: 'auto',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    border: '1px solid #000',
    borderRadius: '20px',
    backgroundColor: '#ffffff',
    opacity: '0.5',
};

const iconStyle: CSS.Properties = {
    fontSize: '30px',
    marginRight: '20px',
};

const checkBoxStyles: CSS.Properties = {
    color: '#b54139',
};

export {SearchBar}