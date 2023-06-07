import Link, { LinkProps } from "next/link";

interface Props extends LinkProps {
  children: React.ReactNode;
}

export default function AppLink(props: Props) {
  return (
    <Link className="no-underline text-primary" {...props}>
      {props.children}
    </Link>
  );
}
