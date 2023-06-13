import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardContent } from "../ui/card";

interface IProps {
  body: string;
  Icon: LucideIcon;
  title: string;
}

export function KeyValue({ body, Icon, title }: IProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="p-2 border rounded-full w-fit">
          <div className="p-4 border rounded-full w-fit">
            <Icon />
          </div>
        </div>
      </CardHeader>
      <CardContent className="text-left">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className="text-base mt-4">{body}</p>
      </CardContent>
    </Card>
  );
}
