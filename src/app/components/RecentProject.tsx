import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

export default function RecentProject() {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small section of <span className="text-purple">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-10 gap-y-4 mt-5">
        {projects
          .slice(0, 4)
          .map(({ id, title, des, img, iconLists, link }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center sm:w-[48%] w-[90%] sm:h-[41rem] h-[32rem]"
            >
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center w-[80vw] md:w-[60vw] lg:w-[500px] sm:h-[40vh] h-[30vh] overflow-hidden mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0 rounded-lg"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3 w-full">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:h-10 lg:w-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
      </div>
    </div>
  );
}