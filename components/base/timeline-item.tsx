import { motion, useTransform, MotionValue } from "framer-motion";
import { Badge } from "../ui/badge";

interface IProps {
  details: string[];
  idx: number;
  rangeIO: [number, number];
  title: string;
  x: MotionValue<number>;
}

export function TimelineItem({ details, idx, rangeIO, title, x }: IProps) {
  const opacity = useTransform(x, rangeIO, [0.25, 1]);

  return (
    <motion.div
      className="py-8 pl-16 md:pl-0 md:grid md:auto-cols-fr"
      style={{ gridTemplateColumns: "1fr 180px 1fr", opacity }}
    >
      <div className="flex md:justify-end items-end mb-8">
        <div className="text-4xl font-bold tracking-tight">{`Phase ${
          idx + 1
        }`}</div>
      </div>
      <div />
      <div className="flex flex-col justify-start max-w-sm">
        <div className="text-2xl font-bold mb-4">{title}</div>
        <div className="flex flex-col justify-start mb-8">
          {details.map((item, idx2) => (
            <span key={idx2} className="text-lg text-slate-500">
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
