import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./../components/navBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#192841] m-8`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
