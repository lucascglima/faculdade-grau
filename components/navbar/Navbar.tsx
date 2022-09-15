<<<<<<<< HEAD:components/navbar/Navbar.tsx
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { ReactNode, useEffect, useState, useRef } from 'react';
import logo from '../../assets/img/logo.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

type Props = {
  children?: ReactNode;
  pages: string[];
};

const pages = ['O Grau', 'Cursos', 'Estude no Grau', 'Pra Começar'];
const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <AppBar position="static" color="inherit" className="">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            className="bg-primary"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="bg-primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image src={logo} />
          <Box
            sx={{
              flexGrow: 1,
              py: 2,
              px: 3,
              ml: 6,
              display: { xs: 'none', md: 'flex' }
            }}
            className='text-dark'
          >

            {/* <Button
                  key={page}
                  sx={{ my: 2, px: 2, color: 'common.black', display: 'block' }}
                >
                  {page}
                </Button>  */}
            {pages.map((page,index) => {
              return(
                <div key={page}>
                  <Button
                    className='text-dark'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >
                    { page }
                    <KeyboardArrowDownIcon fontSize="small"/>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </Menu>
                </div>
              )
            })}
          </Box>
          <Button variant="contained" color="secondary" sx={{ display: { sm: 'none', xs: 'none', md: 'block', xl: 'block' } }}>
            Inscreva-se
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
========
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import logo from '@/assets/img/logo.png';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {
  children?: ReactNode;
  pages: string[];
};
const pages = ['O Grau', 'Cursos', 'Estude no Grau', 'Pra Começar'];
const ResponsiveAppBar = (props: Props) => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static" color="inherit" className="">
      <Container maxWidth="xl">
        <Toolbar>
          <Box
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            className="bg-primary"
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="bg-primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Image src={logo} />
          <Box
            sx={{
              flexGrow: 1,
              py: 2,
              px: 3,
              ml: 6,
              display: { xs: 'none', md: 'flex' }
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, px: 2, color: 'common.black', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              display: { sm: 'none', xs: 'none', md: 'block', xl: 'block' }
            }}
          >
            Inscreva-se
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
>>>>>>>> main:src/components/examples/Navbar.tsx
