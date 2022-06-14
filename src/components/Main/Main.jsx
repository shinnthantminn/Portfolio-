import { useEffect } from "react";
import { Nav, Home } from "./";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const nav = useNavigate();

  useEffect(() => {
    document.title = "Terry | Home";
  }, []);

  return (
    <div className="w-full">
      <Nav />
      <Home />
    </div>
  );
};

export default Main;
