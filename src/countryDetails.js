import React from 'react';
import BoxSize from 'react-box-size';
import { styled } from '@mui/material/styles';
import { CssBaseline, Grid, Typography } from '@mui/material/';

import AppHeader from './components/header';
import BackButton from './components/backButton';
import FirstDetailsList from './components/firstDetailsList';
import SecondDetailsList from './components/secondDetailsList';
import CountryBorders from './components/countryBorders'

const StyledGrid = styled(Grid)(() => ({
    backgroundColor: '#fff',
    paddingTop: '60px'
}));

const StyledCountryFlag = styled('img')(() => ({
    height: '80%',
    width: '620px',
    objectFit: 'cover'
}));

const StyledName = styled(Typography)(({theme}) => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    textDecoration: 'none',
    [theme.breakpoints.down('md')]: {
        marginTop: '-80px'
    },
}));

const StyledRow = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    fontSize: '15px'
}));

const StyledBorderCountries = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '16px',
    marginRight: '5px',
    marginTop: '10px'
}));

const StyledDetailsGrid = styled(Grid)(() => ({
    marginTop: '40px'
}));

const StyledDetailsContainer = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginTop: '30px'
    },
    [theme.breakpoints.down('md')]: {
        marginTop: '20px'
    },
}));

function DetailsPage(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppHeader />

            <BoxSize pv={6} ph={6}>
                <BackButton />

                <StyledGrid container gridTemplateColumns="repeat(2, 1fr)" columnGap={10}>
                    <Grid item>
                        <StyledCountryFlag src={props.countryFlag} />
                    </Grid>
                    <StyledDetailsGrid>
                        <StyledName variant='h4' component="div">{props.name}</StyledName>
                        <StyledRow sx={{ marginBottom: '40px' }}>
                            <StyledDetailsContainer container>
                                <FirstDetailsList
                                    nativeName='België'
                                    population='11,319,511'
                                    region='Europe'
                                    subRegion='Western Europe'
                                    capital='Brussels'
                                />
                                <SecondDetailsList
                                    tld='.be'
                                    currencies='Euro'
                                    languages='Dutch, French, German'
                                />
                            </StyledDetailsContainer>
                        </StyledRow>
                        <StyledRow>
                            <StyledBorderCountries>
                                Border Countries:
                                <CountryBorders
                                    props={['France', 'Germany', 'Netherlands']}
                                />
                            </StyledBorderCountries>
                        </StyledRow>
                    </StyledDetailsGrid>
                </StyledGrid>
            </BoxSize>

        </React.Fragment>
    );
}

export default DetailsPage;