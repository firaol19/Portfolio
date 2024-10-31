'use client'
import Image from "next/image";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientAnimation";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};


export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImage,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImage?: string;
}) => {

    const [copied, setCopied] = useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText('firaolbekele00@gmail.com');
        setCopied(true);
    }




  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200  shadow-input dark:shadow-none border border-transparent justify-between flex flex-col space-y-4 border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 1%, rgba(9,120,121,1) 51%, rgba(84,165,181,1) 94%)",
      }}
    >
      <div className={`${id === 6} && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={30}
              height={30}
              className={cn(imgClassName, "object-cover,object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImage && (
            <Image
              src={spareImage}
              alt={spareImage}
              width={30}
              height={30}
              className={"object-cover,object-center w-full h-full"}
            />
          )}
        </div>
        
        {id === 6 && (
            <BackgroundGradientAnimation>
              
            </BackgroundGradientAnimation>
          )}

        

       
        <div
        
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
           
           <div className="font-sans font-bold text-lg mb-2 mt-2 lg:text-3xl max-w-96 z-10 mx-auto">
            {title}
          </div>
          <div className="font-sans font-extralight text-[#c1c2d3]  text-sm md:text-xs lg:text-base z-10">
            {description}
          </div>

          

          

          {id === 2 && <GlobeDemo/>}

        {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -bottom-3 -right-3 lg:-right-1">
                <div className="flex flex-col gap-3 lg:gap-3">
                    {['HTML', 'CSS', 'JavaScript', ].map((item) => (
                        <span key={item} className="py-2  lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                            {item}
                        </span>
                    ))}
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                </div>
                <div className="flex flex-col gap-3 lg:gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132e]"></span>
                    {['PHP', 'REACT', 'Next.JS', ].map((item) => (
                        <span key={item} className="py-2  lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132e]">
                            {item}
                        </span>
                    ))}
                    
                </div>
            </div>
        )}
        {id === 6 && (
            <div className="mt-5 relative ">
                <div className={`absolute -bottom-5 right-0`}>
                    <Lottie options={{
                        loop: copied, 
                        autoplay: copied,
                         animationData, 
                         rendererSettings:{
                        preserveAspectRatio: 'xMidYMid slice',
                    }}} />
                </div>
                <MagicButton
                title={copied ? "Email Copied" : "Copy My Email"}
                icon={<IoCopyOutline/>}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleClick}
                />
            </div>
        )}
        </div>
        
      </div>
    </div>
  );
};
