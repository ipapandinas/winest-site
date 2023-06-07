import Image, { ImageProps } from "next/image";

export default function AppImage(props: ImageProps) {
  return (
    <Image
      {...props}
      alt={props.alt ? props.alt : "Image descriptive text"}
      unoptimized={props.unoptimized !== undefined ? props.unoptimized : false}
      sizes={props.sizes}
      priority={props.priority !== undefined ? props.priority : false}
      draggable={props.draggable !== undefined ? props.draggable : false}
    />
  );
}
