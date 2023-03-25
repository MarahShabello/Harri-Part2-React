import * as React from 'react';
import BoxSize from 'react-box-size';
import { styled } from '@mui/material/styles';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';

const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: '#fff',
  width: '100%',
  position: 'static'
}));

const StyledTypography = styled(Typography)(() => ({
  color: '#111517',
  fontFamily: 'Nunito Sans',
  fontWeight: '800'
}));

const StyledButton = styled(Button)(() => ({
  color: '#111517',
  fontFamily: 'Nunito Sans',
  fontWeight: '800',
  fontSize: '13px'
}));

const StyledToolbar = styled(Toolbar)(() => ({
  backgroundColor: 'inherit'
}));

const StyledDarkModeOutlinedIcon = styled(DarkModeOutlinedIcon)(() => ({
  marginInlineEnd: '5px'
}));

function AppHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar>
        <BoxSize pv={1} ph={4}>
          <StyledToolbar>
            <StyledTypography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Where in the world?
            </StyledTypography>
            <StyledButton color="inherit">
              <StyledDarkModeOutlinedIcon />
              Dark Mode
            </StyledButton>
          </StyledToolbar>
        </BoxSize>
      </StyledAppBar>
    </Box>
  );
}


export default AppHeader;
