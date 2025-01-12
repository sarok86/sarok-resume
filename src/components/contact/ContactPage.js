import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { Button, Group, Textarea, TextInput } from "@mantine/core";

function ContactPage() {
  return (
    <div className="w-full absolute  flex flex-col justify-start items-start text-start px-4 ">
      <div className="w-full justify-center items-center text-start p-4 text-[gray]">
        <p className="text-2xl my-4 text-justify">
          If you have any questions regarding this privacy statement, the
          practices of this site or your dealings with me, please do not
          hesitate to contact at the above-mentioned address, e-mail address or
          phone number.
        </p>
        <div className="grid grid-cols-2 gap-4 text-xl max-[630px]:grid-cols-1">
          <div className="flex  justify-center items-center text-center">
            <IoLocationOutline className="text-[red] mx-1 text-3xl" />
            <p>Sanandaj</p>
          </div>
          <div className="flex justify-center items-center text-center">
            <MdOutlineMailOutline className="text-[red]  mx-1 text-3xl" />
            <p>Saruk@gmail.com</p>
          </div>
          <div className="flex justify-center items-center text-center">
            <FiPhone className="text-[red] mx-1 text-3xl" />
            <p>Sanandaj</p>
          </div>
          <div className="flex justify-center items-center text-center">
            <IoLocationOutline className="text-[red] mx-1 text-3xl" />
            <p>Sanandaj</p>
          </div>
        </div>
      </div>
      <div className="w-full h-2 border-4 bg-[red] my-12"></div>

      <div className="w-full  justify-start items-start text-start p-4 ">
        <h1 className="text-7xl my-4 text-[gray] max-[630px]:text-5xl max-[1020px]:text-6xl max-[630px]:pt-4">
          Send Message
        </h1>
        <form className="flex flex-col bg-none py-4">
          <input
            placeholder="First Name"
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
          />
          <input
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            variant="unstyled"
            size="xl"
            placeholder="Last Name"
          />
          <input
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            variant="unstyled"
            size="xl"
            placeholder="Email"
          />
          <textarea
            className="mt-10 px-3 py-2 border-b-4 border-[gray] text-2xl h-16 bg-[black] text-[gray] focus:outline-none focus:border-b-[red]  block w-full rounded-md  "
            placeholder="Message"
            autosize
            minRows={5}
          />
          <Group justify="flex-start" mt="md">
            <button
              className="mt-10 mb-10 px-3 py-2 bg-[red] text-2xl h-16  text-[gray] hover:bg-[gray] hover:text-[red] hover:border-4 hover:border-[red]  block w-full rounded-md  "
              type="submit"
            >
              Submit
            </button>
          </Group>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
