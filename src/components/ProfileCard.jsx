import { motion } from "motion/react";
import MainCTA from "./MainCTA";
import HeroImage from "./HeroImage";
import SocialLinks from "./SocialLinks";

function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="mx-auto flex w-full max-w-3xl flex-col items-center rounded-2xl bg-gray-dark px-6 py-8 text-center md:py-12 lg:w-80 dark:bg-offWhite dark:text-gray-darkest"
    >
      <HeroImage />

      <div className="mb-4 text-2xl font-bold uppercase text-offWhite sm:mb-6 sm:text-3xl lg:hidden dark:text-gray-darkest">
        Ryne James Gandia
      </div>

      <p className="mb-6 max-w-lg text-gray-light sm:mb-8 sm:text-lg dark:text-gray-dark">
        I&apos;m <span className="lg:font-semibold">Ryne</span>, a frontend
        developer based in the Philippines, proficient in cutting-edge
        technologies such as React
      </p>

      <div className="flex w-full max-w-md flex-col items-center gap-6 sm:flex-row sm:justify-between lg:justify-center">
        <SocialLinks />
        <div className="lg:hidden">
          <MainCTA />
        </div>
      </div>
    </motion.div>
  );
}

export default ProfileCard;
