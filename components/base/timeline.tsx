import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValue } from "framer-motion";
import { TimelineItem } from "./timeline-item";

interface IProps {
  steps: {
    title: string;
    details: string[];
  }[];
}

export function Timeline({ steps }: IProps) {
  const x = useMotionValue(0);
  const ref = useRef(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ranges, setRanges] = useState<[number, number][]>(
    Array(steps.length).fill([0, 1])
  );

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0.65 end", "start start"],
  });

  useEffect(() => {
    const heights = stepRefs.current.map((ref: any) => ref.offsetHeight);
    const totalHeight = heights.reduce((a, b) => a + b, 0);
    const proportions = heights.map((height) => height / totalHeight);

    let sum = 0;
    const ranges: [number, number][] = proportions.map((proportion) => {
      sum += proportion;
      return [sum - proportion, sum];
    });
    setRanges(ranges);
  }, []);

  useEffect(() => {
    return scrollYProgress.on("change", (v) => {
      x.set(v);
    });
  }, [scrollYProgress, x]);

  return (
    <div
      ref={ref}
      className="flex items-center md:justify-center w-full h-auto relative"
    >
      <div
        id="timeline_progress_bg"
        className="w-1 bg-slate-300 absolute top-0 h-full"
      >
        <motion.div
          className="w-1 h-full bg-white"
          id="timeline_progress_fg"
          style={{
            originY: 0,
            scaleY: scrollYProgress,
            backgroundImage:
              "linear-gradient(180deg, #62ffa6 94%, #da0000 100%, #6248ff)",
          }}
        />
      </div>
      <div className="w-full">
        {steps.map(({ title, details }, idx) => (
          <div key={idx} ref={(el) => (stepRefs.current[idx] = el)}>
            <TimelineItem
              details={details}
              idx={idx}
              rangeIO={ranges[idx]}
              title={title}
              x={x}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
