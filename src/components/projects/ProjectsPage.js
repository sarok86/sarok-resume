import Image from "next/image";
import Link from "next/link";
import React from "react";
import project1 from "@/app/image/project1.jpg";
import project2 from "@/app/image/project2.jpg";
import project3 from "@/app/image/project3.jpg";

export default function ProjectsPage() {
  return (
    <div className="w-full absolute  flex flex-col justify-center items-start text-start px-12 overflow-hidden ">
      <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-5xl">
        my works
      </h1>

      <div className="w-full  grid grid-flow-row-dense grid-cols-3 grid-rows-3 place-content-center place-items-center ">
        <div className="w-full col-span-3 ">
          <Link href="https://demo.inic.ac/">
            <Image
              src={project1}
              alt="Picture of the author"
              className="w-full h-90 p-2 max-[630px]:h-40"
            />
          </Link>
        </div>
        <div className="w-full col-span-3">
          <Link href="https://lmh.clinic/">
            <Image
              src={project2}
              alt="Picture of the author"
              className="w-full h-90 p-2 max-[630px]:h-40"
            />
          </Link>
        </div>
        <div className="w-full col-span-3 ">
          <Link href="https://test.xcuts.co.uk/">
            <Image
              src={project3}
              alt="Picture of the author"
              className="w-full h-90 p-2 max-[630px]:h-40"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
