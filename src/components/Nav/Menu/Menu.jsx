import { BsMoon, BsSun } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Change } from "../../../store/slice/ThemeSlicer";

const Menu = ({ menu }) => {
  const dispatch = useDispatch();
  const Theme = useSelector((state) => state.Theme);
  return (
    <div className="w-full lg:w-fit lg:py-0 hidden lg:flex duration-300 dark:text-white text-xl space-x-10">
      {menu.map((i, inx) => (
        <ul key={inx}>
          <li>
            <a className="menu" href={`#${i}`}>
              {i}
            </a>
          </li>
        </ul>
      ))}
      <span onClick={() => dispatch(Change())} className="pt-1 cursor-pointer">
        {Theme ? <BsSun /> : <BsMoon />}
      </span>
    </div>
  );
};

export default Menu;
