import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/navBar/NavBar";
import Footer from "../components/footer/Footer";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} bg-white `}>
        <AuthProvider>
          <NavBar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
