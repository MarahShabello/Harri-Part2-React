import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button, Stack } from '@mui/material/';

const StyledBorder = styled(Button)(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    color: '#111517',
}));

function CountryBorders({ props }) {
    const borders = props;
    return (
        <Stack direction="row" spacing={2}>
            {borders.map(border => {
                return <StyledBorder variant="contained" key={border}>{border}</StyledBorder>;
            })}
        </Stack>
    );
}

export default CountryBorders;