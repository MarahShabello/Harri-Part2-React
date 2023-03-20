import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, ListItem } from '@mui/material/';

const StyledBox = styled(Box)(() => ({
    backgroundColor: '#fafafa',
    color: '#111517'
}));

const StyledCountryInfo = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '16px'
}));

function FirstDetailsList(props) {
    return (
        <StyledBox>
            <List>
                <ListItem disablePadding>
                    <StyledCountryInfo>Native Name:</StyledCountryInfo>
                    {props.nativeName}
                </ListItem>
                <ListItem disablePadding>
                    <StyledCountryInfo>Population:</StyledCountryInfo>
                    {props.population}
                </ListItem>
                <ListItem disablePadding>
                    <StyledCountryInfo>Region:</StyledCountryInfo>
                    {props.region}
                </ListItem>
                <ListItem disablePadding>
                    <StyledCountryInfo>Sub Region:</StyledCountryInfo>
                    {props.subRegion}
                </ListItem>
                <ListItem disablePadding>
                    <StyledCountryInfo>Capital:</StyledCountryInfo>
                    {props.capital}
                </ListItem>
            </List>
        </StyledBox>
    );
}

export default FirstDetailsList;