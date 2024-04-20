import {TypeAnimation} from "react-type-animation";
import foto from "../assets/muka.jpg";
import {Link} from "react-router-dom";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-[1200px]  mx-auto py-8  p-5 mb-10 text-white">
      <div className="col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px] sm:w-[230px] sm:mr-10">
        <img src={foto} alt="" width={300} className="md:ml-10 rounded-3xl" />
      </div>
      <div className="col-span-2 px-5 my-auto">
        <h1 className=" text-4xl sm:text-5xl lg:text-4xl font-extrabold md:text-3xl">
          <span className="primary-color">I`m a</span> <br />
          <TypeAnimation
            sequence={[
              "junior frontend dev",
              1000,
              "fresh graduate highschool",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className=" sm:text-lg my-6 lg:text-xl">
          my name is Rafi Ramdhani and im a junior web dev join in web
          development since 6 mounth ago
        </p>
        <div className="flex justify-center items-center text-center">
          <a
            href="Hero.jsx"
            download={"Hero.jsx"}
            className="px-6 py-3 w-full rounded-xl  bg-gradient-to-br from-orange-500 to-pink-500 ">
            Download CV
          </a>
          <Link
            to={"/contact"}
            className="px-6 py-3 w-full rounded-xl  border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 hover:border-none mx-10">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
