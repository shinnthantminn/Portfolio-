import animation from "../../access/Animation/404/99436-404-page.json";
import { useLottie } from "lottie-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Error404 = () => {
  useEffect(() => {
    document.title = "Terry | 404Error";
  }, []);
  const option = {
    animationData: animation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(option);

  return (
    <motion.div
      initial={{
        y: -100,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
        },
      }}
      exit={{
        opacity: 0,
        y: -100,
      }}
      className="flex flex-col text-center w-full"
    >
      <div className="w-[300px] mx-auto">{View}</div>
      <h1 className="text-xl text-[#323f52] font-bold">
        Oops! Nothing was found
      </h1>
      <p className="text-lg text-gray-500 mt-3">
        The page you are looking for could not be found.
      </p>
      <Link to={"/home"} className="text-blue-600 mt-4" replace={true}>
        ← Go to Homepage
      </Link>
    </motion.div>
  );
};

export default Error404;
