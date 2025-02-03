import Provider from "@/redux/Provider";
// import Footer from "./Components/Footer";
// import FooterTop from "./Components/FooterTop";
// import NavScrollExample from "./Components/Navbar";
// import NavbarScrollExample from "./Components/Navbar1";
// import Top from "./Components/TopButton";
import { AuthProvider } from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import Footer from "./components/Footer";
// import Head from "next/head";
// import Whatsaap from "./Components/Whatsaap";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Yulu Supply Chain | Hand Tools | Power Tools",
    template: "%s - Yulu Supply Chain | Hand Tools | Power Tools"
  },
  description: "Yulu Supply Chain is your trusted source for high-quality hand tools and power tools. At Yulu Supply Chain, we offer durable and reliable tools designed for efficiency and precision. Explore Yulu Supply Chain wide range of tools for professionals and DIY enthusiasts. Shop now with Yulu Supply Chain for the best in tools and equipment!",
  
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <AuthProvider>
          <Provider>
          <Navbar1/>
          <Navbar2/>
            {children}
          <Footer/>
          </Provider>
        </AuthProvider>
      </body>
    </html>
  );
}


