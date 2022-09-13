import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import React, { ReactNode } from 'react';
import logo from '../assets/img/logo.png';

type Props = {
  children?: ReactNode;
  pages: string[];
};
const pages = ['O Grau', 'Cursos', 'Estude no Grau', 'Pra Começar'];

export default function NavBar({ children }: Props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" color="inherit" className="bg-primary">
        <Toolbar>
          <Image src={logo} loading="lazy" />
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
          <Button variant="contained" color="secondary">
            Inscreva-se
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
