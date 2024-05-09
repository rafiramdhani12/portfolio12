import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Link} from "react-router-dom";
import {Project} from "@/DataSet";

const Work = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-10 border-2 border-black text-white">
        <div className="pb-8">
          <p className="text-4xl mb-3 font-bold primary-color">work</p>
          <p className="font-bold text-2xl">
            {" "}
            check out some of my recent work
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center ">
          {Project.map((project) => {
            return (
              <>
                <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
                  <img src={project.img} alt="" />
                  <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
                    <span className="text-2xl font-bold text-white tracking-wider">
                      {project.title}
                    </span>
                    <div className="pt-8 text-center">
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        <AlertDialog>
                          <AlertDialogTrigger>Open</AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Anime List</AlertDialogTitle>
                              <AlertDialogDescription>
                                <img
                                  src={project.img}
                                  className="hover:scale-150"
                                />
                                <p className="font-bold text-lg mt-2">
                                  {project.desc}
                                </p>
                                <br />
                                <Link
                                  href={project.link}
                                  className="text-orange-400 underline font-bold text-xl hover:text-red-600">
                                  and this my link to visit my project
                                </Link>
                              </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogAction>Back</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="mt-8 max-w-[900px] mx-auto border-2 border-black p-10">
        <h1 className="primary-color font-bold text-3xl mb-5">
          My another projects
        </h1>
        <Carousel>
          <CarouselContent>
            {Project.map((carosel) => {
              return (
                <>
                  <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <img src={carosel.img} />
                  </CarouselItem>
                </>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Work;
