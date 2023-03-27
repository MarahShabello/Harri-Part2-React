import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, ListItem } from '@mui/material/';

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    color: '#111517',
    marginRight: '80px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '40px'
    },
}));

const StyledCountryInfo = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '18px',
    marginInlineEnd: '3px'
}));

const StyledListItem = styled(ListItem)(({theme}) => ({
    marginBottom: '5px',
    fontSize: '18px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '10px'
    },
}));

function FirstDetailsList(props) {
    return (
        <StyledBox>
            <List>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Native Name:</StyledCountryInfo>
                    {props.nativeName}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Population:</StyledCountryInfo>
                    {props.population}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Region:</StyledCountryInfo>
                    {props.region}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Sub Region:</StyledCountryInfo>
                    {props.subRegion}
                </StyledListItem>
                <StyledListItem disablePadding>
                    <StyledCountryInfo>Capital:</StyledCountryInfo>
                    {props.capital}
                </StyledListItem>
            </List>
        </StyledBox>
    );
}

export default FirstDetailsList;