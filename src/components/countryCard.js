import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
// import StarIcon from '@mui/icons-material/Star';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

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

const StyledStarIcon = styled(StarRateRoundedIcon)(() => ({
    color: 'lightgray',
    fontSize: '35px',
    width: '30px',
    marginInlineStart: 'auto',
    marginInlineEnd: '5px',
    marginBottom: '5px'
}));

const SryledCard = styled(Card)(() => ({
    border: 'none',
    boxShadow: '1px 1px 8px lightgray',
    // minWidth: '30%',
    width: 280,
}));

function ActionAreaCard(props) {
    return (
        <SryledCard>

            <StyledLink to="/details">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="165"
                        src={props.flagURL}
                        alt={props.name}
                    />
                    <CardContent sx={{ marginBottom: { xs: 0, sm: 0, md: 3 }}}>
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
            <StyledRow>
                <StyledStarIcon sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }} />
            </StyledRow>

        </SryledCard>
    );
}

export default ActionAreaCard;