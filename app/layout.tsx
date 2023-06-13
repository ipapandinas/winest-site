import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import AppImage from "@/components/ui/app-image";
import AppLink from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";

const inter = Archivo({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Winest Club - Web3 Wine Enthusiasts",
  description:
    "We are a WINE CLUB ! The Winest Club will have 10,000 members. To represent these members, we have created a collection of 10,000 NFTs. These NFTs will be like a membership card. Anyone who has it in their possession will be able to unlock and access all the privileges it entitles them to.",
  themeColor: "#8F0000",
  appleWebApp: {
    capable: true,
    title: "Winest Club",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: "website",
    url: "/",
    title: "Winest Club",
    description:
      "Winest Club is a Wine Club on Web3. We created the first Shared & Tokenized Cellar for fine Wine. INVEST - STOCK - BUY & Enjoy Dividends !",
    siteName: "Winest Club",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: "Winest Club",
    description:
      "Winest Club is a Wine Club on Web3. We created the first Shared & Tokenized Cellar for fine Wine. INVEST - STOCK - BUY & Enjoy Dividends !",
    card: "summary_large_image",
    site: "@WnstClub",
    creator: "@WnstClub",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="pt-8 pb-4 px-8 sticky top-0 left-0 z-10">
          <div className="flex justify-between items-center gap-16 md:container">
            <AppLink href="/">
              <AppImage
                className="block md:hidden"
                alt="Winest Club Homepage"
                src="/assets/logo.svg"
                height={50}
                width={40}
              />
              <AppImage
                className="w-auto h-auto hidden md:block"
                alt="Winest Club Homepage"
                src="/assets/logo-full.svg"
                height={50}
                width={160}
              />
            </AppLink>
            <AppLink href="http://bit.ly/3HogBKh">
              <Button variant="outline">Download Whitepaper</Button>
            </AppLink>
          </div>
        </header>
        <main className="flex flex-col items-center justify-between">
          {children}
        </main>
        <footer className="flex flex-col-reverse items-center gap-4 p-8">
          <span className="text-center">
            © {new Date().getFullYear().toString()} - Winest Club. All rights
            reserved.
          </span>
          <div className="flex items-center gap-8">
            <AppLink href="https://discord.gg/cvQPrnCf7Y">
              <AppImage
                alt="Winest Club on Discord"
                src="/assets/icon-discord-black.svg"
                height={36}
                width={36}
              />
            </AppLink>
            <AppLink href="https://twitter.com/WnstClub">
              <AppImage
                alt="Winest Club on Twitter"
                src="/assets/icon-twitter-black.svg"
                height={35}
                width={35}
              />
            </AppLink>
          </div>
        </footer>
      </body>
    </html>
  );
}
