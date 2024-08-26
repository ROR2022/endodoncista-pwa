const nodeEnv = process.env.NODE_ENV;
export const hostURL = nodeEnv==='development'?process.env.NEXT_PUBLIC_DEV_ENV: process.env.NEXT_PUBLIC_PRD_ENV;

export const LOCALSTORAGE_KEY = 'userDentalPalmas';

export const userPhone = '7331069098';

export const MYSITERESENA='dentalPalmas';

export const dataAvatares = [
    {
      title: "Avatar 1",
      url: "/avatar1.png",
    },
    {
      title: "Avatar 2",
      url: "/avatar2.png",
    },
    {
      title: "Avatar 3",
      url: "/avatar3.png",
    },
    {
      title: "Avatar 4",
      url: "/avatar4.png",
    },
  ];