
import {Project} from "@/DataSet";

const Work = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto p-10 border-2 border-black text-white" id="Work">
        <div className=" flex justify-between">
          <p className="text-4xl mb-3 font-bold primary-color">work</p>
        </div>
        <p className="font-bold text-2xl pb-8">
          {" "}
          check out some of my recent work
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 items-center ">
          {Project.map((project) => (
            <>
            <div>
              {project.length === 0 && (
                <p className="text-center text-white">No projects available.</p>
              )}
              {console.log(project)}
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
