import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-router-dom";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <div className="  text-gray-400 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold primary-color ml-4">
          <Link to={"/"}>Rafi Ramdhani</Link>
        </h1>
        <ul className="hidden md:flex">
          <li className="p-5">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="p-5">
            <Link to={"/work"}>Work</Link>
          </li>
          <li className="p-5">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="p-5">
            <Link
              to={"https://3d-portfolio-rafis-projects-3c351dc8.vercel.app/"}>
              3D
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block md:hidden mr-6">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }>
          <h1 className="text-3xl primary-color m-4">
            <Link to={"/"}>Rafi Ramdhani</Link>{" "}
          </h1>
          <ul className="p-8 text-2xl">
            <li className="p-2">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="p-2">
              <Link to={"/work"}>Work</Link>
            </li>
            <li className="p-2">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
