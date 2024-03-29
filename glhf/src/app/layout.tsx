'use client';
import Head from 'next/head'
import "./globals.scss"
import React from "react";
import { StoriesProvider } from '@component/context/StoriesContext';
import Navbar from '@component/components/navbar';

const isBrowser = () => typeof window !== "undefined";
function scrollToTop() {
  if (!isBrowser()) return;
  setTimeout(() => {
    window.document.body.scrollIntoView({ behavior: "smooth" });
  }, 500);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <StoriesProvider>
      <html lang="en">
        <Head>
          <title>Get Lost Have Fun</title>
          <meta name="description" content="Travel Blog Website" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body onLoad={()=>scrollToTop()}>
          <main>
            <Navbar />
            { children }
          </main>
        </body>
      </html>
    </StoriesProvider>
  )
}
