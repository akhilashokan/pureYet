import type { Metadata } from "next";
import "./globals.css";


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
      <body>
        {children}
      </body>
    </html>
  );
}
