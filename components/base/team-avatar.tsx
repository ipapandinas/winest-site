import { Linkedin, Twitter } from "lucide-react";
import AppImage from "../ui/app-image";
import AppLink from "../ui/app-link";

interface IProps {
  bio: string;
  imageAlt: string;
  imageSrc: string;
  name: string;
  role: string;
  linkedinHref?: string;
  twitterHref?: string;
}

export function TeamAvatar({
  bio,
  imageAlt,
  imageSrc,
  name,
  role,
  linkedinHref,
  twitterHref,
}: IProps) {
  return (
    <div className="flex flex-col items-center mx-auto">
      <AppImage
        className="relative flex shrink-0 overflow-hidden rounded-full"
        alt={imageAlt}
        src={imageSrc}
        height={200}
        width={200}
      />
      <div className="text-lg text-center font-bold mt-4">{name}</div>
      <div className="text-lg text-primary text-center font-bold">{role}</div>
      <div className="flex gap-4 mt-2">
        {linkedinHref && (
          <AppLink href={linkedinHref}>
            <Linkedin />
          </AppLink>
        )}
        {twitterHref && (
          <AppLink href={twitterHref}>
            <Twitter />
          </AppLink>
        )}
      </div>
      <p className="text-sm text-center mt-4 max-w-lg">{bio}</p>
    </div>
  );
}
