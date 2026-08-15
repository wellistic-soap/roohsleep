import { Cormorant_Garamond, Karla } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://roohsleep.com"),
  title: {
    default: "Rooh | Sleep textiles made with soul",
    template: "%s | Rooh",
  },
  description:
    "Rooh makes cooling pillowcases, contour pillows, silk pillowcases, and seed-filled eye masks, sourced through direct relationships with makers across South and Southeast Asia.",
  openGraph: {
    title: "Rooh | Sleep textiles made with soul",
    description: "Sleep textiles sourced through direct relationships with the people who make them.",
    url: "https://roohsleep.com",
    siteName: "Rooh",
    type: "website",
    images: [
      {
        url: "/images/social-og.jpg",
        width: 1200,
        height: 630,
        alt: "Rooh sleep textiles arranged on warm linen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/social-og.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
