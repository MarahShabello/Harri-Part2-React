import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const StyledCountryName = styled(Typography)(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    fontSize: '20px',
    textDecoration: 'none'
}));

const StyledCountryData = styled('span')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '16px',
    marginRight: '5px'
}));

const StyledRow = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    fontSize: '15px'
}));

const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#111517'
}));

function ActionAreaCard(props) {
    return (
        <Card sx={{ width: 275, boxShadow: 2 }}>

            <StyledLink to="/details">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="165"
                        src={props.flagURL}
                        alt={props.name}
                    />
                    <CardContent sx={{ marginBottom: 3 }}>
                        <StyledCountryName gutterBottom variant="h5" component="div" sx={{ marginBottom: 2 }}>
                            {props.name}
                        </StyledCountryName>

                        <StyledRow>
                            <StyledCountryData>Population:</StyledCountryData>
                            {props.population}
                        </StyledRow>
                        <StyledRow>
                            <StyledCountryData>Region:</StyledCountryData>
                            {props.region}
                        </StyledRow>
                        <StyledRow>
                            <StyledCountryData>Capital:</StyledCountryData>
                            {props.capital}
                        </StyledRow>
                    </CardContent>
                </CardActionArea>
            </StyledLink>

        </Card>
    );
}

export default ActionAreaCard;