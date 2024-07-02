import {UnDeployWork} from "@/DataSet";
import Navbar from "@/component/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Link} from "react-router-dom";

const Undeploy = () => {
  return (
    <>
      <Navbar />
      <div className="text-white md:container">
        {UnDeployWork.map((work) => {
          return (
            <>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>{work.title}</AccordionTrigger>
                  <AccordionContent>
                    <Link
                      to={work.link}
                      className="font-bold hover:text-yellow-400">
                      <strong>{work.link}</strong>
                    </Link>
                    <div>
                      the demo
                      {work.demo}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Undeploy;
