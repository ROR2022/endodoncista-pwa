import React, { useState, FC, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useRouter } from "next/navigation";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
//importar el icono de cerrar sesion y de login de material ui
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LoginIcon from "@mui/icons-material/Login";
import { useSelector } from "react-redux";
//import { DataUser } from "@/redux/userSlice";
//import { useLocalStorage } from "usehooks-ts";
//import { loginUser } from "@/api/rorUserApi";
//import { LOCALSTORAGE_KEY } from "@/api/dataEnv";

interface DentalDrawerProps {
  showDrawer: boolean;
  setShowDrawer: (showDrawerValue: boolean) => void;
}

const dataNavitems = [
  {
    text: "Servicios",
    icon: <MedicalInformationIcon />,
    link: "/servicios",
  },
  {
    text: "Casos Clinicos",
    icon: <NewspaperIcon />,
    link: "/casos",
  },
  {
    text: "Contacto",
    icon: <ContactPhoneIcon />,
    link: "/contacto",
  },
  {
    text: "Facebook",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/dental.laspalmas.96",
  },
  {
    text: "Instagram",
    icon: <InstagramIcon />,
    link: "https://www.instagram.com/dentallaspalmas/",
  },
  {
    text: "Ubicación",
    icon: <LocationOnIcon />,
    link: "https://maps.app.goo.gl/z8gXtAikqc7K1euj6",
  },
  {
    text: "Iniciar Sesión",
    icon: <LoginIcon />,
    link: "/login",
  },
];

const loggedInNavItems = [
  {
    text: "Cerrar Sesión",
    icon: <ExitToAppIcon />,
    link: "/logout",
  },
];

const DentalDrawer: FC<DentalDrawerProps> = ({ showDrawer, setShowDrawer }) => {
  const [open, setOpen] = useState(showDrawer);
  const [completNavItems, setCompletNavItems] = useState(dataNavitems);
  const user = useSelector((state: any) => state.user);
  
  const router = useRouter();

  useEffect(() => {
    if (user.email!=="") {
      const tempNavItems = dataNavitems.filter(el=>el.text !== "Iniciar Sesión");
      setCompletNavItems([...tempNavItems, ...loggedInNavItems]);
    } else {
      setCompletNavItems(dataNavitems);
    }
  }, [user]);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
    setShowDrawer(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {completNavItems.map((item, index) => (
          <ListItem
            onClick={() => router.push(item.link)}
            key={item.text}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {/* <Button onClick={toggleDrawer(true)}>Open drawer</Button> */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DentalDrawer;
