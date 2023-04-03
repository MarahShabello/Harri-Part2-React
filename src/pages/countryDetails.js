import React, { useEffect, useState } from 'react';
import BoxSize from 'react-box-size';
import { styled } from '@mui/material/styles';
import { CssBaseline, Grid, Typography } from '@mui/material/';

import AppHeader from '../../src/components/header';
import BackButton from '../../src/components/backButton';
import FirstDetailsList from '../../src/components/firstDetailsList';
import SecondDetailsList from '../../src/components/secondDetailsList';
import CountryBorders from '../../src/components/countryBorders'

import BelgiumFlag from '../images/belgium.svg';
import { apiURL } from '../utils/api';

const StyledGrid = styled(Grid)(() => ({
    backgroundColor: '#fff',
    paddingTop: '60px'
}));

const StyledCountryFlag = styled('img')(() => ({
    height: '80%',
    width: '100%',
    objectFit: 'cover'
}));

const StyledName = styled(Typography)(({ theme }) => ({
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


function DetailsPage() {
    const [country, setCountry] = useState([]);
    const [error, setError] = useState(null);
    
    const params = new URLSearchParams(window.location.pathname);
    console.log(`searchParams: ${params}`)
    console.log(`params: ${params.get('countryCode')}`)

    useEffect(() => {
        fetchCountryDetails()
    }, [params.get('countryCode')])

    const fetchCountryDetails = async (code) => {
        const api = apiURL + `/alpha/${code}`
        fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setCountry(data)
            },
                error => {
                    setError(error)
                });
    }
    
    return (
        <>
            <CssBaseline />
            <AppHeader />

            <BoxSize pv={6} ph={6}>
                <BackButton />

                <StyledGrid container spacing={12}>
                    <Grid item lg={6} xs={12}>
                        <StyledCountryFlag src={BelgiumFlag} />
                    </Grid>
                    <Grid item lg={6} xs={12}>

                        <Grid container columns={{ xs: 4, md: 12 }}>
                            <StyledDetailsGrid>
                                <StyledName variant='h4' component="div">Belgium</StyledName>
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
                                            borders={['France', 'Germany', 'Netherlands']}
                                        />
                                    </StyledBorderCountries>
                                </StyledRow>
                            </StyledDetailsGrid>
                        </Grid>

                    </Grid>
                </StyledGrid>

            </BoxSize>
        </>
    );
}

export default DetailsPage;