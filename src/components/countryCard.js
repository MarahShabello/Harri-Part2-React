import * as React from 'react';
import { styled } from '@mui/material/styles';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';

const StyledCountryName = styled(Typography)(() => ({
    fontWeight: '600',
    fontSize: '20px',
    textDecoration: 'none',
    marginBottom: '20px'
}));

const StyledCountryData = styled('span')(() => ({
    fontWeight: '600',
    fontSize: '16px',
    marginRight: '5px'
}));

const StyledRow = styled('div')(() => ({
    fontWeight: '300',
    fontSize: '16px',
    marginBottom: '5px'
}));

const StyledStarIcon = styled(StarRateRoundedIcon)(({ theme }) => ({
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
    // maxWidth: 350,
    width: 'auto',
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
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
    const { flagURL, name, population, region, capital } = props;
    return (
        <SryledCard>

            {/* <StyledLink to="/details"> */}
                <CardActionArea>
                    <StyledCardMedia
                        component="img"
                        src={flagURL}
                        alt={name}
                    />
                    <StyledCardContent>
                        <StyledCountryName gutterBottom variant="h5" component="div">
                            {name}
                        </StyledCountryName>

                        <StyledRow>
                            <StyledCountryData>Population:</StyledCountryData>
                            {population}
                        </StyledRow>
                        <StyledRow>
                            <StyledCountryData>Region:</StyledCountryData>
                            {region}
                        </StyledRow>
                        <StyledRow>
                            <StyledCountryData>Capital:</StyledCountryData>
                            {capital}
                        </StyledRow>
                    </StyledCardContent>
                </CardActionArea>
            {/* </StyledLink> */}
            <StyledRow>
                <StyledStarIcon />
            </StyledRow>

        </SryledCard>
    );
}

export default ActionAreaCard;