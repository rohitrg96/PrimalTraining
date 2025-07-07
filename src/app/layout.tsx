import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "@/components/navbar/NavBar";

export const metadata = {
  title: "PrimalTraining",
  description: "Train with us to reach your peak.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 p-4">{children}</main>
      </body>
    </html>
  );
}
