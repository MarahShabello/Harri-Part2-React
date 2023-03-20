import React from 'react';
import { styled } from '@mui/material/styles';
import { CssBaseline, Grid, Typography } from '@mui/material/';

import AppHeader from './components/header';
import BackButton from './components/backButton';
import FirstDetailsList from './components/firstDetailsList';
import SecondDetailsList from './components/secondDetailsList';
import CountryBorders from './components/countryBorders'
import { Container } from '@mui/system';

const StyledGrid = styled(Grid)(() => ({
    backgroundColor: '#fafafa'
}));

const StyledCountryFlag = styled('img')(() => ({
    height: '550px',
    width: '700px'
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

// const StyledLink = styled(Link)(() => ({
//     textDecoration: 'none',
//     color: '#111517'
// }));

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

<Container>
            <BackButton />

            <StyledGrid container paddingTop={6} gridTemplateColumns="repeat(2, 1fr)" gap={12}>
                <Grid item>
                    <StyledCountryFlag src={props.countryFlag} />
                </Grid>
                <Grid item>
                    <StyledName variant='h4' component="div">{props.name}</StyledName>
                    <StyledRow>
                        <Grid container paddingTop={6} gridTemplateColumns="repeat(2, 1fr)" gap={5}>
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
</Container>
        </React.Fragment>
    );
}

export default DetailsPage;