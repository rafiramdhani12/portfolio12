import foto from "../assets/anime.png";
import foto2 from "../assets/blog.png";
import foto3 from "../assets/movieList.png";
import foto4 from "../assets/3d.png";
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
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Navbar from "@/component/Navbar";

const Workk = () => {
  return (
    <>
      <Navbar />
      <div
        className="max-w-[1200px] mx-auto p-10 border-2 border-black text-white"
        id="Work">
        <div className="pb-8">
          <p className="text-4xl mb-3 font-bold primary-color">work</p>
          <p className="font-bold text-2xl">
            {" "}
            check out some of my recent work
          </p>
        </div>
        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center">
          <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
            <img src={foto} alt="" />

            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                AnimeList
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <AlertDialog>
                    <AlertDialogTrigger>Open</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Anime List</AlertDialogTitle>
                        <AlertDialogDescription>
                          <img src={foto} className="hover:scale-150" />
                          <p className="font-bold text-lg">
                            this is my another project i try fullstack beginner
                            next js creating anime list{" "}
                          </p>
                          <a
                            href=""
                            className="text-orange-400 underline font-bold text-lg hover:text-red-600">
                            and this my link to visit my project
                          </a>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </button>
              </div>
            </div>
          </div>
          <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
            <img src={foto2} alt="" className="object-cover w-52" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                Blog
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <AlertDialog>
                    <AlertDialogTrigger>Open</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Blog web app</AlertDialogTitle>
                        <AlertDialogDescription>
                          <img src={foto2} alt="" />
                          <p className="font-bold text-lg">
                            i build this web app blog with cms sanity{" "}
                          </p>
                          <a
                            href=""
                            className="text-orange-400 underline font-bold text-lg hover:text-red-600">
                            and this my link to visit my project
                          </a>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </button>
              </div>
            </div>
          </div>
          <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
            <img src={foto3} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                MovieList
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <AlertDialog>
                    <AlertDialogTrigger>Open</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Movie List</AlertDialogTitle>
                        <AlertDialogDescription>
                          <img src={foto3} alt="" />
                          <p className="text-lg font-bold">
                            this is my another project build a movie list with
                            next js supabase Next auth and shadcn ui
                          </p>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </button>
              </div>
            </div>
          </div>
          <div className="transorm transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
            <img src={foto4} alt="" />
            <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-2xl font-bold text-white tracking-wider">
                3d portfolio
              </span>
              <div className="pt-8 text-center">
                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                  <AlertDialog>
                    <AlertDialogTrigger>Open</AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Movie List</AlertDialogTitle>
                        <AlertDialogDescription>
                          <img src={foto4} alt="" />
                          <p className="text-lg font-bold">
                            this is my another portfolio i try and learn a
                            underated library from js this is a three js for
                            your info if my 3d portfolio didnt render this
                            object please refresh i didnt know what happen in
                            this tutor video i watch its not happen in their
                            browser
                          </p>
                          <a
                            target="_blank"
                            href="https://3d-portfolio-rafis-projects-3c351dc8.vercel.app/"
                            className="text-orange-500 hover:text-red-500">
                            and this my link to visit my project
                          </a>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 max-w-[900px] mx-auto border-2 border-black p-10">
        <h1 className="primary-color font-bold text-3xl mb-5">
          My another projects
        </h1>
        <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={foto} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
              <img src={foto3} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={foto3} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={foto3} />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <img src={foto} />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default Workk;
