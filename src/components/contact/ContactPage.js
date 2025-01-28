"use client";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Button, Group, Textarea, TextInput } from "@mantine/core";

import "@/i18n";
import { useTranslation } from "react-i18next";
import Iframe from "react-iframe";

function ContactPage() {
  const { t, i18n } = useTranslation();

  return (
    <div className="w-full absolute  flex flex-col justify-start items-start text-start px-4 ">
      <div className="w-full  justify-center items-center text-start p-4 text-[gray]">
        <div className="w-full justify-center items-center text-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104216.76514147267!2d46.91495534497158!3d35.286747089671124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ff997e23b7813db%3A0x8893e51d9ac3ac55!2sSanandaj%2C%20Kurdistan%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1738044107282!5m2!1sen!2s"
            className="w-full h-[400px]"
          />
        </div>
        <p className="text-2xl my-4 text-justify">{t("contactPage.p")}</p>
        <div className="grid grid-cols-2 gap-4 text-xl max-[760px]:grid-cols-1">
          <div className="flex  justify-center items-center text-center">
            <IoLocationOutline className="text-[red] mx-1 text-3xl" />
            <p>{t("contactPage.div1.div1.p")}</p>
          </div>
          <div className="w-full flex justify-center items-center text-center  max-[630px]:text-lg">
            <MdOutlineMailOutline className="text-[red]  mx-1 text-3xl" />
            <p>saruk.dastkhosh5186@gmail.com</p>
          </div>
          <div className="flex justify-center items-center text-center">
            <FiPhone className="text-[red] mx-1 text-3xl" />
            <p>{t("contactPage.div1.div2.p")}</p>
          </div>
          {/* <div className="flex justify-center items-center text-center">
            <IoLocationOutline className="text-[red] mx-1 text-3xl" />
            <p>Sanandaj</p>
          </div> */}
        </div>
      </div>
      <div className="w-full h-2 border-4 bg-[red] my-12"></div>

      <div className="w-full  justify-start items-start text-start p-4 ">
        <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-5xl max-[1020px]:text-6xl max-[630px]:pt-4">
          {t("contactPage.div2.title")}
        </h1>
        <form className="flex flex-col bg-none py-4">
          <input
            placeholder={t("contactPage.div2.form.input1")}
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
          />
          <input
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            variant="unstyled"
            size="xl"
            placeholder={t("contactPage.div2.form.input2")}
          />
          <input
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            variant="unstyled"
            size="xl"
            placeholder={t("contactPage.div2.form.input3")}
          />
          <textarea
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            placeholder={t("contactPage.div2.form.text")}
            autosize
            minRows={5}
          />
          <Group justify="flex-start" mt="md">
            <button
              className="mt-10 mb-10 px-3 py-2 bg-[red] text-3xl h-16  text-[gray] hover:bg-[gray] hover:text-[red] hover:border-4 hover:border-[red]  block w-full rounded-md  "
              type="submit"
            >
              {t("contactPage.div2.form.button")}
            </button>
          </Group>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
