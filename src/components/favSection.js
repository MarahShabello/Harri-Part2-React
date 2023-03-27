import * as React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavouriteCountry from './favouriteCountry';

import germanyFlag from './de.svg';

const Favourites = styled('div')(({theme}) => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    height: '100%',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
    [theme.breakpoints.only('md')]: {
        display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
        display: 'block'
    },
}));

const StyledTypography = styled(Typography)(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    fontSize: '30px',
    marginBottom: '25px'
}));

function FavouritesSection() {
    return (
        <Favourites>
            <StyledTypography>Favourites</StyledTypography>
            <FavouriteCountry
                name='Germany'
                flag={germanyFlag}
            />
        </Favourites>
    );
}

export default FavouritesSection;