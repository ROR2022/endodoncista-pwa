"use client";
import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { setUser, DataUser } from "@/redux/userSlice";
import { useLocalStorage } from "usehooks-ts";
import { LOCALSTORAGE_KEY } from "@/api/dataEnv";

const DentalNavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const isTablet = useMediaQuery("(min-width:900px)");
  const user = useSelector((state: any) => state.user);
  const [storedUser, setStoredUser] = useLocalStorage<DataUser>(
    LOCALSTORAGE_KEY,
    user
  );
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    handleDataLocalStorage();
  }, []);

  const handleDataLocalStorage = () => {
    if (storedUser) {
      dispatch(setUser(storedUser));
    }
  };

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
          {!isTablet && (
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
          )}

          {showDrawer && (
            <DentalDrawer
              showDrawer={showDrawer}
              setShowDrawer={setShowDrawer}
            />
          )}
          <Typography
            onClick={() => router.push("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            {isTablet
              ? user?.email
                ? user?.username
                : "Dra. Berenice Ocampo - Endodoncista"
              : user?.email
              ? user?.username
              : "Endodoncista"}
          </Typography>
          {isTablet && (
            <Stack spacing={2} direction="row">
              <Button
                onClick={() => router.push("/servicios")}
                variant="outlined"
                sx={{
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                }}
              >
                Servicios
              </Button>
              <Button
                onClick={() => router.push("/casos")}
                variant="outlined"
                sx={{
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                }}
              >
                Casos Clinicos
              </Button>
              <Button
                onClick={() => router.push("/contacto")}
                variant="outlined"
                sx={{
                  bgcolor: "secondary.main",
                  color: "secondary.contrastText",
                }}
              >
                Contacto
              </Button>
              {user?.email ? (
                <Button
                  onClick={() => router.push("/logout")}
                  variant="outlined"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "secondary.contrastText",
                  }}
                >
                  Cerrar Sesión
                </Button>
              ) : (
                <Button
                  onClick={() => router.push("/login")}
                  variant="outlined"
                  sx={{
                    bgcolor: "secondary.main",
                    color: "secondary.contrastText",
                  }}
                >
                  Iniciar Sesión
                </Button>
              )}
              
            </Stack>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default DentalNavBar;
