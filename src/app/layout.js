import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nike App",
  description: "Developer: Mohammad Ahainejad",
  icons: { icon: "./favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
