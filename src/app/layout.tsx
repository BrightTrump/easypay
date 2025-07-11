import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
// import { Toast } from "@/ui";
import "@/ui/inputs/index.css";
import NextTopLoader from "nextjs-toploader";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EasyPay Banking App",
  description: "A Nigerian Startup Bank",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={lato.className} suppressHydrationWarning={true}>
        <NextTopLoader
          color="#c1c1c1"
          showSpinner={false}
          height={4}
          speed={3000}
        />
        <NextTopLoader
          color="#c1c1c1"
          showSpinner={false}
          height={4}
          speed={3000}
        />
        {children}
      </body>
    </html>
  );
}
