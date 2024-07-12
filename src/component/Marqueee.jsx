import Marquee from "react-fast-marquee";

import {Language, Technology} from "@/DataSet";

const Marqueee = () => {
  return (
    <>
      <div className="w-full my-2 flex flex-col justify-center items-center bg-[#181818] text-neutral-200">
        <div className="w-[100%] md:w-[50%] flex flex-col mb-5 gap-3">
          <div className="flex space-y-2 flex-col text-center mb-14">
            <span className="text-5xl font-bold mt-5 ">skill that i have</span>
            <span className="text-2xl">
              These are the technologies i ve worked
            </span>
          </div>
          <Marquee autoFill pauseOnClick>
            {Language.map((item) => (
              <div
                key={item.id}
                className={`bg-[#202020] m-1 rounded-xl flex gap-3 space-x-5 p-4 font-bold text-2xl cursor-pointer text-${item.color}-400`}>
                <img src={item.logo} alt="" width={item.width} />
                {item.lang}
              </div>
            ))}
          </Marquee>
          <Marquee autoFill pauseOnClick direction="right">
            {Technology.map((item) => (
              <div
                key={item.id}
                className={`bg-[#202020] m-1 rounded-xl flex gap-3 space-x-5 p-4 font-bold text-2xl cursor-pointer text-${item.color}-400`}>
                <img src={item.logo} alt="" width={item.width} />
                {item.tech}
              </div>
            ))}
            {/* <div className="bg-[#202020] m-1 rounded-xl flex gap-3 space-x-5 p-4 font-bold text-2xl cursor-pointer text-sky-400">
              <img src="./atom.png" alt="" width={30} height={30} />
              React JS
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex gap-3 space-x-5 p-4 font-bold text-2xl cursor-pointer text-green-400">
              <img src="./programing.png" alt="" width={30} height={30} />
              NODE JS
            </div>
            <div className="bg-[#202020] m-1 rounded-xl flex gap-3 space-x-5 p-4 font-bold text-2xl cursor-pointer text-white">
              <div className="bg-white rounded-full">
                <img src="./Next.js.png" alt="" width={40} height={40} />
              </div>
              NEXT JS
            </div> */}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Marqueee;
