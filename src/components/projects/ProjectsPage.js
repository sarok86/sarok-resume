import Image from "next/image";
import Link from "next/link";
import React from "react";
// import project from "@/app/image/project.jpg";

export default function ProjectsPage() {
  return (
    <div className="w-full absolute  flex flex-col justify-center items-start text-start ">
      <h1 className="text-7xl my-4 text-[gray]">Send Message</h1>

      <div className="w-full grid grid-cols-2 gap-2">
        <Link href="/">
          <Image
            // src={project}
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </Link>
        <Link href="/">
          <Image
            // src={project}
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </Link>
        <Link href="/">
          <Image
            // src={project}
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </Link>
      </div>
    </div>
  );
}
