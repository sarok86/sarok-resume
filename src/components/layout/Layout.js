"use client";

import Image from "next/image";
import React, { Children, useEffect, useState } from "react";
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
import ContactPage from "../contact/ContactPage";
import HomePage from "../home/HomePage";
import ProjectsPage from "../projects/ProjectsPage";
import ResumePage from "../resume/ResumePage";
import { usePathname } from "next/navigation";

import { CiMenuBurger } from "react-icons/ci";
import { GrLanguage } from "react-icons/gr";
import menuBar from "./menuBar";
import { Box, Button, Modal, Typography } from "@mui/material";
import { IoMdClose } from "react-icons/io";

import "@/i18n";
import { useTranslation } from "react-i18next";
import { Menu } from "@mantine/core";

function Layout({ children, setLanguage }) {
  const { t, i18n } = useTranslation();

  const path = usePathname();
  const width = window.innerWidth;
  const [value, setValue] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (width > 768) {
      setValue(true);
    }
  }, [width]);

  const langHandler = (e) => {
    // e.preventDefault();
    // console.log(e);
    const language = e.target.textContent;
    if (language === "English") {
      // window.navigator.language === "en";
      i18n.changeLanguage("en");
      setLanguage("en");
    } else if (language === "فارسی") {
      i18n.changeLanguage("fa");
      setLanguage("fa");
    } else {
      i18n.changeLanguage("ku");
      setLanguage("ku");
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex justify-center items-center text-center "
        closeAfterTransition
        disablePortal
        disableEnforceFocus
        disableAutoFocus
      >
        <Box
          className="w-3/4 h-3/6 flex flex-col justify-center items-center text-center bg-[black]
          max-[1020px]:text-3xl max-[760px]:text-xl text-[gray] relative border-4 border-[gray] rounded-2xl"
        >
          <button
            onClick={handleClose}
            className="absolute top-0 right-0 text-3xl flex justify-center items-center text-center mb-4 hover:text-[red]  mx-2"
          >
            <IoMdClose />
          </button>

          <Link
            href="/"
            className=" flex justify-center items-center text-center mb-4 hover:text-[red]  mx-2"
          >
            <IoPersonOutline className="mx-2" />
            <p>Home</p>
          </Link>
          <Link
            href="/contact"
            className=" flex justify-center items-center text-center mb-4 hover:text-[red]  mx-2"
          >
            <FiMessageCircle className="mx-2" />
            <p>Contact</p>
          </Link>
          <Link
            href="/projects"
            className=" flex justify-center items-center text-center mb-4 hover:text-[red]  mx-2"
          >
            <PiEyeglassesLight className="mx-2" />
            <p>Projects</p>
          </Link>
          <Link
            href="/resume"
            className=" flex justify-center items-center text-center mb-4 hover:text-[red]  mx-2 "
          >
            <TfiBag className="mx-2" />
            <p>resume</p>
          </Link>
        </Box>
      </Modal>
      <div
        className="w-full z-0  h-full  flex justify-center items-center text-center   bg-[black] rounded-lg max-[768px]:flex-col lg:flex-col
    max-[1020px]:w-screen max-[1020px]:h-screen  max-[630px]:bg-[black] max-[630px]:text-2xl"
      >
        <div
          className="w-1/6 lg:w-full    max-[1020px]:h-auto lg:px-12 
         max-[1020px]:relative  flex justify-between max-[630px]:text-2xl text-4xl
         items-center text-center  text-[gray] 
         bg-[black] max-[768px]:w-full  max-[768px]:relative max-[768px]:px-8
         "
        >
          {/* <div
            className="w-1/6 h-full flex  justify-around items-center text-5xl  text-center max-[768px]:w-full  max-[1020px]:items-center max-[1020px]:text-center  max-[1020px]:flex  max-[1020px]:justify-between max-[1020px]:absolute max-[1020px]:top-0 max-[1020px]:px-8 
        max-[630px]:text-3xl max-[630px]:h-2/6 max-[1020px]:h-3/6    
        lg:justify-between lg:w-full lg:px-8"
          > */}
          <div className="my-4 text-[gray] hover:text-[red]">
            <h1 className="text-[red]">{t("title")}</h1>
          </div>
          <div className="my-4 text-3xl max-[768px]:flex lg:flex  ">
            {value ? (
              <div className="lg:flex">
                {path === "/" ? (
                  <Link href="/">
                    <IoPersonOutline className="mb-4 hover:text-[red] text-[red] mx-2" />
                  </Link>
                ) : (
                  <Link href="/">
                    <IoPersonOutline className="mb-4 hover:text-[red]  mx-2" />
                  </Link>
                )}

                {path === "/contact" ? (
                  <Link href="/contact">
                    <FiMessageCircle className="mb-4 hover:text-[red] text-[red] mx-2" />
                  </Link>
                ) : (
                  <Link href="/contact">
                    <FiMessageCircle className="mb-4 hover:text-[red] mx-2" />
                  </Link>
                )}

                {path === "/projects" ? (
                  <Link href="/projects">
                    <PiEyeglassesLight className="mb-4 hover:text-[red] text-[red] mx-2" />
                  </Link>
                ) : (
                  <Link href="/projects">
                    <PiEyeglassesLight className="mb-4 hover:text-[red] mx-2" />
                  </Link>
                )}

                {path === "/resume" ? (
                  <Link href="/resume">
                    <TfiBag className="mb-4 hover:text-[red] text-[red] mx-2" />
                  </Link>
                ) : (
                  <Link href="/resume">
                    <TfiBag className="mb-4 hover:text-[red] mx-2" />
                  </Link>
                )}
                <div className=" text-4xl  flex justify-start items-start text-start">
                  <Menu
                    shadow="md"
                    width={200}
                    openDelay={100}
                    closeDelay={400}
                    transitionProps={{
                      transition: "rotate-right",
                      duration: 150,
                    }}
                  >
                    <Menu.Target>
                      <Button style={{ padding: "0px", width: "0px" }}>
                        <GrLanguage className="text-3xl hover:text-[red] text-[gray] mx-2 mt-1" />
                      </Button>
                    </Menu.Target>
                    <div className="bg-[#ff0000]">
                      <Menu.Dropdown
                        style={{
                          backgroundColor: "#000000",
                          fontSize: "1.5rem",
                        }}
                      >
                        <Menu.Label color="#ff0000">
                          <p className="text-xl text-[red]">Language</p>
                        </Menu.Label>
                        <button className="w-full " onClick={langHandler}>
                          <Menu.Item color="#ff0000">
                            <p className="text-xl hover:text-[red] text-[gray]">
                              English
                            </p>
                          </Menu.Item>
                        </button>
                        <button className="w-full  " onClick={langHandler}>
                          <Menu.Item color="#ff0000">
                            <p className="text-xl hover:text-[red] text-[gray]">
                              فارسی
                            </p>
                          </Menu.Item>
                        </button>
                        <button className="w-full  " onClick={langHandler}>
                          <Menu.Item color="#ff0000">
                            <p className="text-xl hover:text-[red] text-[gray]">
                              کوردی
                            </p>
                          </Menu.Item>
                        </button>
                      </Menu.Dropdown>
                    </div>
                  </Menu>
                </div>
              </div>
            ) : (
              <div className="bg-none flex ">
                <div className=" text-4xl  flex justify-center items-center text-center">
                  <Menu
                    shadow="md"
                    width={200}
                    openDelay={100}
                    closeDelay={400}
                    transitionProps={{
                      transition: "rotate-right",
                      duration: 150,
                    }}
                  >
                    <Menu.Target>
                      <Button style={{ padding: "0px", width: "0px" }}>
                        <GrLanguage className="text-3xl hover:text-[red] text-[gray] mx-2 mt-1" />
                      </Button>
                    </Menu.Target>
                    <div className="bg-[#ff0000]">
                      <Menu.Dropdown
                        style={{
                          backgroundColor: "#000000",
                          fontSize: "1.5rem",
                        }}
                      >
                        <Menu.Label color="#ff0000">
                          <p className="text-xl text-[red]">Language</p>
                        </Menu.Label>
                        <button className="w-full " onClick={langHandler}>
                          <Menu.Item color="#ff0000">
                            <p className="text-xl hover:text-[red] text-[gray]">
                              English
                            </p>
                          </Menu.Item>
                        </button>
                        <button className="w-full  " onClick={langHandler}>
                          <Menu.Item color="#ff0000">
                            <p className="text-xl hover:text-[red] text-[gray]">
                              فارسی
                            </p>
                          </Menu.Item>
                        </button>
                        <button className="w-full  " onClick={langHandler}>
                          <Menu.Item color="#ff0000">
                            <p className="text-xl hover:text-[red] text-[gray]">
                              کوردی
                            </p>
                          </Menu.Item>
                        </button>
                      </Menu.Dropdown>
                    </div>
                  </Menu>
                </div>
                <Button onClick={handleOpen}>
                  <CiMenuBurger className="text-4xl text-[red]  max-[630px]:text-3xl" />
                </Button>
              </div>
            )}
            {/* </div> */}

            {/* <BsCloudDownload className="my-4 text-[red]   max-[768px]:hidden " /> */}
          </div>
          {/* <div className="w-5/6 flex flex-col justify-end items-center text-[bold] motion-preset-shrink max-[768px]:hidden  max-[768px]:w-0">
          <Image src={backImg} className="w-full h-[750px] static " />
          <div className=" absolute flex flex-col justify-center items-center text-center text-[gray] max-[1536px]:flex-col">
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
        </div> */}
        </div>

        <div
          className="w-4/6 h-full relative  overflow-y-auto   flex justify-center items-center text-center bg-[black] [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[red]
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-50
 max-[1020px]:w-screen  max-[1020px]:h-full     lg:w-full"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default Layout;
