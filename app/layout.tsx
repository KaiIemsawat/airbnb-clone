import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "AirBNB",
    description: "AirBNB clone",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>{children}</body>
        </html>
    );
}
