import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Intro = () => {
  const nav = useNavigate();
  useEffect(() => {
    document.title = "Terry | Intro";
    setInterval(() => {
      nav("/home");
    }, 3000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5,
        },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      }}
      className="w-full min-h-[100vh] bg-yellow-400 font-['Ubuntu']"
    >
      <div className="flex flex-wrap justify-center items-center pt-[50%] sm:pt-0 sm:min-h-[100vh]">
        <motion.div
          initial={{
            x: -1000,
          }}
          animate={{
            x: 0,
            transition: {
              type: "spring",
              duration: 0.5,
              mass: 0.5,
            },
          }}
          exit={{
            y: -1000,
            transition: {
              type: "spring",
              duration: 1,
            },
          }}
          className="relative mb-5 sm:mb-12"
        >
          <h1 className="text-5xl sm:text-9xl font-semibold">Terry</h1>
          <span className="absolute top-[-5px] sm:top-[10px] right-[-30px] text-xl sm:text-3xl font-bold">
            TM
          </span>
        </motion.div>

        <motion.span
          initial={{
            x: 1000,
          }}
          animate={{
            x: 0,
            transition: {
              type: "spring",
              duration: 0.5,
              mass: 0.5,
            },
          }}
          exit={{
            y: 1000,
            transition: {
              type: "spring",
              duration: 1,
            },
          }}
          className="text-4xl sm:text-8xl ml-10 sm:ml-12 rounded-[10px] sm:rounded-[30px] px-2 sm:px-5 text-white border-4 sm:border-8 border-white"
        >
          V1
        </motion.span>
      </div>
    </motion.div>
  );
};

export default Intro;
