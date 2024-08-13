'use client';
import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dddddd',
      light: '#dddddd50',
      dark: '#e0e0e0',
      contrastText: '#666',
    },
    info: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
      contrastText: '#fff',
    },
    warning: {
      main: '#59002c',
      light: '#8e0054',
      dark: '#2e0018',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
      contrastText: '#fff',
    },
    success: {
      main: '#19a5a2',
      light: '#8cd2d0',
      dark: '#007072',
      contrastText: '#fff',
    },
    background: {
      default: '#f5f5f5',
    },

  },
});

export default theme;
