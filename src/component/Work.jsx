/* eslint-disable react/no-unescaped-entities */
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
import {AnProject, Project} from "@/DataSet";
import AnWork from "./AnWork";
import {AlignJustify} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useTranslation} from "react-i18next";

const Work = () => {
  const {t} = useTranslation();
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-10 border-2 border-black text-white">
        <div className=" flex justify-between">
          <p className="text-4xl mb-3 font-bold primary-color">work</p>
          <AlertDialog>
            <AlertDialogTrigger>
              <AlignJustify />
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>More</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className="mb-4 leading-relaxed">{t("more")}</div>
                  <strong>and this link to my another project</strong>
                  <div className="mt-5">
                    <Button>
                      <Link to={"/undeploy"}>see my another project</Link>
                    </Button>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <p className="font-bold text-2xl pb-8">
          {" "}
          check out some of my recent work
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center ">
          {Project.map((project) => {
            return (
              <>
                <div className="transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center  h-[200px] bg-cover relative">
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
                              <AlertDialogTitle>
                                {project.title}
                              </AlertDialogTitle>
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
                                  to={project.link}
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
        <AnWork AnProject={AnProject} />
      </div>
    </>
  );
};

export default Work;
