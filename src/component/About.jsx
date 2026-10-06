
import foto from "../assets/muka.jpg";


const About = () => {


  return (
    <div className=" max-w-[1200px] mx-auto my-12" id="About">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg text-white">My name is Rafi Ramdhani, im 5th semester student in universitas bina sarana informatika I am very interested in technology, enjoy learning and developing, and I am eager to explore new things</p>
          </div>
        </div>
        <img
          src={foto}
          alt=""
          className="mx-auto rounded-3xl py-8 md:py-0 "
          width={400}
        />
      </div>
    </div>
  );
};

export default About;
