import React, { useEffect, useState, useContext } from 'react';
import BoxSize from 'react-box-size';
import { styled } from '@mui/material/styles';
import { CssBaseline, Box, Grid } from '@mui/material/';

import AppHeader from '../../src/components/header';
import SearchAppBar from '../../src/components/searchBar';
import BasicSelect from '../../src/components/dropDown';
import FavouritesSection from '../../src/components/favSection'

import { apiURL } from '../utils/api';
import { ThemeContext } from '../switchTheme';
import Countries from '../countries'

const StyledBox = styled(Box)(() => ({
  backgroundColor: 'inherit',
  paddingTop: '20px'
}));

const StyledGrid = styled(Grid)(() => ({
  backgroundColor: 'inherit'
}));

const StyledBackground = styled('div')(() => ({
  backgroundColor: '#fafafa'
}));

const StyledSearchFilterContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    rowGap: '40px'
  },
}));

function HomePage() {
  const [mode, setMode] = useState(false);
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);
  let filteredCountries = [];
  let filter = 'no-filter'

  useEffect(() => {
    fetchCountries("")
  }, [])

  const fetchCountries = async (countryName) => {
    try {
      const api = countryName ? `${apiURL}/name/${countryName}` : `${apiURL}/all`;
      await fetch(api)
        .then(response => {
          return response.json()
        })
        .then(data => {
          if(filter === 'no-filter'){
            setCountries(data)
          }
          else {
            filterCountries(filter)
          }
        },
          error => {
            setError(error)
          });
    }
    catch (error) {
      setError(error)
    }
  }

  const filterCountries = (selectedRegion) => {
    selectedRegion = selectedRegion.charAt(0).toUpperCase() + selectedRegion.slice(1);
    filter = selectedRegion;
    filteredCountries = countries.filter(country => 
      (filter === 'no-filter' || country.region === filter)
    )
    setCountries(filteredCountries)
  }

  const { theme } = useContext(ThemeContext);
  return (
    <>
      <CssBaseline />
      <AppHeader />

      <StyledBackground className={theme ? `dark` : `light`}>
        <StyledBox sx={{ flexGrow: 1 }}>
          <BoxSize pv={1} ph={6}>
            <StyledSearchFilterContainer container justifyContent={'space-between'}>
              <SearchAppBar
                onSearch={fetchCountries}
              />
              <BasicSelect
                onFilter={filterCountries}
              />
            </StyledSearchFilterContainer>
          </BoxSize>
        </StyledBox>

        <BoxSize pv={1} ph={6}>

          <StyledGrid container spacing={2} paddingTop={3}>
            <Grid item lg={3}>
              <FavouritesSection />
            </Grid>
            <Grid item lg={9}>
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={6} columns={{ xs: 6, md: 12 }}>
                  <Countries countriesList={countries} />
                </Grid>
              </Box>
            </Grid>
          </StyledGrid>

        </BoxSize>
      </StyledBackground>
    </>
  );
}

export default HomePage;