import js from "../assets/js.png";
import React_js from "../assets/react.png";
import Node_js from "../assets/node.png";
import PHP from "../assets/PHP.png";
const Skills = () => {
  return (
    <div
      className="border border-gray-600  md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center mt-10
    text-white">
      <h2 className=" text-2xl md:text-4xl font-bold m-4">
        my <br /> skills <br />
      </h2>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={js} alt="" />
        <p className="mt-2">Javascript</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={React_js} alt="" width={100} height={100} />
        <p className="mt-2">React</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={Node_js} alt="" width={100} height={100} />
        <p className="mt-2">Node js</p>
      </div>
      <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
        <img src={PHP} alt="" width={100} height={100} />
        <p className="mt-2">PHP</p>
      </div>
    </div>
  );
};

export default Skills;
