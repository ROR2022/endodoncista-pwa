"use client";
import React from "react";
import Image from "next/image";
//import Box from '@mui/material/Box';
import Servicios from "../Servicios/Servicios";
import Casos from "../Casos/Casos";
import Contacto from "../Contacto/Contacto";
//importaremos el Divider de Material UI
import Divider from "@mui/material/Divider";
import Resenas from "../Resenas/Resenas";
import Link from "next/link";
import { Typography } from "@mui/material";
//importar el componente de Button de Material UI
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import ShowMemes from "../CreateMeme/ShowMemes";


const Home = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <div style={{ paddingBottom: "100px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "5vh",
          marginBottom: "3vh",
        }}
      >
        {user && user.email !== "" ? (
          <Link href="/create-meme">
            <Button variant="contained" color="info">
              Crear meme
            </Button>
          </Link>
        ) : (
          <Link href="/login">
            <Button variant="contained" color="info">
              Iniciar sesión para crear memes
            </Button>
          </Link>
        )}
      </div>
      <ShowMemes />
      <Divider style={{ marginTop: "40px" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100vw",
          gap: "20px",

          marginTop: "5vh",
        }}
      >
        <Image src="/logoMain1.jpg" alt="Dentist" width={300} height={300} />
        <Image
          src="/consul1.jpg"
          alt="Consultorio"
          width={300}
          height={300}
          style={{ borderRadius: "10%" }}
        />
        <Image
          src="/muela1.jpg"
          alt="Muela"
          width={300}
          height={300}
          style={{ borderRadius: "10%" }}
        />
      </div>

      <Divider style={{ marginTop: "40px" }} />
      <Resenas />
      <Divider style={{ marginTop: "40px" }} />
      <Servicios />
      <Divider style={{ marginTop: "40px" }} />
      <Casos />
      <Divider style={{ marginTop: "40px" }} />
      <Contacto />
    </div>
  );
};

export default Home;
