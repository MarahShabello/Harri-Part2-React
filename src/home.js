import React from 'react';
import { styled } from '@mui/material/styles';
import { CssBaseline, Box, Grid } from '@mui/material/';

import AppHeader from './components/header';
import SearchAppBar from './components/searchBar';
import BasicSelect from './components/dropDown';
import ActionAreaCard from './components/countryCard';
import FavouritesSection from './components/favSection'

import germanyFlag from './images/de.svg';
import usaFlag from './images/us.svg';
import brazilFlag from './images/br.svg';
import icelandFlag from './images/is.svg';
import afghanistan from './images/af.svg';
import alandIslandsFlag from './images/ax.svg';
import albaniaFlag from './images/al.svg';
import algeriaFlag from './images/dz.svg';

const StyledBox = styled(Box)(() => ({
  backgroundColor: '#fafafa'
}));

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: '#fafafa'
}));

function HomePage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppHeader />

      <StyledBox sx={{ flexGrow: 1 }} paddingTop={3}>
        <Grid container gridTemplateColumns="repeat(2, 1fr)" justifyContent={'space-between'}>
          <SearchAppBar />
          <BasicSelect />
        </Grid>
      </StyledBox>


      <StyledGrid container spacing={2} paddingTop={3}>
        <Grid item lg={3}>
          <FavouritesSection />
        </Grid>
        <Grid item lg={9}>
          <Grid container gridTemplateColumns="repeat(3, 1fr)" gap={12}>

            <ActionAreaCard
              name="Germany"
              flagURL={germanyFlag}
              population="81,770,900"
              region="Europe"
              capital="Berlin"
            />
            <ActionAreaCard
              name="United States of America"
              flagURL={usaFlag}
              population="323,947,000"
              region="Americas"
              capital="Washington, D.C."
            />
            <ActionAreaCard
              name="Brazil"
              flagURL={brazilFlag}
              population="206,135,893"
              region="Americas"
              capital="Brasilia"
            />
            <ActionAreaCard
              name="Iceland"
              flagURL={icelandFlag}
              population="334,300"
              region="Europe"
              capital="Reykjavik"
            />
            <ActionAreaCard
              name="Afghanistan"
              flagURL={afghanistan}
              population="27,657,145"
              region="Asia"
              capital="Kabul"
            />
            <ActionAreaCard
              name="Aland Islands"
              flagURL={alandIslandsFlag}
              population="28,875"
              region="Europe"
              capital="Mariehamn"
            />
            <ActionAreaCard
              name="Albania"
              flagURL={albaniaFlag}
              population="2,886,026"
              region="Europe"
              capital="Tirana"
            />
            <ActionAreaCard
              name="Algeria"
              flagURL={algeriaFlag}
              population="40,400,000"
              region="Africa"
              capital="Algiers"
            />
          </Grid>
        </Grid>

      </StyledGrid>
    </React.Fragment>
  );
}

export default HomePage;