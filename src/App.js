import * as React from 'react';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Slide,
  useScrollTrigger } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/SportsMartialArts';

import { ThemeProvider, createTheme } from '@mui/material';

import "@fontsource/inter";

import Home from "./pages/home";
import Connexion from "./pages/connexion";
import Account from "./pages/account";
import Dashboard from './pages/dashboard';
import Pricing from './pages/pricing';

const pages = ['Pricing', 'Connexion', 'Dashboard'];
const pathPages = ['/pricing', '/connexion', '/dashboard'];
const settings = ['Account', 'Logout'];
const pathSettings = ['/account', '/logout']

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit">
        CRM Sport
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });


  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#000080',
        variant: '#16166b'
      },
      secondary: {
        main: '#f8f8ff',
        variant: '#E6E6FA'
      },
      background: {
        main: '#ffffff',
      },
    }
  });

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <HideOnScroll >
          <AppBar elevation={0} position="sticky" style={{ backgroundColor: theme.palette.secondary.variant }}>
            <Container maxWidth="xl" >
              <Toolbar disableGutters >
                <AdbIcon sx={{ color: theme.palette.primary.main, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    letterSpacing: '.01rem',
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                  }}
                >
                  CRM Sport
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    sx={{ color: theme.palette.primary.main }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >
                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center" sx={{ fontFamily: 'Inter', fontWeight: 300 }}>{page}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>

                <AdbIcon sx={{ color: theme.palette.primary.main, display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  href=""
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'Inter',
                    fontWeight: 700,
                    letterSpacing: '.01rem',
                    color: theme.palette.primary.main,
                    textDecoration: 'none',
                  }}
                >
                  CRM Sport
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}
                      sx={{ my: 2, color: theme.palette.primary.main, fontFamily: "Inter", fontWeight: 300, display: 'block' }}
                      component={Link}
                      to={pathPages[pages.indexOf(page)]}
                    >
                      {page}
                    </Button>
                  ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar alt="Benoit COEUGNET" src="/static/images/avatar/2.jpg" />
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
                      <MenuItem key={setting} component={Link} to={pathSettings[settings.indexOf(setting)]} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" >{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              </Toolbar>
            </Container>
          </AppBar>
        </HideOnScroll>

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/account" element={<Account />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes >

        <Box
          sx={{ backgroundColor: theme.palette.secondary.variant }}
        >
          <Container
            maxWidth="md"
            component="footer"
            sx={{
              borderTop: (theme) => `1px solid ${theme.palette.divider}`,
              mt: 8,
              py: [3, 6],

            }}
          >
            <Grid container spacing={4} justifyContent="space-evenly">
              {footers.map((footer) => (
                <Grid item xs={6} sm={3} key={footer.title}>
                  <Typography variant="h6" sx={{ color: theme.palette.primary.main }} gutterBottom>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map((item) => (
                      <li key={item}>
                        <Link href="#" variant="subtitle1" color="text.secondary">
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Container>
        </Box>
      </BrowserRouter >
    </ThemeProvider>


  );
}
export default App;