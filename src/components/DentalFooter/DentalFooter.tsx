"use client"
import React,{useState} from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useRouter } from 'next/navigation';

const DentalFooter = () => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  return (
    <Box sx={{ 
      width: '100vw' }}>
        
      <BottomNavigation
      sx={{ 
        bgcolor: 'secondary.main', 
        color: 'secondary.contrastText', 
        position: 'fixed',
        bottom: 0,
        width: '100vw' 
      }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
        <BottomNavigationAction 
        onClick={() => router.push('https://www.facebook.com/dental.laspalmas.96')}
        label="facebook" icon={<FacebookIcon />} />
        <BottomNavigationAction 
        onClick={() => router.push('https://www.instagram.com/dentallaspalmas/')}
        label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction 
        onClick={() => router.push('https://maps.app.goo.gl/z8gXtAikqc7K1euj6')}
        label="Ubicacion" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  )
}

export default DentalFooter