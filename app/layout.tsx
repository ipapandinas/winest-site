import AppImage from "@/components/ui/app-image";
import "./globals.css";
import { Archivo } from "next/font/google";
import AppLink from "@/components/ui/app-link";
import { Button } from "@/components/ui/button";

const inter = Archivo({ subsets: ["latin"] });

export const metadata = {
  title: "Winest Club - Web3 Wine Enthusiasts",
  description:
    "We are a WINE CLUB ! The Winest Club will have 10,000 members. To represent these members, we have created a collection of 10,000 NFTs. These NFTs will be like a membership card. Anyone who has it in their possession will be able to unlock and access all the privileges it entitles them to",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="pt-8 pb-4 px-8">
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
                height={30}
                width={30}
              />
            </AppLink>
          </div>
        </footer>
      </body>
    </html>
  );
}
