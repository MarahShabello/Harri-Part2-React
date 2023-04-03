import React from 'react';
import { styled } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Button } from '@mui/material';

const StyledButton = styled(Button)(() => ({
    color: '#111517',
    fontFamily: 'Nunito Sans',
    fontWeight: '800',
    fontSize: '13px'
}));


const StyledDarkModeOutlinedIcon = styled(DarkModeOutlinedIcon)(() => ({
    marginInlineEnd: '5px'
}));

function ThemeButton() {
    return (
        <StyledButton color="inherit">
            <StyledDarkModeOutlinedIcon />
            Dark Mode
        </StyledButton>
    );
}


export default ThemeButton;
