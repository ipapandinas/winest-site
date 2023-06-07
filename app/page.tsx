"use client";
import { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { KeyCard } from "@/components/base/key-card";
import { KeyValue } from "@/components/base/key-value";
import { TeamAvatar } from "@/components/base/team-avatar";
import AppImage from "@/components/ui/app-image";
import AppLink from "@/components/ui/app-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Showcase3D from "@/components/base/showcase-3D";

const SHOWCASE_3D_IMAGES = [
  "/assets/hero-card-0.png",
  "/assets/hero-card-1.png",
  "/assets/hero-card-2.png",
];

export default function Home() {
  const howItWorksRef = createRef<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState<number>(1);

  const executeScroll = () => {
    if (howItWorksRef.current)
      return howItWorksRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="w-full py-16 px-8">
        <div className="mx-auto flex flex-col justify-between gap-16 lg:gap-32 lg:container lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-extrabold lg:max-w-lg">
              Shaping the future of Wine industry with the power of Web3
            </h1>
            <p className="text-2xl text-slate-500 mt-6 lg:max-w-sm">
              Empowering everyone to invest, stock & buy fine wine
            </p>
            <Button
              className="mt-6"
              variant="secondary"
              onClick={executeScroll}
            >
              Learn More
            </Button>
            <div className="flex gap-3 mt-4 justify-center lg:justify-start">
              <AppLink href="https://twitter.com/WnstClub">
                <AppImage
                  alt="Winest Twitter"
                  src="/assets/icon-twitter.svg"
                  height={32}
                  width={32}
                />
              </AppLink>
              <AppLink href="https://discord.gg/cvQPrnCf7Y">
                <AppImage
                  alt="Winest Discord"
                  src="/assets/icon-discord.svg"
                  height={32}
                  width={32}
                />
              </AppLink>
            </div>
          </div>
          <div className="max-w-prose w-full m-auto sm:w-auto lg:h-full lg:m-0 lg:mr-24">
            <motion.div
              className={`${loaded ? "" : "opacity-0"}`}
              animate={loaded ? { opacity: 1 } : {}}
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Showcase3D
                images={SHOWCASE_3D_IMAGES}
                selectedImageId={selectedImageId}
                setSelectedImageId={setSelectedImageId}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* VISION */}
      <div className="w-full bg-slate-100 py-16 px-8">
        <div className="mx-auto md:container">
          <h2 className="text-5xl font-bold">Winest Club Vision</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
            <div>
              <KeyValue
                body="Respond directly to real-life pains to build foundation of our community and capabilities"
                imageAlt="Winest token flow"
                imageSrc="/assets/flow.svg"
                title="Reshaping models to buy & invest in wine"
              />
            </div>
            <div>
              <KeyValue
                body="Dismantle entry barriers & bring transparency, fostering a customer-centric revolution"
                imageAlt="Winest distribution"
                imageSrc="/assets/distribution.svg"
                title="Reshaping the wine distribution industry"
              />
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <KeyValue
                body="Winest DAO is tackling wine industry hurdles, with plans from winery financing to tech innovation."
                imageAlt="Winest industry"
                imageSrc="/assets/industry.svg"
                title="Reshaping the wine making industry"
              />
            </div>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="w-full py-16 px-8" ref={howItWorksRef}>
        <div className="mx-auto md:container">
          <h2 className="text-5xl font-bold">How It Works?</h2>
          <div className="flex flex-col gap-16 mt-16">
            <div className="w-full">
              <KeyCard
                category="EVERYONE"
                body="A place where anyone can invest in wine without minimum investment & capital lock in Period."
                imageAlt="Winest industry"
                imageSrc="/assets/everyone.png"
                title="The shared cellar"
              />
            </div>
            <div className="w-full">
              <KeyCard
                category="MEMBERS"
                body="Exclusive access to the shared cellar for winest 10 000 members to Buy high curated selection of fine wine at professional pricing."
                imageAlt="Winest industry"
                imageSrc="/assets/members.png"
                isRtl
                title="The Wine Club"
              />
            </div>
            <div className="w-full">
              <KeyCard
                category="INVESTORS & PARTNERS"
                body="Where partners & members shape the futur of wine industry through transparency and governance."
                imageAlt="Winest industry"
                imageSrc="/assets/partners.png"
                title="An Entire New Ecosystem"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className="w-full py-16 px-8">
        <div className="mx-auto md:container">
          <h2 className="text-5xl font-bold">Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 mt-16 gap-16">
            <div className="md:col-span-3">
              <TeamAvatar
                bio="Engineer with an MBA from INSEAD , 15 years international leadership roles serving last as a GM for Danaher SEA-ANZ. Cofounder of Tanyno Trading (wine distribution in Brazil) & Multimicrocloud (software solution)"
                imageAlt="Paul Peyrucq Avatar"
                imageSrc="/assets/team-paul.png"
                name="Paul Peyrucq"
                role="Founder & CEO"
              />
            </div>
            <TeamAvatar
              bio="8 years of experience as an entrepreneur & CMO of multiple digital companies. Helped launch B2B and B2C brands in multiple regions"
              imageAlt="Luis Cardoso Avatar"
              imageSrc="/assets/team-luis.png"
              name="Luis Cardoso"
              role="CMO"
            />
            <TeamAvatar
              bio="Graduated from Paris Dauphine & Sorbonne with a master in management information system. Led as a product owner, the digital transformation activities at Air Liquide"
              imageAlt="Jade Peyrucq Avatar"
              imageSrc="/assets/team-jade.png"
              name="Jade Peyrucq"
              role="COO"
            />
            <TeamAvatar
              bio="Engineer with over 2 year of experience as a Blockchain Lead and 2 years as full stack engineer skilled in React, Rust, Solidity, Substrate, and TypeScript"
              imageAlt="Igor Avatar"
              imageSrc="/assets/team-igor.png"
              name="Igor Papandinas"
              role="CTO"
            />
          </div>
        </div>
      </div>

      {/* WINEST APPLICATION */}
      <div className="w-full py-16 px-8">
        <div className="mx-auto md:container">
          <h2 className="text-5xl font-bold block sm:hidden">Winest App</h2>
          <h2 className="text-5xl font-bold hidden sm:block">
            Winest Application
          </h2>
          <div className="flex flex-col mt-16 gap-4 sm:items-center sm:flex-row sm:justify-around sm:mt-0">
            <div>
              <Badge variant="secondary">⚠️ - In Progress</Badge>
              <p className="mt-4 max-w-sm text-xl md:text-4xl">
                Winest Club Application. Easily buy WNST Tokens & Buy wine
                directly from the shared cellar in few clicks
              </p>
            </div>
            <AppImage
              className="m-auto sm:m-0"
              alt="Winest Application snippet"
              src="/assets/app.png"
              height={400}
              width={450}
            />
          </div>
        </div>
      </div>
    </>
  );
}
