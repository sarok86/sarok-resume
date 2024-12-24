"use client";

import Image from "next/image";
import React, { Children } from "react";
import backImg from "@/app/image/man.jpg";
import { IoPersonOutline } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { LuPenSquare } from "react-icons/lu";
import { PiEyeglassesLight } from "react-icons/pi";
import { TfiBag } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { BsCloudDownload } from "react-icons/bs";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import Link from "next/link";
import { Tabs } from "@mantine/core";
import ContactPage from "../contact/ContactPage";
import HomePage from "../home/HomePage";
import ProjectsPage from "../projects/ProjectsPage";
import ResumePage from "../resume/ResumePage";
import { usePathname } from "next/navigation";

function Layout({ children }) {
  const path = usePathname();

  return (
    <div className="w-full  h-full  flex justify-center items-center text-center   bg-[black] rounded-lg">
      <div className="w-2/6 h-full flex justify-center items-center text-center  text-[gray] text-xl bg-[black]">
        <div className="w-1/6 h-full flex flex-col justify-around items-center text-5xl text-center ">
          <div className="my-4 text-[gray] hover:text-[red]">
            <h1 className="text-[red]">S</h1>
          </div>
          <div className="my-4 text-3xl">
            {path === "/" ? (
              <Link href="/">
                <IoPersonOutline className="mb-4 hover:text-[red] text-[red]" />
              </Link>
            ) : (
              <Link href="/">
                <IoPersonOutline className="mb-4 hover:text-[red] " />
              </Link>
            )}

            {path === "/contact" ? (
              <Link href="/contact">
                <FiMessageCircle className="mb-4 hover:text-[red] text-[red]" />
              </Link>
            ) : (
              <Link href="/contact">
                <FiMessageCircle className="mb-4 hover:text-[red]" />
              </Link>
            )}

            {path === "/projects" ? (
              <Link href="/projects">
                <PiEyeglassesLight className="mb-4 hover:text-[red] text-[red]" />
              </Link>
            ) : (
              <Link href="/projects">
                <PiEyeglassesLight className="mb-4 hover:text-[red]" />
              </Link>
            )}

            {path === "/resume" ? (
              <Link href="/resume">
                <TfiBag className="mb-4 hover:text-[red] text-[red]" />
              </Link>
            ) : (
              <Link href="/resume">
                <TfiBag className="mb-4 hover:text-[red]" />
              </Link>
            )}
          </div>
          <BsCloudDownload className="my-4 text-[red] " />
        </div>
        <div className="w-5/6 flex flex-col justify-end items-center text-[bold] ">
          <Image src={backImg} className="w-full h-[750px] static " />
          <div className=" absolute flex flex-col justify-center items-center text-center text-[gray]">
            <h1 className="text-6xl tracking-widest">Sarok</h1>
            <p className="text-3xl text-[red]">Developer</p>
            <div className="flex">
              <Link href="#">
                <IoLogoInstagram className="mb-4 hover:text-red-700 m-2  hover:text-[red]" />
              </Link>
              <Link href="#">
                <PiTelegramLogo className="mb-4 hover:text-red-700 m-2  hover:text-[red]" />
              </Link>
              <Link href="#">
                <FaGithub className="mb-4 hover:text-red-700  m-2  hover:text-[red]" />
              </Link>
              <Link href="#">
                <FaWhatsapp className="mb-4 hover:text-red-700 m-2 hover:text-[red]" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-4/6 h-full relative  overflow-y-auto   flex justify-center items-center text-center bg-[black] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[red]
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-50"
      >
        {children}
      </div>
    </div>
  );
}

export default Layout;
