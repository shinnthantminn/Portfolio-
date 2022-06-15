import { Routes, Route, useLocation } from "react-router-dom";
import { Main, Intro } from "./components";
import { AnimatePresence } from "framer-motion";
import Error404 from "./components/404/Error404";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation(); //For page transition motion
  const data = useSelector((state) => state.waypoint);
  return (
    <div className={""}>
      <AnimatePresence exitBeforeEnter={true}>
        {/*animatePresence components ,location and key add For page transition motion*/}
        <Routes location={location} key={location.pathname}>
          <Route path={"/"} element={<Intro />} />
          <Route path={"/home"} element={<Main />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
