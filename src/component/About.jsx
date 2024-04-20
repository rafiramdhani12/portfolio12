import {Button} from "@/components/ui/button";
import foto from "../assets/muka.jpg";
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

const About = () => {
  return (
    <div className=" max-w-[1200px] mx-auto my-12">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg text-white">
              My name is Rafi Ramdhani im a junior web developer I just became a
              web dev 6 months ago im freshgraduate from MAN 2 Kota Bekasi im
              trying and learn how to be a good programmer in a future
            </p>
            <div className="mt-5 ">
              <Button>
                <AlertDialog>
                  <AlertDialogTrigger>More</AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        This is a few framework what i learn it now
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        <div className="flex my-10 flex-wrap gap-4">
                          <div className="bg-black text-white p-5 flex gap-4">
                            <img src="/nextjs.png" alt="" width={100} />
                            <p className="text-xl my-auto">Next js</p>
                          </div>
                          <div className="bg-black text-white p-5 flex gap-4">
                            <img src="/laravel.png" alt="" width={100} />
                            <p className="text-xl my-auto">Laravel</p>
                          </div>
                          <div className="bg-black text-white p-5 flex gap-4">
                            <img src="/vite.png" alt="" width={90} />
                            <p className="text-xl my-auto">vite</p>
                          </div>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>Back</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </Button>
            </div>
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
