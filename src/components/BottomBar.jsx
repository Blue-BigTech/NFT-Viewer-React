import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MoreIcon from '@mui/icons-material/MoreVert';

export default function BottomBar() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0, backgroundColor:"#343499"}}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
