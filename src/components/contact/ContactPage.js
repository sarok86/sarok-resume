"use client";
import React, { useRef, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Button, Group, Textarea, TextInput } from "@mantine/core";

import "@/i18n";
import { useTranslation } from "react-i18next";
import Iframe from "react-iframe";
import Link from "next/link";

import { useForm } from "@mantine/form";

import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function ContactPage() {
  const { t, i18n } = useTranslation();
  const form = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name) {
      return toast.error("Invalid name");
    } else if (!email) {
      return toast.error("Invalid email");
    }

    {
      /^\S+@\S+$/.test(email) ? null : toast.error("Invalid email");
    }

    setLoader(true);

    emailjs
      .sendForm("service_0805wl8", "template_lyijobw", form.current, {
        publicKey: "dsMPK8eDtWmID7utr",
      })
      .then(
        () => {
          toast.success("SUCCESS!");
          setLoader(false);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("FAILED...");
          setLoader(false);
          setName("");
          setEmail("");
          setMessage("");
        }
      );
  };

  // const form = useForm({
  //   mode: "uncontrolled",
  //   initialValues: {
  //     name: "",
  //     // lastName: "",
  //     email: "",
  //     message: "",
  //   },
  //   validate: {
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
  //   },
  // });
  // console.log(form.values);

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   // form.setValues();
  //   console.log(form);

  //   // emailjs
  //   //   .sendForm("service_0805wl8", "template_lyijobw", form.values, {
  //   //     publicKey: "dsMPK8eDtWmID7utr",
  //   //   })
  //   //   .then(
  //   //     () => {
  //   //       console.log("SUCCESS!");
  //   //     },
  //   //     (error) => {
  //   //       console.log("FAILED...", error);
  //   //     }
  //   //   );
  // };

  return (
    <>
      <div className="w-full  absolute flex flex-col justify-start items-start text-start px-4 ">
        <div className="w-full  justify-start items-start text-start p-4 ">
          <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-5xl max-[1020px]:text-6xl max-[630px]:pt-4 ">
            {t("contactPage.div2.title")}
          </h1>
          {/* <form
          className="flex flex-col bg-none py-4"
          // onSubmit={form.onSubmit((values) => form.setValues(values))}
        >
          <TextInput
            placeholder={t("contactPage.div2.form.input1")}
            key={form.key("name")}
            variant="unstyled"
            size="xl"
            {...form.getInputProps("name")}
            name="user_name"
            className="mt-10 px-3  border-b-12 border-[red] text-2xl h-16 bg-[gray]  focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
          />
          {/* <TextInput
            className="mt-10 px-3  border-b-12 border-[red] text-2xl h-16 bg-[gray]  focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            variant="unstyled"
            key={form.key("lastName")}
            {...form.getInputProps("lastName")}
            size="xl"
            placeholder={t("contactPage.div2.form.input2")}
          /> */}
          {/* <TextInput
            className="mt-10 px-3  border-b-12 border-[red] text-[red] text-2xl h-16 bg-[gray]  focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            variant="unstyled"
            key={form.key("email")}
            {...form.getInputProps("email")}
            name="user_email"
            size="xl"
            color="white"
            placeholder={t("contactPage.div2.form.input3")}
            style={{
              borderBottom: "4px solid #808080",
              // color: "#808080",
              color: "white",
            }}
          /> */}
          {/* <Textarea
            className="mt-10 px-3  border-b-12 border-[red] text-2xl h-16 bg-[gray]  focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            placeholder={t("contactPage.div2.form.text")}
            key={form.key("message")}
            {...form.getInputProps("message")}
            name="message"
            autosize
            size="xl"
            variant="unstyled"
            // minRows={5}
          /> */}
          {/* <button
            className="mt-10 mb-10 px-3 py-2 bg-[red] text-3xl h-16  text-[gray] hover:bg-[gray] hover:text-[red] hover:border-4 hover:border-[red]  block w-full rounded-md  "
            type="submit"
            // onClick={submitHandler}
          >
            {t("contactPage.div2.form.button")}
          </button> */}
          {/* </form> */}

          <form
            ref={form}
            // onSubmit={sendEmail}
            className="flex flex-col bg-none py-4  "
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("contactPage.div2.form.input1")}
              className="mt-10 px-3 text-[gray] border-b-4 border-[gray] text-2xl h-16 bg-[black]  focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
              type="text"
              name="user_name"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="user_email"
              className="mt-10 px-3 text-[gray]   border-b-4 border-[gray] text-2xl h-16 bg-[black]  focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
              placeholder={t("contactPage.div2.form.input3")}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
              className="mt-10 px-3 text-[gray]  border-b-4 border-[gray] text-2xl h-16 bg-[black]  focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
              placeholder={t("contactPage.div2.form.text")}
              autosize
              minRows={5}
            />
            {loader ? (
              <button className="opacity-30 mt-10 mb-10 px-3 py-2 bg-[gray] text-3xl h-16  text-[red]  block w-full rounded-md  ">
                {/* {t("contactPage.div2.form.button")} */}
                loading...
              </button>
            ) : (
              <button
                onClick={sendEmail}
                type="submit"
                value="Send"
                className="mt-10 mb-10 px-3 py-2 bg-[red] text-3xl h-16  text-[gray] hover:bg-[gray] hover:text-[red] hover:border-4 hover:border-[red]  block w-full rounded-md  "
              >
                {t("contactPage.div2.form.button")}
              </button>
            )}
          </form>
        </div>
        <div className="w-full h-2 border-4 bg-[red] my-12"></div>

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
              <Link
                href="mailto:saruk.dastkhosh5186@gmail.com"
                className="flex justify-center items-center text-center"
                target="_blank"
              >
                <MdOutlineMailOutline className="text-[red]  mx-1 text-3xl" />
                <p>saruk.dastkhosh5186@gmail.com</p>
              </Link>
            </div>
            <div className="flex justify-center items-center text-center">
              <Link
                href="tel:09182481037"
                className="flex justify-center items-center text-center"
                target="_blank"
              >
                <FiPhone className="text-[red] mx-1 text-3xl" />
                <p>{t("contactPage.div1.div2.p")}</p>
              </Link>
            </div>
            {/* <div className="flex justify-center items-center text-center">
            <IoLocationOutline className="text-[red] mx-1 text-3xl" />
            <p>Sanandaj</p>
          </div> */}
          </div>
        </div>

        <div className="object-center ">
          <Toaster position="top-center" reverseOrder={true} />
        </div>
      </div>
    </>
  );
}

export default ContactPage;
