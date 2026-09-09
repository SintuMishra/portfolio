import { motion as Motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className }) {
  const reducedMotion = useReducedMotion();
  return <Motion.div className={className} initial={false}
    whileInView={reducedMotion ? undefined : { opacity: [0.85, 1] }}
    viewport={{ once: true }} transition={{ duration: 0.25 }}>
    {children}
  </Motion.div>;
}
