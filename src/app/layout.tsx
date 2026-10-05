import type { Metadata } from "next";
import Header from "@/components/Header";
import FailureToggle from "@/components/FailureToggle";
import PizzaOfTheDay from "@/components/PizzaOfTheDay";
import { getPizzaOfTheDay } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: "Padre Gino's — Menu Explorer",
  description: "Find your next favorite pizza.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pizzaOfTheDay = await getPizzaOfTheDay();

  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {pizzaOfTheDay && <PizzaOfTheDay pizza={pizzaOfTheDay} />}

        <Header />

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main>

        <footer className="border-t border-black/10 bg-white/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm text-ink/70">
            <span>Padre Gino&apos;s · Day 1</span>
            <FailureToggle />
          </div>
        </footer>
      </body>
    </html>
  );
}