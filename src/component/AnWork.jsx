/* eslint-disable react/prop-types */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
const AnWork = (props) => {
  const {AnProject} = props;
  return (
    <>
      <div className="mt-8 max-w-[900px] mx-auto border-2 border-black p-10">
        <h1 className="primary-color font-bold text-3xl mb-10">
          My another projects
        </h1>
        <Carousel orientation="vertical">
          <CarouselContent className="-mt-1 h-[400px] overflow-auto  scrollbar-hide">
            {AnProject.map((project) => {
              return (
                <CarouselItem key={project.id}>
                  <h1 className="text-white mb-2 font-bold text-3xl">
                    {project.title}
                  </h1>
                  <img src={project.img} alt="" />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default AnWork;
