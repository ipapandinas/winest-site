import localFont from "next/font/local";
import AppImage from "../ui/app-image";
import AppLink from "../ui/app-link";
import { Card, CardContent } from "../ui/card";

const bentoga = localFont({
  src: "../../public/fonts/Bentoga-Thin.otf",
  display: "swap",
});

interface IProps {
  imageAlt: string;
  imageSrc: string;
  isRtl?: boolean;
  link: string;
  name: string;
}

export function SocialCard({ imageAlt, imageSrc, isRtl, link, name }: IProps) {
  return (
    <AppLink href={link}>
      <Card className="w-[350px] bg-secondary hover:border hover:border-black">
        <CardContent
          className={`flex items-center gap-8 h-full p-6 ${
            isRtl ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <AppImage alt={imageAlt} src={imageSrc} height={120} width={120} />
          <h4
            className={`text-6xl text-center text-black ${bentoga.className}`}
          >
            {name}
          </h4>
        </CardContent>
      </Card>
    </AppLink>
  );
}
