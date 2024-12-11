import { motion } from "motion/react";
import MainCTA from "./MainCTA";

function HeroHeading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center lg:flex-1 lg:text-start"
    >
      <span className="text-green-dark mb-8 hidden text-xl uppercase tracking-[0.35em] lg:block lg:font-semibold">
        Frontend Developer
      </span>
      <h2 className="mb-4 text-5xl font-semibold uppercase text-gray-dark sm:text-6xl md:text-[5rem] lg:mb-6 dark:text-offWhite">
        <div className="lg:hidden">
          <span>Frontend</span> <br />
          <span className="text-green-dark">Developer</span>
        </div>
        <div className="hidden lg:block">
          <div>
            Ryne James <span className="text-gray-medium">Gandia</span>
          </div>
        </div>
      </h2>

      <p className="mx-auto max-w-96 text-gray-dark sm:max-w-md sm:text-lg lg:mx-0 lg:max-w-none dark:text-gray-light">
        Passionate about learning and transforming ideas into reality.
      </p>

      <div className="mt-14 hidden lg:block">
        <MainCTA />
      </div>
    </motion.div>
  );
}

export default HeroHeading;
