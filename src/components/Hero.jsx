/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { styles } from "../style";

const Hero = () => {
  return (
    <section className="relative flex-row w-full h-screen mx-auto">
      <section className="sm:block hidden absolute flex-1 w-8/12 h-4/5 top-[70px] left-[40px]">
        <ComputersCanvas />
      </section>
        <div
          className={
            "sm:px-16 px-6 relative inset-0 left-[350px] top-[150px] max-w-fit mx-auto flex flex-row items-start gap-5"
          }
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-60 h-40 violet-gradient" />
          </div>
          <div className="top-[30px] relative">
            <h1
              className={
                "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]"
              }
            >
              Hi, I 'm <span className={"text-yellow-400"}>Eshant !!</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop android apps,<br className="sm:block hidden"></br>
              web apps and data analysis
            </p>
          </div>
        </div>
    </section>
  );
};

export default Hero;
