import AppImage from "../ui/app-image";

interface IProps {
  category: string;
  body: string;
  imageAlt: string;
  imageSrc: string;
  isRtl?: boolean;
  title: string;
}

export function KeyCard({
  category,
  body,
  imageAlt,
  imageSrc,
  isRtl = false,
  title,
}: IProps) {
  return (
    <div
      className={`flex flex-col justify-around items-center mx-auto gap-x-4 gap-y-8 ${
        isRtl ? "sm:flex-row-reverse" : "sm:flex-row"
      }`}
    >
      <div className="flex flex-col items-start">
        <span className="capitalize text-base text-red-800">{category}</span>
        <h3 className="text-4xl font-bold mt-2">{title}</h3>
        <p className="text-xl mt-4 max-w-sm">{body}</p>
      </div>
      <AppImage alt={imageAlt} src={imageSrc} height={300} width={300} />
    </div>
  );
}
