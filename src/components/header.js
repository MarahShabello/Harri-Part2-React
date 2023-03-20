import * as React from 'react';
import { styled } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';

const StyledTypography = styled(Typography)(() => ({
  color: '#111517',
  fontFamily: 'Nunito Sans',
  fontWeight: '800'
}));

const StyledButton = styled(Button)(() => ({
  color: '#111517',
  fontFamily: 'Nunito Sans',
  fontWeight: '600',
  fontSize: '13px'
}));

const StyledToolbar = styled(Toolbar)(() => ({
  backgroundColor: '#fff'
}));

function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          <StyledTypography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Where in the world?
          </StyledTypography>
          <StyledButton color="inherit">
            <DarkModeOutlinedIcon />
            Dark Mode
          </StyledButton>
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}


export default AppHeader;
