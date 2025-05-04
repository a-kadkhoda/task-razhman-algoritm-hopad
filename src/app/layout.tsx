import type { Metadata } from "next";
import "../styles/globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "TIC DDoS Radar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="dark:bg-dark min-h-screen flex ">
        <Sidebar />
        <div className="flex flex-col flex-1 min-h-screen w-[calc(100vw-184px)] ">
          <Navbar />
          <main className="flex-1 min-h-[calc(100vh-166px)]">{children}</main>
        </div>
      </body>
    </html>
  );
}
