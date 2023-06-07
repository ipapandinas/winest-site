import AppImage from "../ui/app-image";

interface IProps {
  bio: string;
  imageAlt: string;
  imageSrc: string;
  name: string;
  role: string;
}

export function TeamAvatar({ bio, imageAlt, imageSrc, name, role }: IProps) {
  return (
    <div className="flex flex-col items-center mx-auto">
      <AppImage
        className="relative flex shrink-0 overflow-hidden rounded-full"
        alt={imageAlt}
        src={imageSrc}
        height={100}
        width={100}
      />
      <div className="text-lg text-center font-bold mt-4">{name}</div>
      <div className="text-lg text-primary text-center font-bold">{role}</div>
      <p className="text-sm text-center mt-2 max-w-lg">{bio}</p>
    </div>
  );
}
