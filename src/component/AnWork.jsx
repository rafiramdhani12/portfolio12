/* eslint-disable react/prop-types */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {Link} from "react-router-dom";
const AnWork = (props) => {
  const {AnProject} = props;
  return (
    <>
      <div className="mt-8 max-w-[900px] mx-auto border-2 border-black p-10">
        <h1 className="primary-color font-bold text-3xl mb-10">
          My another projects
        </h1>
        <Carousel className="w-full">
          <CarouselContent>
            {AnProject.map((project) => {
              return (
                <>
                  <CarouselItem key={project.id}>
                    <h1 className="text-white mb-2 font-bold text-3xl">
                      {project.title}
                    </h1>
                    <Link to={project.link}>
                      <img
                        src={project.img}
                        alt=""
                        className=" h-full  object-fill"
                      />
                    </Link>
                  </CarouselItem>
                </>
              );
            })}
          </CarouselContent>
          <div className="text-black">
            <CarouselNext />
            <CarouselPrevious />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default AnWork;
