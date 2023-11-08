'use client'
import Navbar from "./components/Navbar";
import "./globals.css";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/modals/RegisterModal";
import LoginModal from "./components/modals/LoginModal";
import SearchModal from "./components/modals/SearchModal";
import Footer from "./components/Footer";
import RentModal from "./components/modals/RentModal";
import ToasterProvider from "./providers/ToasterProvider";
import Provider from "./components/Provider";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";

const nunito = Nunito({ subsets: ["latin"] });

// export const metadata = {
//   title: "Your staycation online",
//   description: "Your Number one staycation platform in the globe",
// };

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <ThemeProviders> */}
      <body className="dark:bg-gray-900">
        <Provider>
          <ToasterProvider />
          <ThemeProvider enableSystem={true} attribute="class">
            <RegisterModal />
            <LoginModal />
            <RentModal />
            <SearchModal />
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
      {/* </ThemeProviders> */}
    </html>
  );
}
