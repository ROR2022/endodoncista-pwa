import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
//import "./globals.css";
import dynamic from "next/dynamic";
const DentalFooter = dynamic(() => import("@/components/DentalFooter/DentalFooter"), {ssr: false});
const DentalNavBar = dynamic(() => import("@/components/DentalNavBar/DentalNavBar"), {ssr: false});
const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton/WhatsAppButton"), {ssr: false});
import ReduxProvider from "@/components/ReduxProvider/ReduxProvider";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consultorio Dental",
  description: "Dra. Berenice Ocampo - Endodoncista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
        <ReduxProvider>
        <DentalNavBar />
        <div style={{minHeight:'90vh'}}>
        {children}
        </div>
        <WhatsAppButton />
        <DentalFooter />
        </ReduxProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
        </body>
    </html>
  );
}
