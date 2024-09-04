// components/InstallButton.tsx
import React, { useState, useEffect } from 'react';
//importar el icono de instalación de material ui
import { AddToHomeScreen } from '@mui/icons-material';
//importar Button de material ui
import { Button } from '@mui/material';
import isMobile from 'ismobilejs';
import { postDebugMsg } from '@/api/rorUserApi';

const InstallButton: React.FC = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };
    const dataNavigator = isMobile(window.navigator);
    const android:any= dataNavigator.android;
    const apple:any= dataNavigator.apple;
    //console.log('Datos isMobile:...', dataNavigator);
    //recorrer el objeto android para ver sus propiedades y valores para determinar si es un dispositivo android
    let isAndroid=false;
    let isApple=false;
    for (const key in android) {
      if(android[key]===true){
        console.log('Es un dispositivo android');
        isAndroid=true;
      }
    }
    for (const key in apple) {
      if(apple[key]===true){
        console.log('Es un dispositivo apple');
        isApple=true;
      }
    }
    if(isAndroid){
      //console.log('Es un dispositivo android');
      window.addEventListener('beforeinstallprompt', handler);
    }else{
      const objNavigator:any=window.navigator;
      if (objNavigator.standalone) {
        // The web app is installed as a standalone app on the home screen
        postDebugMsg('+++++ Applicacion ya instalada debug +++++');
      } else {
        // The web app is not installed as a standalone app on the home screen
        postDebugMsg('+++++ Iniciando Instalacion de Applicacion debug +++++');
        setIsVisible(true);
        setIsIOS(true);
      }
    }

    //console.log('InstallButton useEffect...');
    //postDebugMsg('+++++ InstallButton Iniciando debug +++++', dataNavigator);
    

    return () => {
      if(isAndroid===true){
        window.removeEventListener('beforeinstallprompt', handler);
      }
      
    }
  }, []);

  const handleInstallClick = async () => {
    //if (!deferredPrompt) return;
    
    if(!isIOS&&deferredPrompt){
    const promptEvent = deferredPrompt as any;
    promptEvent.prompt();
    const { outcome } = await promptEvent.userChoice;
    if (outcome === 'accepted') {
      console.log('PWA setup accepted');
    } else {
      console.log('PWA setup rejected');
    }
    setDeferredPrompt(null);
    setIsVisible(false);
  }

   if(isIOS){
    // Caso para Apple: Se puede mostrar una guía para que el usuario instale manualmente
    alert("Para instalar esta aplicación en su dispositivo Apple, toque el icono de compartir y luego seleccione 'Agregar a la pantalla de inicio'.");
   }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button 
    sx={{ margin: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} 
    onClick={handleInstallClick}>
       <AddToHomeScreen/>  Install
    </Button>
  );
};

export default InstallButton;
