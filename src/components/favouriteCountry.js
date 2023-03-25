import * as React from 'react';
import { styled } from '@mui/material/styles';
import ClearIcon from '@mui/icons-material/Clear';

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
    justifyContent: 'space-between',
    marginBottom: '8px'
}));

const FavCountry = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '16px'
}));

function FavouriteCountry(props) {
    return (
        <StyledFavCountry>
            <span>
                <CountryFlag src={props.flag} />
                <FavCountry>{props.name}</FavCountry>
            </span>
            <StyledClearIcon />
        </StyledFavCountry>
    );
}

export default FavouriteCountry;