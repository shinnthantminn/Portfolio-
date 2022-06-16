import Menu from "./Menu/Menu";
import { motion } from "framer-motion";
import { BiMenuAltLeft } from "react-icons/bi";
import Mobile from "./Mobile/Mobile";

const Nav = () => {
  const menu = ["Home", "About", "Skill", "Project", "Contact"];
  return (
    <>
      <motion.div
        className="change"
        initial={{
          y: 100,
        }}
        animate={{ y: 0 }}
      >
        <div className="hidden lg:flex justify-between w-full lg:w-fit items-center py-4 lg:py-0 ">
          <div className="text-4xl sm:text-5xl lg:text-6xl font-bold duration-300 dark:text-white">
            Terry
          </div>
          <div className="text-2xl lg:hidden">
            <BiMenuAltLeft />
          </div>
        </div>
        <Menu menu={menu} />
      </motion.div>
      <Mobile />
    </>
  );
};

export default Nav;
