"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DentalDrawer from "./DentalDrawer";
import useMediaQuery from "@mui/material/useMediaQuery";
//import TabsMenu from './TabsMenu';
import Stack from "@mui/material/Stack";
import { useRouter } from "next/navigation";

const DentalNavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isTablet = useMediaQuery("(min-width:900px)");
  const router = useRouter();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          bgcolor: "success.main",
          color: "success.contrastText",
        }}
      >
        <Toolbar>
            {!isTablet &&
                <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setShowDrawer((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>
            }
          
          {showDrawer && (
            <DentalDrawer
              showDrawer={showDrawer}
              setShowDrawer={setShowDrawer}
            />
          )}
          <Typography 
          onClick={() => router.push('/')}
          variant="h6" component="div" sx={{ flexGrow: 1, cursor: 'pointer' }}>
            {isTablet ? "Dra. Berenice Ocampo - Endodoncista" : "Endodoncista"}
          </Typography>
          {isTablet && (
            <Stack spacing={2} direction="row">
            <Button 
            onClick={() => router.push('/servicios')}
            variant="outlined" 
            sx={{bgcolor:'secondary.main', color:'secondary.contrastText'}}>Servicios</Button>
            <Button 
            onClick={() => router.push('/casos')}
            variant="outlined" sx={{bgcolor:'secondary.main', color:'secondary.contrastText'}}>Casos Clinicos</Button>
            <Button 
            onClick={() => router.push('/contacto')}
            variant="outlined" sx={{bgcolor:'secondary.main', color:'secondary.contrastText'}}>Contacto</Button>
          </Stack>
          )}
          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DentalNavBar;
