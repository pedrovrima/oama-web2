// Porte verbatim de components/increasing-number.jsx do legado.
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";

import { useEffect, useRef } from "react";

export default function IncreasingNumber({ finalNumber }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    let animation;
    if (isInView) {
      animation = animate(count, finalNumber, { duration: 2 });
    }
    return animation?.stop;
  }, [isInView]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}
