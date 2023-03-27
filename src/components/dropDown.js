import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const StyledBox = styled(Box)(() => ({
  width: '175px'
}));

const StyledInputLabel = styled(InputLabel)(() => ({
  fontFamily: 'Nunito Sans',
  backgroundColor: '#fff',
}));

const StyledSelect = styled(Select)(() => ({
  fontFamily: 'Nunito Sans',
  textAlign: 'left',
  backgroundColor: '#fff',
  height: '100%',
  borderRadius: '4px',
}));

function BasicSelect() {
  const [region, setFilter] = React.useState('');

  const handleChange = (event) => {
    setFilter(event.target.value);
    console.log(`Region: ${event.target.value}`)
  };

  return (
    <StyledBox>
      <FormControl fullWidth>
        <StyledInputLabel id="demo-simple-select-label">Filter By</StyledInputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value='no-filter'>No filter</MenuItem>
          <MenuItem value='africa'>Africa</MenuItem>
          <MenuItem value='americas'>America</MenuItem>
          <MenuItem value='asia'>Asia</MenuItem>
          <MenuItem value='europe'>Europe</MenuItem>
          <MenuItem value='oceania'>Oceania</MenuItem>
          <MenuItem value='favourites'>Favourites</MenuItem>
        </StyledSelect>
      </FormControl>
    </StyledBox>
  );
}

export default BasicSelect;