import React from "react";
import { EB_Garamond } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navBar/NavBar";
import { AuthProvider } from "./context/AuthProvider";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.className} bg-white `}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
