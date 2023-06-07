import AppImage from "../ui/app-image";

interface IProps {
  body: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
}

export function KeyValue({ body, imageAlt, imageSrc, title }: IProps) {
  return (
    <div className="flex flex-col items-center mx-auto">
      <AppImage alt={imageAlt} src={imageSrc} height={150} width={150} />
      <h3 className="text-3xl text-center font-bold mt-8">{title}</h3>
      <p className="text-base text-center mt-4">{body}</p>
    </div>
  );
}
