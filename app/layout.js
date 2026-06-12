import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "GHOST — Photography Portfolio",
  description:
    "Black and white photography from Bangalore, India. Fog, water, flora, birds, macro, sky, city, and animals — shot on a phone, stripped of colour.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
