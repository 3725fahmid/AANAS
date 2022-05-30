import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import Link from 'next/link';

export default function refreshMessages() {
  return (
    <Box sx={{ pb: 7, display: { xs: 'flex', md: 'none' } }}>
      <CssBaseline />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
        // showLabels
        // value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
        >
          <Link href="/">
            <a>
              <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            </a>
          </Link>
          <Link href="/favorite">
            <a>
              <BottomNavigationAction
                label="Favorites"
                icon={<FavoriteIcon />}
              />
            </a>
          </Link>
          <Link href="/about">
            <a>
              <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} />
            </a>
          </Link>
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
