import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material/';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const StyledButton = styled(Button)(() => ({
    fontFamily: 'Nunito Sans',
    backgroundColor: '#fff',
    color: '#111517',
}));

function BackButton() {
    return (
        <StyledButton variant="contained">
            <KeyboardBackspaceIcon /> Back
        </StyledButton>
    );
}

export default BackButton;