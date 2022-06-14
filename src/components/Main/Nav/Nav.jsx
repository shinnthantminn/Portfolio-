import { useState } from "react";
import { motion } from "framer-motion";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={
        toggle
          ? "change shadow"
          : "change -translate-y-[205px] lg:-translate-y-[0]"
      }
    >
      {/*Logo Header*/}
      <motion.div
        initial={{ x: -300 }}
        animate={{
          x: 0,
          transition: {
            type: "spring",
            mass: 1,
          },
        }}
        exit={{
          x: -300,
          transition: {
            type: "spring",
            mass: 1,
          },
        }}
        className="order-2 lg:order-1"
      >
        <h1 className="text-3xl sm:text-6xl font-semibold">Terry</h1>
      </motion.div>

      {/*mobile Menu*/}
      <motion.button
        initial={{ x: 300 }}
        animate={{
          x: 0,
          transition: {
            type: "spring",
            mass: 1,
          },
        }}
        exit={{
          x: 300,
          transition: {
            type: "spring",
            mass: 1,
          },
        }}
        onClick={() => setToggle((pre) => !pre)}
        className="relative flex flex-col justify-between order-3 w-[30px] h-[23px] visible lg:hidden"
      >
        <div
          className={toggle ? "mobile rotate-45 translate-y-[15px]" : "mobile"}
        />
        <div className={toggle ? "mobile opacity-0" : "mobile"} />
        <div
          className={toggle ? "mobile -rotate-45 -translate-y-[5px]" : "mobile"}
        />
      </motion.button>

      {/*tool*/}
      <motion.ul
        initial={{ x: 300 }}
        animate={{
          x: 0,
          transition: {
            type: "spring",
            mass: 1,
          },
        }}
        exit={{
          x: 300,
          transition: {
            type: "spring",
            mass: 1,
          },
        }}
        className="Toggle"
      >
        <li>
          <a href="" className="menu">
            Home
          </a>
        </li>
        <li>
          <a href="" className="menu">
            About
          </a>
        </li>
        <li>
          <a href="" className="menu">
            Services
          </a>
        </li>
        <li>
          <a href="" className="menu">
            Project
          </a>
        </li>
        <li>
          <a href="" className="menu">
            Contact
          </a>
        </li>
      </motion.ul>
    </nav>
  );
};

export default Nav;
