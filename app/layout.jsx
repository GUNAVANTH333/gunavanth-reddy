import { Inter, Poppins, Playfair_Display } from "next/font/google";
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

export const metadata = {
  title: "Gunavanth Reddy",
  description: "Modern developer portfolio with smooth animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Pixels&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik+Doodle+Shadow&family=Rubik+Pixels&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.className} ${poppins.variable} ${playfair.variable} font-sans antialiased`}
      >
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
