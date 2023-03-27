import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const StyledCountryName = styled(Typography)(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    fontSize: '20px',
    textDecoration: 'none',
    marginBottom: '20px'
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
    fontSize: '16px',
    marginBottom: '5px'
}));

const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#111517'
}));

const StyledStarIcon = styled(StarRateRoundedIcon)(({theme}) => ({
    color: 'lightgray',
    fontSize: '35px',
    marginInlineStart: 'auto',
    marginInlineEnd: '5px',
    marginBottom: '5px',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    },
    [theme.breakpoints.only('md')]: {
        display: 'block'
    },
    [theme.breakpoints.up('lg')]: {
        display: 'none'
    },
}));

const SryledCard = styled(Card)(() => ({
    border: 'none',
    borderRadius: '8px',
    boxShadow: '1px 1px 8px lightgray',
    width: 290,
}));

const StyledCardContent = styled(CardContent)(({theme}) => ({
    marginTop: '10px',
    marginLeft: '5px',
    marginRight: '5px',
    [theme.breakpoints.down('md')]: {
        marginBottom: '0'
    },
    [theme.breakpoints.up('lg')]: {
        marginBottom: '20px'
    },
}));

const StyledCardMedia = styled(CardMedia)(() => ({
    height: '165px',
    objectFit: 'cover'
}));

function ActionAreaCard(props) {
    return (
        <SryledCard>

            <StyledLink to="/details">
                <CardActionArea>
                    <StyledCardMedia
                        component="img"
                        src={props.flagURL}
                        alt={props.name}
                    />
                    <StyledCardContent>
                        <StyledCountryName gutterBottom variant="h5" component="div">
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
                    </StyledCardContent>
                </CardActionArea>
            </StyledLink>
            <StyledRow>
                <StyledStarIcon />
            </StyledRow>

        </SryledCard>
    );
}

export default ActionAreaCard;