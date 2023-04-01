import Head from 'next/head'
import "./globals.scss"
import React from "react";
import { StoriesProvider } from '@component/context/StoriesContext';
import Navbar from '@component/components/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Lost Have Fun',
  openGraph: {
    title: 'Get Lost Have Fun',
    images: [
      {
        url: 'https://i.imgur.com/YCSAWLK.png',
      }
    ],
    description: 'GLHF: A Travel Blog Website',
    type: "website"
  },
  keywords: ['GLHF','Travel blog','blog', 'Manila'],
  authors: [{name : 'Txabi Guerrero'}]
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
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="travel, blog, manila" />
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
