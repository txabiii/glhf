'use client';

import Head from 'next/head'
import "./globals.scss"
import React, { useEffect } from "react";
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
  useEffect(() => {
    scrollToTop();
  },[]);

  return (
    <StoriesProvider>
      <html lang="en">
        <Head>
          <title>Get Lost Have Fun</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="travel, blog, manila" />
          <meta name="title" property="og:title" content="Get Lost Have Fun"/>
          <meta property="og:type" content="Website"/>
          <meta name="image" property="og:image" content="https://imgur.com/a/2TdcF9A"/>
          <meta name="description" property="og:description" content="GLHF: A Travel Blog Website"/>
          <meta name="author" content="Txabi Guerrero"/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <main>
            <Navbar />
            { children }
          </main>
        </body>
      </html>
    </StoriesProvider>
  )
}
