import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, List, ListItem } from '@mui/material/';

const StyledBox = styled(Box)(() => ({
    backgroundColor: '#fafafa',
    color: '#111517'
}));

const StyledCountryData = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '16px'
}));

function SecondDetailsList(props) {
    return (
        <StyledBox>
            <List>
                <ListItem disablePadding>
                    <StyledCountryData>Top Level Domain:</StyledCountryData>
                    {props.tld}
                </ListItem>
                <ListItem disablePadding>
                    <StyledCountryData>Currencies:</StyledCountryData>
                    {props.currencies}
                </ListItem>
                <ListItem disablePadding>
                    <StyledCountryData>Languages:</StyledCountryData>
                    {props.languages}
                </ListItem>
            </List>
        </StyledBox>
    );
}

export default SecondDetailsList;