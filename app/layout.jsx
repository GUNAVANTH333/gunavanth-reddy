import {
  Inter,
  Poppins,
  Playfair_Display,
  Rubik_Pixels,
  Rubik_Doodle_Shadow,
} from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const rubikPixels = Rubik_Pixels({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rubik-pixels",
});

const rubikDoodle = Rubik_Doodle_Shadow({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-rubik-doodle",
});

export const metadata = {
  title: "Gunavanth Reddy",
  description: "Modern developer portfolio with smooth animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.variable} ${playfair.variable} ${rubikPixels.variable} ${rubikDoodle.variable} font-sans antialiased`}
      >
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
