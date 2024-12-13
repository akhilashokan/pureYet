import type { Metadata } from "next";
import "./globals.css";
import Footer from "../components/footer";


export const metadata: Metadata = {
  title: "pureYet?",
  description: "is you city pure yet?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen justify-between  min-w-full">
        {children}
        <Footer />
      </body>
    </html>
  );
}
