import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TeamAvatar } from "./team-avatar";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export function Team() {
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });
  const [refPaul, isInViewPaul] = useInView();
  const [hasBeenInViewPaul, setHasBeenInViewPaul] = useState(false);
  if (isInViewPaul && !hasBeenInViewPaul) setHasBeenInViewPaul(true);

  const [refAll, isInViewAll] = useInView();
  const [hasBeenInViewAll, setHasBeenInViewAll] = useState(!isDesktopOrLaptop);
  if (isInViewAll && !hasBeenInViewAll) setHasBeenInViewAll(true);

  return (
    <div className="mt-16 gap-16">
      <motion.div
        className="md:col-span-3"
        ref={refPaul}
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: hasBeenInViewPaul ? 1 : 0,
          y: hasBeenInViewPaul ? 0 : 50,
        }}
        transition={{ delay: isDesktopOrLaptop ? 0.2 : 0, duration: 1 }}
      >
        <TeamAvatar
          bio="Engineer with an MBA from INSEAD , 15 years international leadership roles serving last as a GM for Danaher SEA-ANZ. Cofounder of Tanyno Trading (wine distribution in Brazil) & Multimicrocloud (software solution)"
          imageAlt="Paul Peyrucq Avatar"
          imageSrc="/assets/team-paul.png"
          name="Paul Peyrucq"
          role="Founder & CEO"
          linkedinHref="https://www.linkedin.com/in/paul-peyrucq-7215044b/"
        />
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-16 gap-16">
        <motion.div
          ref={refAll}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasBeenInViewAll ? 1 : 0,
            y: hasBeenInViewAll ? 0 : 50,
          }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <TeamAvatar
            bio="8 years of experience as an entrepreneur & CMO of multiple digital companies. Helped launch B2B and B2C brands in multiple regions"
            imageAlt="Luis Cardoso Avatar"
            imageSrc="/assets/team-luis.png"
            name="Luis Cardoso"
            role="CMO"
            linkedinHref="https://www.linkedin.com/in/paul-peyrucq-7215044b/"
          />
        </motion.div>
        <motion.div
          ref={refAll}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasBeenInViewAll ? 1 : 0,
            y: hasBeenInViewAll ? 0 : 50,
          }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <TeamAvatar
            bio="Graduated from Paris Dauphine & Sorbonne with a master in management information system. Led as a product owner, the digital transformation activities at Air Liquide"
            imageAlt="Jade Peyrucq Avatar"
            imageSrc="/assets/team-jade.png"
            name="Jade Peyrucq"
            role="COO"
            linkedinHref="https://www.linkedin.com/in/jade-peyrucq-0b2aa6157/"
            twitterHref="https://twitter.com/Jadpeyrucq"
          />
        </motion.div>
        {/* <motion.div
          ref={refAll}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: hasBeenInViewAll ? 1 : 0,
            y: hasBeenInViewAll ? 0 : 50,
          }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <TeamAvatar
            bio="Engineer with over 2 year of experience as a Blockchain Lead and 2 years as full stack engineer skilled in React, Rust, Solidity, Substrate, and TypeScript"
            imageAlt="Igor Avatar"
            imageSrc="/assets/team-igor.png"
            name="Igor Papandinas"
            role="CTO"
            linkedinHref="https://www.linkedin.com/in/igor-papandinas/"
            twitterHref="https://twitter.com/dontelmo_"
          />
        </motion.div> */}
      </div>
    </div>
  );
}
