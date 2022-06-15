import { useEffect } from "react";
import { Nav, Home } from "./";
import { useNavigate } from "react-router-dom";
import One from "../One";
import Two from "../Two";

const Main = () => {
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Terry | Home";
  }, []);

  return (
    <div className="w-full">
      <Nav />
      <Home />
      <One />
      <Two />
    </div>
  );
};

export default Main;
