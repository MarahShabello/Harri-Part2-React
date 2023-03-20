import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import germanyFlag from './de.svg';
import ClearIcon from '@mui/icons-material/Clear';

const Favourites = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    marginLeft: '35px',
    padding: '10px'
}));

const StyledTypography = styled(Typography)(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    fontSize: '25px',
    marginBottom: '20px'
}));

const CountryFlag = styled('img')(() => ({
    height: '25px',
    width: '45px',
    marginRight: '10px',
    borderRadius: '5px'
}));

const StyledClearIcon = styled(ClearIcon)(() => ({
    backgroundColor: '#fafafa',
    borderRadius: '50px',
    padding: '2px'
}));

const StyledFavCountry = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}));

const FavouriteCountry = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '16px'
}));

function FavouritesSection() {
    return (
        <Favourites>
            <StyledTypography>Favourites</StyledTypography>
            <StyledFavCountry>
                <span>
                    <CountryFlag src={germanyFlag} />
                    <FavouriteCountry>Germany</FavouriteCountry>
                </span>
                <StyledClearIcon />
            </StyledFavCountry>
        </Favourites>
    );
}

export default FavouritesSection;