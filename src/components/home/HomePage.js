import { Button } from "@mantine/core";
import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";

function HomePage() {
  return (
    <div className="w-full absolute  flex flex-col justify-start items-start text-start  max-[630px]:pt-8 ">
      <div className="w-full justify-start items-start text-start p-4 text-[gray] max-[630px]:text-3xl">
        <h1 className="text-7xl my-4 max-[630px]:text-6xl">about me</h1>
        <div className="flex my-4 items-center text-center ">
          <span className="text-3xl max-[630px]:text-2xl text-[red]">
            17 years old
          </span>
          <span className="text-3xl max-[630px]:text-2xl  text-[gray] m-2">
            {" "}
            /{" "}
          </span>
          <span className="text-3xl max-[630px]:text-2xl text-[red]">
            Sanandaj
          </span>
        </div>
        <p className="text-2xl max-[630px]:text-justify">
          Prolific, full stack web developer with a passion for metrics and
          beating former Prototyped 25 new product features per year for Flexor,
          Inc. Decreased rework by 22% and costs by 15%. Consistently receive
          high user experience scores for all web development projects,
          including a 55% increase for Flexor, Inc. Passionate about building
          world class web applications. One of my sites received a 2020 Webby
          for Best Navigation and Structure.
        </p>
      </div>
      <div className="w-full h-2 border-4 bg-[red] my-12"></div>

      <div className="justify-start items-start text-start p-4  max-[630px]:text-3xl">
        <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-6xl">
          my services
        </h1>
        <div className="grid grid-cols-2 max-[630px]:grid-cols-1 max-[630px]:text-justify">
          <div className="m-4">
            <RiComputerLine className="text-3xl  text-[red] m-2" />
            <span className="text-3xl  text-[red] m-2">development</span>
            <p className="text-2xl text-[gray]">
              Building a custom tailored solution based on your technical
              specification.
            </p>
          </div>
          <div className="m-4">
            <IoRocketOutline className="text-3xl text-[red] m-2" />
            <span className="text-3xl text-[red] m-2">SEO optimization</span>
            <p className="text-2xl text-[gray]">
              Audit your website, perform technical improvements and write meta
              tags
            </p>
          </div>
          <div className="m-4">
            <GoDatabase className="text-3xl text-[red] m-2" />
            <span className="text-3xl text-[red] m-2">data base</span>
            <p className="text-2xl text-[gray]">
              SSL certificate installation and configuration, redirection
              configuration on your website
            </p>
          </div>
          <div className="m-4">
            <MdOutlineSecurity className="text-3xl text-[red] m-2" />
            <span className="text-3xl text-[red] m-2">data security</span>
            <p className="text-2xl text-[gray]">
              Strategy with leading data protection technology to safeguard your
              critical data.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-2 border-4 bg-[red] my-12"></div>

      <div className="w-full justify-start items-start text-start p-4 ">
        <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-5xl">
          principal facts
        </h1>
        <div className="w-full grid grid-cols-4 justify-center items-center text-center max-[630px]:grid-cols-2">
          <div>
            <span className="text-3xl text-[red] m-2">10</span>
            <p className="text-xl text-[gray] m-2 ">successful projects</p>
          </div>
          <div>
            <span className="text-3xl text-[red] m-2">10</span>
            <p className="text-xl text-[gray] m-2 "> happy clients</p>
          </div>
          <div>
            <span className="text-3xl text-[red] m-2">10</span>
            <p className="text-xl text-[gray] m-2 ">awards won</p>
          </div>
          <div>
            <span className="text-3xl text-[red] m-2">10</span>
            <p className="text-xl text-[gray] m-2 ">keyboards broken</p>
          </div>
        </div>
      </div>
      <div className="w-full border-2 bg-white my-12"></div>
    </div>
  );
}

export default HomePage;
