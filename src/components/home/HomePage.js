"use client";
import { Button } from "@mantine/core";
import React from "react";
import { RiComputerLine } from "react-icons/ri";
import { IoRocketOutline } from "react-icons/io5";
import { GoDatabase } from "react-icons/go";
import { MdOutlineSecurity } from "react-icons/md";

import "@/i18n";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full absolute  flex flex-col justify-start items-start text-start  max-[630px]:pt-4">
      <div className="w-full justify-start items-start text-start px-4 text-[gray] max-[630px]:text-3xl">
        <h1 className="text-7xl my-4 max-[630px]:text-6xl max-[630px]:pt-4">
          {t("homePage.abouttitle")}
        </h1>
        <div className="flex my-4 items-center text-center ">
          <span className="text-3xl max-[630px]:text-2xl text-[red]">
            {t("homePage.div1.v1")}
          </span>
          <span className="text-3xl max-[630px]:text-2xl  text-[gray] m-2">
            {" "}
            /{" "}
          </span>
          <span className="text-3xl max-[630px]:text-2xl text-[red]">
            {t("homePage.div1.v2")}
          </span>
        </div>
        <p className="text-2xl max-[630px]:text-justify">{t("homePage.p")}</p>
      </div>
      <div className="w-full h-2 border-4 bg-[red] my-12"></div>

      <div className="justify-start items-start text-start p-4  max-[630px]:text-3xl">
        <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-6xl">
          {t("homePage.servicetitle")}
        </h1>
        <div className="grid grid-cols-2 max-[630px]:grid-cols-1 max-[630px]:text-justify">
          <div className="m-4">
            <RiComputerLine className="text-3xl  text-[red] m-2" />
            <span className="text-3xl  text-[red] m-2">
              {t("homePage.div2.div1.p1")}
            </span>
            <p className="text-2xl text-[gray]">{t("homePage.div2.div1.p2")}</p>
          </div>
          <div className="m-4">
            <IoRocketOutline className="text-3xl text-[red] m-2" />
            <span className="text-3xl text-[red] m-2">
              {t("homePage.div2.div2.p1")}
            </span>
            <p className="text-2xl text-[gray]">{t("homePage.div2.div2.p2")}</p>
          </div>
          <div className="m-4">
            <GoDatabase className="text-3xl text-[red] m-2" />
            <span className="text-3xl text-[red] m-2">
              {t("homePage.div2.div3.p1")}
            </span>
            <p className="text-2xl text-[gray]">{t("homePage.div2.div3.p2")}</p>
          </div>
          <div className="m-4">
            <MdOutlineSecurity className="text-3xl text-[red] m-2" />
            <span className="text-3xl text-[red] m-2">
              {t("homePage.div2.div4.p1")}
            </span>
            <p className="text-2xl text-[gray]">{t("homePage.div2.div4.p2")}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-2 border-4 bg-[red] my-12"></div>

      <div className="w-full justify-start items-start text-start p-4 ">
        <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-5xl">
          {t("homePage.principeltitle")}
        </h1>
        <div className="w-full grid grid-cols-4 justify-center items-center text-center max-[630px]:grid-cols-2">
          <div>
            <span className="text-3xl text-[red] m-2">
              {t("homePage.div3.div1.p1")}
            </span>
            <p className="text-xl text-[gray] m-2 ">
              {t("homePage.div3.div1.p2")}
            </p>
          </div>
          <div>
            <span className="text-3xl text-[red] m-2">
              {t("homePage.div3.div2.p1")}
            </span>
            <p className="text-xl text-[gray] m-2 ">
              {t("homePage.div3.div2.p2")}
            </p>
          </div>
          <div>
            <span className="text-3xl text-[red] m-2">
              {t("homePage.div3.div3.p1")}
            </span>
            <p className="text-xl text-[gray] m-2 ">
              {t("homePage.div3.div3.p2")}
            </p>
          </div>
          <div>
            <span className="text-3xl text-[red] m-2">
              {t("homePage.div3.div4.p1")}
            </span>
            <p className="text-xl text-[gray] m-2 ">
              {t("homePage.div3.div4.p2")}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full border-2 bg-white my-12"></div>
    </div>
  );
}

export default HomePage;
