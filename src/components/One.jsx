import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const One = () => {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView) {
      document.title = "Terry | One";
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className="w-full min-h-[100vh] bg-red-600 flex justify-center items-center"
    >
      <p>One</p>
    </div>
  );
};

export default One;
