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
    "We are a WINE CLUB ! The Winest Club will have 10,000 members. To represent these members, we have created a collection of 10,000 NFT. These NFT will be like a membership card. Anyone who has it in their possession will be able to unlock and access all the privileges it entitles them to.",
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
        <header className="py-4 px-8 sticky top-0 left-0 z-10">
          <div className="flex justify-between items-center gap-16 md:container">
            <AppLink href="/">
              <AppImage
                className="block md:hidden"
                alt="Winest Club Homepage"
                src="/assets/logo.png"
                priority
                height={54}
                width={48}
              />
              <AppImage
                className="w-auto h-auto hidden md:block"
                alt="Winest Club Homepage"
                src="/assets/logo-full.png"
                priority
                height={50}
                width={120}
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
        <footer className="p-16 bg-black rounded-t-3xl">
          <div className="md:flex md:justify-between">
            <div className="items-self-start">
              <AppLink href="/">
                <AppImage
                  className="w-auto"
                  alt="Winest Club Homepage"
                  src="/assets/logo-full-white.png"
                  height={50}
                  width={160}
                />
              </AppLink>
              <div
                className="text-white max-w-sm mt-8 pl-8 border-left"
                style={{ borderLeft: "white 2px solid" }}
              >
                Winest Club is a Wine Club on Web3. We created the first Shared
                & Tokenized Cellar for fine Wine.
                <br />
                INVEST - STOCK - BUY <span className="text-secondary">
                  &
                </span>{" "}
                Enjoy Dividends
              </div>
            </div>
            <div className="mt-16 flex gap-16 text-white lg:pr-16 md:mt-0 lg:pr-40 ">
              <div>
                <h5 className="text-slate-400">ECOSYTEM</h5>
                <ul className="mt-4">
                  <li>
                    <AppLink href="https://discord.gg/cvQPrnCf7Y">
                      Discord
                    </AppLink>
                  </li>
                  <li>
                    <AppLink href="https://twitter.com/WnstClub">
                      Twitter
                    </AppLink>
                  </li>
                  <li>
                    <AppLink href="mailto:wnst.club@gmail.com">Support</AppLink>
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-slate-400">RESOURCES</h5>
                <ul className="mt-4">
                  <li>
                    <AppLink href="http://bit.ly/3HogBKh">Whitepaper</AppLink>
                  </li>
                  <li>
                    <AppLink href="http://bit.ly/3BrEtJ9">Webinar</AppLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-8">
            <div className="flex items-center gap-8">
              <AppLink href="https://discord.gg/cvQPrnCf7Y">
                <AppImage
                  alt="Winest Club on Discord"
                  src="/assets/icon-discord.svg"
                  height={36}
                  width={36}
                />
              </AppLink>
              <AppLink href="https://twitter.com/WnstClub">
                <AppImage
                  alt="Winest Club on Twitter"
                  src="/assets/icon-twitter.svg"
                  height={35}
                  width={35}
                />
              </AppLink>
            </div>

            <span className="text-center text-white">
              © {new Date().getFullYear().toString()} - Winest Club. All rights
              reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
