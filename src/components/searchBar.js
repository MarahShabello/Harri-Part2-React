import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Toolbar, InputBase } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#fff',
    margin: '0',
    width: '100%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0'
}));

const StyledSearchIcon = styled(SearchIcon)(() => ({
    color: '#858585'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    margin: '0',
    color: '#858585',
    '& .MuiInputBase-input': {
        padding: theme.spacing(2, 2, 2, 0),
        paddingLeft: `calc(1em + ${theme.spacing(6)})`,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '50ch',
        },
    },
}));

const StyledToolbar = styled(Toolbar)(() => ({
    padding: '0',
    margin: '0',
    marginLeft: '-25px'
}))

function SearchAppBar({onSearch}) {
    const [searchValue, setSearchValue] = useState('');

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        onSearch(event.target.value)
    }

    return (
        <Box>
            <StyledToolbar>
                <Search>
                    <SearchIconWrapper>
                        <StyledSearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search for a country … "
                        inputProps={{ 'aria-label': 'search' }}
                        value={searchValue}
                        onChange={handleChange}
                    />
                </Search>
            </StyledToolbar>
        </Box>
    );
}

export default SearchAppBar;