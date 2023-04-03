import { Grid } from '@mui/material/';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import ActionAreaCard from './components/countryCard';

const StyledLink = styled(Link)(() => ({
    textDecoration: 'none',
    color: '#111517'
}));

function Countries(props) {
    const {countriesList} = props;
    return (
        countriesList.map(country => {
            const { name, flags, population, region, capital, cca3 } = country;
           return <Grid item xs={6} md={4} key={cca3}>
                <StyledLink to={`/details/${cca3}`}>
                    <ActionAreaCard
                        name={name.common}
                        flagURL={flags.svg}
                        population={population}
                        region={region}
                        capital={capital}
                    />
                </StyledLink>
            </Grid>
        })
    );
}

export default Countries;