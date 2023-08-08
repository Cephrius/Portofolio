import { Component } from 'react'
import '../styles/globals.css'
import dynamic from 'next/dynamic'
import { useState,useEffect } from 'react'
import { Analytics, analytics } from '@vercel/analytics/react'
import {NextUIProvider} from '@nextui-org/react'



function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);
  

  useEffect(() => {
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <>
         
         </>;
  } else {
    return (
      <NextUIProvider>
      <Component {...pageProps} />  
      </NextUIProvider>

  
    );
  }
}


export default MyApp;