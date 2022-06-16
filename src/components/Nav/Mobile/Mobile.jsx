import { BiHomeSmile } from "react-icons/bi";
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import { motion } from "framer-motion";
import { createElement } from "react";

const Mobile = () => {
  const Item = [
    { component: BiHomeSmile, href: "Home" },
    { component: SiAboutdotme, href: "About" },
    { component: GiSkills, href: "Skill" },
    { component: AiOutlineProject, href: "Project" },
    { component: GrContact, href: "Contact" },
  ];

  return (
    <motion.div
      initial={{
        bottom: -100,
      }}
      animate={{ bottom: 0 }}
      className="fixed flex-wrap flex justify-between lg:hidden bottom-0 bg-[rgba(199,199,204,0.4)] px-5 py-[10px] backdrop-blur-[5px] rounded-[10px] border-[1px] border-[rgba(255,255,255,0.18)] bg-white w-[100vw] sm:w-[70%] left-0 sm:left-[50%] sm:-translate-x-[50%] px-2 py-2"
    >
      {Item.map((i, inx) => (
        <motion.a
          whileTap={{ scale: 1.5, y: -30 }}
          href={i.href}
          key={inx}
          className="text-2xl flex flex-col items-center"
        >
          {createElement(i.component)}
          <p className="text-sm mt-2">{i.href}</p>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Mobile;
