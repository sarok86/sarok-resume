"use client";
import localFont from "next/font/local";
import "./globals.css";
import "@mantine/core/styles.css";
import { ColorSchemeScript } from "@mantine/core";
import { createTheme, MantineProvider } from "@mantine/core";
import Layout from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import { FallingLines } from "react-loader-spinner";
// import blackandwhite from "@/app/image/black and white.jpg";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        /> */}

        <title>Sarok Resume</title>

        <ColorSchemeScript />
      </head>
      <MantineProvider theme={theme}>
        <body
          className={`${geistSans.variable} ${geistMono.variable}  antialiased w-screen h-screen  flex justify-center items-stretch text-center lg:px-36  overflow-hidden bg-[url('image/blackandwhite2.jpg')]`}
        >
          {loader ? (
            <div className="flex justify-center items-center ">
              <FallingLines
                color="#e5383b"
                width="200"
                visible={true}
                ariaLabel="falling-circles-loading"
              />
            </div>
          ) : (
            <Layout>
              <div className="w-full h-full motion-preset-slide-right max-[630px]:w-screen  max-[630px]:h-screen">
                {children}
              </div>
            </Layout>
          )}
        </body>
      </MantineProvider>
    </html>
  );
}
