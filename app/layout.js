import Footer from "./Components/Footer";
import Provider from "@/redux/Provider";
import NavScrollExample from "./Components/Navbar";
import NavbarScrollExample from "./Components/Navbar1";
import Navbar2 from "./Components/Navbar2";
import Top from "./Components/TopButton";
import { AuthProvider } from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: "Changlu Tools UAE | Hand Tools Power Tools",
  description: "Changlu Tools UAE | Hand Tools Power Tools | Trimming Tools | china tools | Tools Set | Tools Box",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <Provider>
          <NavScrollExample />
          <Navbar2/>
          <NavbarScrollExample />
          <Top />
          {children}
          {/* <FooterTop/> */}
          <Footer />
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}