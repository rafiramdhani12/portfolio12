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
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
                        <div className="flex justify-center text-center my-10 ">
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Framework" />
                            </SelectTrigger>
                            <SelectContent>
                              <p>Next Js</p>
                              <p>Laravel</p>
                              <p>Vite</p>
                            </SelectContent>
                          </Select>
                        </div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>Continue</AlertDialogAction>
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
