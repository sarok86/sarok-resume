"use client";
import { Stack } from "@mui/material";
import { SlSpeedometer } from "react-icons/sl";
import { Chart as ChartJS } from "chart.js";
import { Bar } from "react-chartjs-2";

function ResumePage() {
  return (
    <div className="w-full absolute  flex flex-col justify-center items-start text-start px-12 ">
      <h1 className="text-7xl mt-8 text-[gray] max-[630px]:text-5xl">Resume</h1>
      <div className=" my-2">
        <div className="flex my-4 items-center text-center">
          <span className="text-3xl text-[red]">10 years in design</span>
          <span className="text-3xl  text-[gray] m-2"> / </span>
          <span className="text-3xl text-[red]">6 years in coding</span>
          <span className="text-3xl  text-[gray] m-2"> / </span>
          <span className="text-3xl text-[red]">master`s degree</span>
        </div>
        <p className="text-2xl text-[gray]">
          Web Developer with 10 years of experience in designing and developing
          user interfaces, testing, debugging, and training staff within
          eCommerce technologies. Proven ability in optimizing web functionality
          that improve data retrieval and workflow efficiencies.
        </p>
      </div>
      <div className="w-full h-2 border-4 bg-[red] my-12"></div>

      <div className="w-full">
        <h1 className="w-full flex items-center text-center text-6xl mt-8 text-[gray]">
          <SlSpeedometer className="text-5xl text-[red] m-3" />
          Skills
        </h1>
        <div className="w-full text-[gray] px-12 mt-3">
          <div className="my-8">
            <div className="w-full flex justify-between text-2xl">
              <p>web development</p>
              <p>90%</p>
            </div>
            <div className="w-full h-2  bg-[gray] ">
              <div className="w-[90%] h-2  border-4 border-[red] bg-[red]"></div>
            </div>
          </div>
          <div className="my-8">
            <div className="w-full flex justify-between text-2xl">
              <p>html</p>
              <p>100%</p>
            </div>
            <div className="w-full h-2  bg-[gray] ">
              <div className="w-[100%] h-2  border-4 border-[red] bg-[red]"></div>
            </div>
          </div>
          <div className="my-8">
            <div className="w-full flex justify-between text-2xl">
              <p>css</p>
              <p>100%</p>
            </div>
            <div className="w-full h-2  bg-[gray] ">
              <div className="w-[100%] h-2  border-4 border-[red] bg-[red]"></div>
            </div>
          </div>
          <div className="my-8">
            <div className="w-full flex justify-between text-2xl">
              <p>js</p>
              <p>95%</p>
            </div>
            <div className="w-full h-2  bg-[gray] ">
              <div className="w-[95%] h-2  border-4 border-[red] bg-[red]"></div>
            </div>
          </div>
          <div className="my-8">
            <div className="w-full flex justify-between text-2xl">
              <p>react</p>
              <p>90%</p>
            </div>
            <div className="w-full h-2  bg-[gray] ">
              <div className="w-[90%] h-2  border-4 border-[red] bg-[red]"></div>
            </div>
          </div>
          <div className="my-8">
            <div className="w-full flex justify-between text-2xl">
              <p>next</p>
              <p>85%</p>
            </div>
            <div className="w-full h-2  bg-[gray] ">
              <div className="w-[85%] h-2  border-4 border-[red] bg-[red]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
