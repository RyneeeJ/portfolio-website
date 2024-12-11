import { motion } from "motion/react";
function SkillsListItem({ name, iconPath }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ margin: "-80px", once: true }}
      className="flex h-full w-full max-w-72 flex-col items-center gap-4 rounded-md bg-gray-light px-4 py-4 odd:place-self-end min-[500px]:flex-row min-[500px]:px-6 md:px-8 md:py-6 lg:place-self-center lg:odd:place-self-center dark:bg-gray-dark"
    >
      <div className="aspect-square h-12">
        <img src={iconPath} alt={name} />
      </div>
      <div className="text-center text-xl md:text-2xl">{name}</div>
    </motion.li>
  );
}

export default SkillsListItem;
