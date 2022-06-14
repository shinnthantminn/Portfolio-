import Left from "./Left/Left";
import Right from "./Right/Right";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="w-full px-5 sm:px-9">
      <div className="flex flex-wrap content-center min-h-[100vh] justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[50%]"
        >
          <Left />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-[50%]"
        >
          <Right />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
