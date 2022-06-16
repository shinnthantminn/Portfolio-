import { Home, Nav } from "./";
import One from "../One";
import Two from "../Two";
import { useSelector } from "react-redux";

const Main = () => {
  const Theme = useSelector((state) => state.Theme);

  return (
    <div
      className={
        Theme ? "w-full overflow-hidden " : "w-full overflow-hidden dark"
      }
    >
      <div className="w-full duration-300 dark:bg-black">
        <Nav />
        <Home />
        <One />
        <Two />
      </div>
    </div>
  );
};

export default Main;
