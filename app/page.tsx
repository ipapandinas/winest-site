"use client";
import { createRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import localFont from "next/font/local";
import { useInView } from "react-intersection-observer";
import { Droplet, Grape, Sparkles } from "lucide-react";

import { KeyCard } from "@/components/base/key-card";
import { KeyValue } from "@/components/base/key-value";
import { Team } from "@/components/base/team";
import AppImage from "@/components/ui/app-image";
import AppLink from "@/components/ui/app-link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Showcase3D from "@/components/base/showcase-3D";
import { Timeline } from "@/components/base/timeline";
import { SocialCard } from "@/components/base/social-card";
import { ClubCard } from "@/components/base/club-card";

const bentoga = localFont({
  src: "../public/fonts/Bentoga-Thin.otf",
  display: "swap",
});

const SHOWCASE_3D_IMAGES = [
  "/assets/hero-card-0.png",
  "/assets/hero-card-1.png",
  "/assets/hero-card-2.png",
];

const TIMELINE_STEPS = [
  { title: "Membership Sell", details: ["Sell Memberships", "NFT Reveal"] },
  {
    title: "Wine Purchase",
    details: ["Wineries Partners", "Wine Purchase", "First Events"],
  },
  {
    title: "WNST Token Launch & Shared Cellar",
    details: ["Web App Release", "Token Airdrop"],
  },
  {
    title: "DAO Constitution",
    details: ["First DAO votes"],
  },
];

export default function Home() {
  const [refVision, isInViewVision] = useInView();
  const [hasBeenInViewVision, setHasBeenInViewVision] = useState(false);
  if (isInViewVision && !hasBeenInViewVision) setHasBeenInViewVision(true);

  const [refClubCellar, isInViewClubCellar] = useInView();
  const [hasBeenInViewClubCellar, setHasBeenInViewClubCellar] = useState(false);
  if (isInViewClubCellar && !hasBeenInViewClubCellar)
    setHasBeenInViewClubCellar(true);

  const [refHowItWork, isInViewHowItWork] = useInView();
  const [hasBeenInViewHowItWork, setHasBeenInViewHowItWork] = useState(false);
  if (isInViewHowItWork && !hasBeenInViewHowItWork)
    setHasBeenInViewHowItWork(true);

  const [refRoadmap, isInViewRoadmap] = useInView();
  const [hasBeenInViewRoadmap, setHasBeenInViewRoadmap] = useState(false);
  if (isInViewRoadmap && !hasBeenInViewRoadmap) setHasBeenInViewRoadmap(true);

  const [refTeam, isInViewTeam] = useInView();
  const [hasBeenInViewTeam, setHasBeenInViewTeam] = useState(false);
  if (isInViewTeam && !hasBeenInViewTeam) setHasBeenInViewTeam(true);

  const [refApp, isInViewApp] = useInView();
  const [hasBeenInViewApp, setHasBeenInViewApp] = useState(false);
  if (isInViewApp && !hasBeenInViewApp) setHasBeenInViewApp(true);

  const [refCommunity, isInViewCommunity] = useInView();
  const [hasBeenInViewCommunity, setHasBeenInViewCommunity] = useState(false);
  if (isInViewCommunity && !hasBeenInViewCommunity)
    setHasBeenInViewCommunity(true);

  // const howItWorksRef = createRef<HTMLDivElement>();
  const [loaded, setLoaded] = useState(false);
  const [selectedImageId, setSelectedImageId] = useState<number>(1);

  // const executeScroll = () => {
  //   if (refHowItWork?.current) {
  //     const elementPosition = howItWorksRef.current.offsetTop;
  //     const offsetPosition = elementPosition - 100;

  //     window.scrollTo({
  //       top: offsetPosition,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="w-full py-32 px-8"
        // style={{
        //   backgroundImage: "radial-gradient(at 40% 30%,#792c3b30 0%,#fff 30%)",
        // }}
      >
        <div className="mx-auto flex flex-col justify-between gap-16 lg:gap-32 lg:container lg:flex-row">
          <div className="text-center lg:text-left leading-5">
            <h1 className="text-5xl font-extrabold lg:text-6xl lg:max-w-lg leading-tight">
              Shaping the future of Wine industry with the power of{" "}
              <span className={`${bentoga.className} mt-2`}>Web3</span>
            </h1>
            <p className="text-2xl text-slate-500 mt-6 lg:mt-8 lg:text-3xl lg:max-w-sm">
              Empowering everyone to invest, stock{" "}
              <span className="text-secondary">&</span> buy fine wine
            </p>
            <Button
              className="mt-6 lg:mt-8"
              variant="secondary"
              // onClick={executeScroll}
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
      </section>

      {/* VISION */}
      <section className="w-full bg-slate-100 py-32 px-8">
        <motion.div
          className="mx-auto md:container"
          ref={refVision}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasBeenInViewVision ? 1 : 0,
            y: hasBeenInViewVision ? 0 : 50,
          }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl">
            <strong className="font-bold">Winest Club</strong>{" "}
            <span className={bentoga.className}>Vision</span>
          </h2>
          <div className="flex flex-wrap lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-16">
            <div className="grow">
              <KeyValue
                body="Members' investments secure access to fine & rare wines. By attracting investment from non-members, the Shared cellar will be expanded."
                Icon={Grape}
                title="Accessibility"
              />
            </div>
            <div className="grow">
              <KeyValue
                body="Winest Club sources directly, reducing mark-ups, ensuring provenance and professional storage. Investors receive dividends based on cellar appreciation."
                Icon={Sparkles}
                title="Cost & Quality"
              />
            </div>
            <div className="grow sm:col-span-2 md:col-span-1">
              <KeyValue
                body="Members do not need to commit to any bottle or quantities. Their investment can be retracted at any time."
                Icon={Droplet}
                title="Flexibility"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* CLUB AND CELLAR */}
      <motion.section
        className="w-full py-32 px-8"
        ref={refClubCellar}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasBeenInViewClubCellar ? 1 : 0,
          y: hasBeenInViewClubCellar ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto md:container">
          <h2 className="text-5xl max-w-md leading-tight">
            <strong className="font-bold">Winest Club</strong> created the first{" "}
            <span className={bentoga.className}>Shared & Tokenized Cellar</span>
          </h2>
          <div className="flex flex-col gap-8 mt-16 md:flex-row">
            <div
              className="flex flex-col items-start truncate bg-black rounded-3xl relative"
              style={{
                backgroundImage:
                  "radial-gradient(at bottom left, #792c3c80, #000000)",
              }}
            >
              <ClubCard
                body="For Members Only - Become a Member now, buying a NFT
                Membership!"
                imageAlt="Wine Club logo"
                imageSrc="/assets/buble-club.png"
                title="Wine Club"
              />
            </div>
            <div
              className="flex flex-col items-start truncate bg-black rounded-3xl grow"
              style={{
                backgroundImage:
                  "radial-gradient(at bottom right, #792c3c80, #000000)",
              }}
            >
              <ClubCard
                body="For Members & Non Members - Invest in Wine and enjoy annual
                  dividends, buying WNST Tokens!"
                imageAlt="Wine Cellar logo"
                imageSrc="/assets/buble-cellar.png"
                title="Shared Cellar"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* HOW IT WORKS */}
      <motion.section
        className="w-full py-32 px-8"
        ref={refHowItWork}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasBeenInViewHowItWork ? 1 : 0,
          y: hasBeenInViewHowItWork ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto md:container">
          <h2 className="text-5xl font-bold">How It Works?</h2>
          <div className="flex flex-col gap-24 mt-16">
            <div className="w-full">
              <KeyCard
                category="EVERYONE"
                body="We create a shared cellar by issuing digital tokens that Everyone can buy, representing fractional ownership of the shared cellar. Funds from token sales are used to buy wine and cover 10 years of storage in bonded warehouses."
                imageAlt="Winest industry"
                imageSrc="/assets/everyone.png"
                title="The shared cellar"
              />
            </div>
            <div className="w-full">
              <KeyCard
                category="MEMBERS"
                body="Memberships, represented as non-fungible tokens (NFTs), are sold as one-time purchases and offer varying access levels to the wines available in the shared cellar "
                imageAlt="Winest industry"
                imageSrc="/assets/members.png"
                isRtl
                title="The Wine Club"
              />
            </div>
            <div className="w-full">
              <KeyCard
                category="INVESTORS & PARTNERS"
                body="Where profesionnals partners & members shape the futur through transparency and governance tokens, which enable voting on the club's development proposals."
                imageAlt="Winest industry"
                imageSrc="/assets/partners.png"
                title="An Entire New Ecosystem"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ROADMAP */}
      <motion.section
        className="w-full bg-slate-100 py-32 px-8"
        ref={refRoadmap}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasBeenInViewRoadmap ? 1 : 0,
          y: hasBeenInViewRoadmap ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto md:container">
          <h2 className={`${bentoga.className} text-5xl text-center`}>
            Roadmap
          </h2>
          <h3 className="text-3xl text-center mt-4">
            <strong className="font-bold">
              The story of what we want to create!
            </strong>
          </h3>
          <div className="mt-36">
            <Timeline steps={TIMELINE_STEPS} />
          </div>
        </div>
      </motion.section>

      {/* TEAM */}
      <motion.section
        className="w-full py-32 px-8"
        ref={refTeam}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasBeenInViewTeam ? 1 : 0,
          y: hasBeenInViewTeam ? 0 : 50,
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto md:container">
          <h2 className="text-5xl font-bold">Team</h2>
          <Team />
        </div>
      </motion.section>

      {/* WINEST APPLICATION */}
      <motion.section
        className="w-full py-32 px-8"
        ref={refApp}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasBeenInViewApp ? 1 : 0,
          y: hasBeenInViewApp ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto md:container">
          <h2 className="text-5xl font-bold block sm:hidden">Winest App</h2>
          <h2 className="text-5xl font-bold hidden sm:block">
            Winest Application
          </h2>
          <div className="flex flex-col mt-16 gap-4 bg-black p-8 rounded-3xl lg:items-center lg:flex-row lg:justify-around">
            <div>
              <Badge variant="secondary">⚠️ - In Progress</Badge>
              <p className="mt-4 max-w-sm text-xl md:text-4xl text-white">
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
      </motion.section>

      {/* COMMUNITY */}
      <motion.section
        className="w-full py-32 px-8"
        ref={refCommunity}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasBeenInViewCommunity ? 1 : 0,
          y: hasBeenInViewCommunity ? 0 : 50,
        }}
        transition={{ duration: 1 }}
      >
        <div className="mx-auto md:container">
          <h2 className={`${bentoga.className} text-5xl text-center`}>
            Community
          </h2>
          <h3 className="text-3xl text-center mt-4">
            <strong className="font-bold">Join us now!</strong>
          </h3>
          <div className="flex flex-col justify-center items-center gap-8 mt-16 md:flex-row">
            <SocialCard
              imageAlt="Winest on Discord"
              imageSrc="/assets/icon-discord-black.svg"
              link="https://discord.gg/cvQPrnCf7Y"
              name="discord"
            />
            <SocialCard
              imageAlt="Winest on Twitter"
              imageSrc="/assets/icon-twitter-black.svg"
              isRtl
              link="https://twitter.com/WnstClub"
              name="twitter"
            />
          </div>
        </div>
      </motion.section>
    </>
  );
}
