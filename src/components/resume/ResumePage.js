"use client";
import { Stack } from "@mui/material";
import { BsSpeedometer2 } from "react-icons/bs";
import { Gauge } from "@mui/x-charts/Gauge";

function ResumePage() {
  return (
    <div className="w-full absolute  flex flex-col justify-center items-start text-start ">
      <h1>Resume</h1>
      <div className="flex my-4">
        <span className="text-3xl text-[blue]">10 years in design</span>
        <span className="text-3xl  text-white m-2"> / </span>
        <span className="text-3xl text-[blue]">6 years in coding</span>
        <span className="text-3xl  text-white m-2"> / </span>
        <span className="text-3xl text-[blue]">master`s degree</span>
        <p className="text-2xl text-[bold]">
          Web Developer with 10 years of experience in designing and developing
          user interfaces, testing, debugging, and training staff within
          eCommerce technologies. Proven ability in optimizing web functionality
          that improve data retrieval and workflow efficiencies.
        </p>
      </div>
      <div className="w-full border-2 bg-white my-12"></div>
      <div>
        <h1>
          <BsSpeedometer2 />
          Skills
        </h1>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 3 }}
        >
          <Gauge width={100} height={100} value={50} />
          <Gauge
            width={100}
            height={100}
            value={50}
            valueMin={10}
            valueMax={60}
          />
          <Gauge
            width={100}
            height={100}
            value={50}
            valueMin={10}
            valueMax={60}
          />
          <Gauge
            width={100}
            height={100}
            value={50}
            valueMin={10}
            valueMax={60}
          />
        </Stack>
      </div>
    </div>
  );
}

export default ResumePage;
