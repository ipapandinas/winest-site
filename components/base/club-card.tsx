import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

import AppImage from "../ui/app-image";

interface IProps {
  body: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

export function ClubCard({ body, imageAlt, imageSrc, title }: IProps) {
  const [refImage, isInViewImage] = useInView();
  const [hasBeenInViewImage, setHasBeenInViewImage] = useState(false);
  if (isInViewImage && !hasBeenInViewImage) setHasBeenInViewImage(true);

  return (
    <div>
      <div className="mb-4 p-8 w-full">
        <h3 className="text-6xl font-bold tracking-tight text-white whitespace-break-spaces">
          {title}
        </h3>
        <p className="text-xl text-slate-300 tracking-tight mt-4 whitespace-break-spaces">
          {body}
        </p>
      </div>
      <motion.div
        className="mx-auto relative"
        style={{ bottom: "-48px" }}
        ref={refImage}
        initial={{ y: 30 }}
        animate={{
          y: hasBeenInViewImage ? 0 : 30,
        }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <AppImage
          className="mx-auto"
          alt={imageAlt}
          src={imageSrc}
          height={500}
          width={500}
        />
      </motion.div>
    </div>
  );
}
