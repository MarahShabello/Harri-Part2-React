import * as React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FavouriteCountry from './favouriteCountry';

import germanyFlag from './de.svg';

const Favourites = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    height: '100%'
}));

const StyledTypography = styled(Typography)(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    fontSize: '25px',
    marginBottom: '25px'
}));

function FavouritesSection() {
    return (
        <Favourites sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
            <StyledTypography>Favourites</StyledTypography>
            <FavouriteCountry
                name='Germany'
                flag={germanyFlag}
            />
            <FavouriteCountry
                name='Germany'
                flag={germanyFlag}
            />
        </Favourites>
    );
}

export default FavouritesSection;