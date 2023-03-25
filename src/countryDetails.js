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
    width: '650px',
    objectFit: 'cover'
}));

const StyledName = styled(Typography)(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    textDecoration: 'none'
}));

const StyledRow = styled('div')(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '300',
    fontSize: '15px'
}));

const StyledTypography = styled(Typography)(() => ({
    fontFamily: 'Nunito Sans',
    fontWeight: '600',
    fontSize: '16px',
    marginRight: '5px',
    marginTop: '10px'
}));

function DetailsPage(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppHeader />

            <BoxSize pv={6} ph={6}>

            <BackButton />

            <StyledGrid container gridTemplateColumns="repeat(2, 1fr)" gap={12}>
                <Grid item>
                    <StyledCountryFlag src={props.countryFlag}/>
                </Grid>
                <Grid item sx={{ height: '50%', textAlign: 'start'}}>
                    <StyledName variant='h4' component="div">{props.name}</StyledName>
                    <StyledRow>
                        <Grid container paddingTop={6} gap={12}>
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
                        </Grid>
                    </StyledRow>
                    <StyledRow>
                        <StyledTypography>Borders:</StyledTypography>
                        <CountryBorders
                            props={['France', 'Germany', 'Netherlands']}
                        />
                    </StyledRow>
                </Grid>
            </StyledGrid>

            </BoxSize>
        </React.Fragment>
    );
}

export default DetailsPage;