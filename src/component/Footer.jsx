import {Github, Instagram, Linkedin} from "lucide-react";

const Footer = () => {
  return (
    <>
      <div className=" max-w-[1200px] sm:h-[150px] p-12 flex justify-between mx-auto border-2 border-black text-white">
        <span className="primary-color text-2xl font-bold">Rafi Ramdhani</span>
        <p className="">rafiramdhani75@gmail.com</p>
      </div>
      <div className=" max-w-[200px] sm:h-[150px] p-12 flex justify-center mx-auto border-2 border-black text-white gap-10 ">
        <a
          href="https://www.instagram.com/vrsdsffcnt?igsh=Y2jvbmhqd3Nod2Nr"
          target="_blank"
          className="hover:text-red-600 text-end">
          <Instagram size={48} />
        </a>
        <a
          href="https://www.linkedin.com/in/rafi-ramdhani-941b48303/"
          target="_blank"
          className="hover:text-blue-600">
          <Linkedin size={48} />
        </a>
        <a
          href="https://github.com/rafiramdhani12"
          target="_blank"
          className="hover:text-yellow-600">
          <Github size={48} />
        </a>
      </div>
    </>
  );
};

export default Footer;
