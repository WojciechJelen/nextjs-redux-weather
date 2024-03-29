import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { clsx } from "clsx";
import styles from "./layout.module.scss";
import { Header } from "./components/header/header";
import SearchWeather from "./components/search-weather/search-weather";
import StoreProvider from "./store-provider";
import { Container } from "./components/ui/container";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App",
  description: "Weather app built with Next.js and TypeScript",
};

const layoutClassName = clsx(styles.layoutWrapper, inter.className);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <StoreProvider user={session?.user ?? null}>
      <html lang="en">
        <body className={layoutClassName}>
          <Header />
          <Container>
            <SearchWeather />
            {children}
          </Container>
        </body>
      </html>
    </StoreProvider>
  );
}
