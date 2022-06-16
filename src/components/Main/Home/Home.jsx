import Left from "./Left/Left";
import Right from "./Right/Right";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Change } from "../../../store/slice/ThemeSlicer";

const Home = () => {
  const [ref, InView] = useInView();
  const dispatch = useDispatch();
  const Theme = useSelector((state) => state.Theme);

  useEffect(() => {
    if (InView) {
      document.title = "Terry | Home";
    }
  }, [InView]);
  return (
    <div id="home" className="w-full px-5 sm:px-9 pb-10">
      <div
        className="flex relative flex-wrap lg:content-evenly pt-5 min-h-[90vh] sm:min-h-[100vh] lg:justify-center lg:items-center"
        ref={ref}
      >
        <button
          onClick={() => {
            dispatch(Change());
          }}
          className="absolute right-0 z-[1000] lg:hidden"
        >
          {Theme ? <BsSun /> : <BsMoon className="text-white" />}
        </button>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: InView ? 1 : 0, x: InView ? 0 : -300 }}
          className="w-full lg:w-[50%]"
          transition={{
            type: "spring",
            stiffness: 65,
            mass: 2,
          }}
        >
          <Left />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: InView ? 1 : 0, x: InView ? 0 : 300 }}
          transition={{
            type: "spring",
            stiffness: 65,
            mass: 2,
          }}
          className="w-full lg:w-[50%]"
        >
          <Right />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
