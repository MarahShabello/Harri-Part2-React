import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const StyledInputLabel = styled(InputLabel)(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff'
}));

const StyledSelect = styled(Select)(() => ({
    fontFamily: 'Nunito Sans',
    textAlign: 'left',
    backgroundColor: '#fff',
    height: '50px',
    borderRadius: '4px',
}));

function BasicSelect() {
  return (
    <Box sx={{ width: 120 }}>
      <FormControl fullWidth>
        <StyledInputLabel id="demo-simple-select-label">Filter By</StyledInputLabel>
        <StyledSelect
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Region"
          sx={{boxShadow: 2}}
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
    </Box>
  );
}

export default BasicSelect;