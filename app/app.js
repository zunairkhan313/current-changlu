// pages/_app.js
import { SessionProvider } from "next-auth/react";
import { CartProvider } from '../context/CartContext';
import RootLayout from '../components/RootLayout';
import "../globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <CartProvider>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
