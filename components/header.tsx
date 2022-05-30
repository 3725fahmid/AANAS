import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import { Container } from '@mui/system';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import AutoAwesomeMotionRoundedIcon from '@mui/icons-material/AutoAwesomeMotionRounded';
import Link from 'next/link';
import AutoStoriesSharpIcon from '@mui/icons-material/AutoStoriesSharp';

// ================================= PAGES ====================================

const pages = ['Home', 'Favorite', 'Story'];

// ================================= SETTING ====================================
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// ================================= APP BAR HANDELER ====================================

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // ================================= SEARCH BAR HENDELER====================================

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(25),
      width: 'auto',
    },
  }));

  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: '40ch',
      },
    },
  }));
  const N = 'none';
  // ================================= RETURN OUTPUT ====================================

  return (
    <AppBar sx={{ position: 'fixed', p: '2', mr: '3', zIndex: 5 }}>
      <Container>
        <Toolbar disableGutters>
          {/* ================================= LOGO ICON ==================================== */}

          <AutoStoriesSharpIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link href="/">
              <a>AANAS</a>
            </Link>
          </Typography>

          {/* ================================= MENU ICON SMALL SCREEN ==================================== */}

          {/* ================================= LOGO ICON SMALL SCREEN ==================================== */}
          <Link href="/">
            <a>
              <AutoStoriesSharpIcon
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
              />
            </a>
          </Link>

          {/* ================================= SEARCH BAR DESIGN ==================================== */}

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button sx={{ bg: 'black', color: 'white' }}>
            <SearchIcon />
          </Button>

          {/* ================================= MENU BAR LEARGE SCEEN ==================================== */}

          <Box
            sx={{
              justifyContent: 'center',
              gap: 10,
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', lg: 'flex' },
            }}
          >
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'gray',
                },
              }}
            >
              <Link href="/">
                <a>
                  <HomeRoundedIcon />
                </a>
              </Link>
            </Button>
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
                '&:hover': {
                  backgroundColor: 'primary.main',
                  color: 'gray',
                },
              }}
            >
              <Link href="/favorite">
                <a>
                  <StarsRoundedIcon />
                </a>
              </Link>
            </Button>
          </Box>

          {/* ================================= AVATER AND SEETING FOR SMALL SCREEN ==================================== */}

          <Box
            sx={{
              flexGrow: 0,
              display: { xs: 'flex', md: 'flex', lg: 'flex' },
            }}
          >
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Fahim Sharp" src="/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
