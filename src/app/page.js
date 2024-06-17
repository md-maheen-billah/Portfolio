"use client";
import { FiArrowRight, FiMapPin, FiMail } from "react-icons/fi";
import { FaReact, FaNodeJs, FaGitAlt, FaTools } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { SiFacebook, SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { useMyContext } from "@/components/Providers";
import { MdOutlineEmail } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { isAboutFirst, isRobotFirst, isContactFirst } = useMyContext();

  return (
    <div className="min-h-screen px-4 py-8">
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid max-w-4xl grid-flow-dense grid-cols-12 gap-4"
      >
        {isAboutFirst && <FrontEnd />}
        {isAboutFirst && <BackEnd />}
        {isRobotFirst && <Project1 />}
        {isRobotFirst && <Project2 />}
        {isRobotFirst && <Project3 />}
        {isContactFirst && <LocationBlock />}
        {isContactFirst && <PhoneBlock />}
        {isContactFirst && <EmailBlock />}
        <HeaderBlock />
        <SocialsBlock />
        <AboutBlock></AboutBlock>
        {!isAboutFirst && <FrontEnd />}
        {!isAboutFirst && <BackEnd />}
        {!isRobotFirst && <Project1 />}
        {!isRobotFirst && <Project2 />}
        {!isRobotFirst && <Project3 />}
        {!isContactFirst && <LocationBlock />}
        {!isContactFirst && <PhoneBlock />}
        {!isContactFirst && <EmailBlock />}
      </motion.div>
      <Footer />
    </div>
  );
}

const Block = ({ className, ...rest }) => {
  return (
    <motion.div
      variants={{
        initial: {
          scale: 0.5,
          y: 50,
          opacity: 0,
        },
        animate: {
          scale: 1,
          y: 0,
          opacity: 1,
        },
      }}
      transition={{
        type: "spring",
        mass: 3,
        stiffness: 400,
        damping: 50,
      }}
      className={twMerge(
        "col-span-4 rounded-lg border border-zinc-700 bg-secondary-400 p-6",
        className
      )}
      {...rest}
    />
  );
};

const HeaderBlock = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 row-span-2 md:col-span-6"
  >
    <Image
      src="https://i.ibb.co/dk0HVCj/IMG-20240501-183142.jpg"
      alt="avatar"
      className="mb-4 border-4 border-maheenWT1 size-20 object-cover rounded-full"
      width={1200} // Specify width attribute
      height={1200} // Specify height attribute
    />
    <h1 className="mb-12 text-4xl font-medium leading-tight">
      Hi, I&#39;m Maheen,{" "}
      <p className="text-zinc-500 text-xl">
        a Web Developer from Belgium with experience in responsive and user
        friendly Website development.
      </p>
    </h1>
    <a
      href="https://drive.google.com/uc?export=download&id=1lamj6Jjy0an8kWRIYZDZc_nhT6BzR6-J"
      download
      className="flex items-center gap-1 text-red-300 hover:underline"
    >
      Download Resume <FiArrowRight />
    </a>
  </Block>
);

const SocialsBlock = () => (
  <>
    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.03,
      }}
      className="col-span-6 bg-secondary-400 md:p-0 hover:bg-maheenWT1 md:col-span-3"
    >
      <a
        href="https://github.com/md-maheen-billah"
        target="_blank"
        className="grid h-full place-content-center hover:text-maheenBB1 text-3xl text-maheenWT1"
      >
        <SiGithub />
      </a>
    </Block>

    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.03,
      }}
      className="col-span-6 hover:bg-maheenBB1 md:p-0 bg-maheenWT1 md:col-span-3"
    >
      <a
        href="https://twitter.com/mdmaheen_billah"
        target="_blank"
        className="grid h-full place-content-center  text-3xl hover:text-maheenWT1  text-maheenBB1 "
      >
        <SiTwitter />
      </a>
    </Block>

    <Block
      whileHover={{
        rotate: "-2.5deg",
        scale: 1.03,
      }}
      className="col-span-6 hover:bg-maheenBB1 md:p-0 bg-maheenWT1 md:col-span-3"
    >
      <a
        href="https://www.facebook.com/md.maheen.billah.97/"
        target="_blank"
        className="grid h-full place-content-center text-maheenBB1 hover:text-maheenWT1  text-3xl "
      >
        <SiFacebook />
      </a>
    </Block>

    <Block
      whileHover={{
        rotate: "2.5deg",
        scale: 1.03,
      }}
      className="col-span-6 bg-secondary-400 md:p-0 hover:bg-maheenWT1 md:col-span-3"
    >
      <a
        href="https://www.linkedin.com/in/md-maheen-billah/"
        target="_blank"
        className="grid h-full place-content-center hover:text-maheenBB1 text-3xl text-maheenWT1"
      >
        <SiLinkedin />
      </a>
    </Block>
  </>
);

const AboutBlock = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 text-3xl leading-tight"
  >
    <div>
      Education
      <p className="text-zinc-500 text-xl">
        B.Sc. Electrical and Electronic Engineering
      </p>
      <p className="text-zinc-500   text-xl">
        Independent University, Bangladesh
      </p>
      <p className="text-zinc-400 text-base">2018-2023</p>
    </div>
  </Block>
);

const FrontEnd = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 bg-maheenWT1 text-maheenBB1 text-3xl leading-tight md:col-span-6"
  >
    <div>
      Frontend Development
      <div className="flex justify-between pr-6 md:pr-16 mt-2">
        <div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenBB1 " />
            <div>
              <p className="text-zinc-800 text-xl">HTML5</p>
              <p className="text-zinc-700   text-sm">Intermediate</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenBB1 " />
            <div>
              <p className="text-zinc-800 text-xl">CSS3</p>
              <p className="text-zinc-700   text-sm">Intermediate</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenBB1 " />
            <div>
              <p className="text-zinc-800 text-xl">Tailwind</p>
              <p className="text-zinc-700   text-sm">Intermediate</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenBB1 " />
            <div>
              <p className="text-zinc-800 text-xl">JavaScript</p>
              <p className="text-zinc-700   text-sm">Intermediate</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenBB1 " />
            <div>
              <p className="text-zinc-800 text-xl">ReactJS</p>
              <p className="text-zinc-700   text-sm">Intermediate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Block>
);

const BackEnd = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 text-3xl leading-tight md:col-span-6"
  >
    <div>
      Backend Development
      <div className="flex justify-between pr-6 md:pr-16 mt-2">
        <div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenWT1" />
            <div>
              <p className="text-zinc-500 text-xl">NodeJS</p>
              <p className="text-zinc-500   text-sm">Beginner</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenWT1 " />
            <div>
              <p className="text-zinc-500 text-xl">MongoDB</p>
              <p className="text-zinc-500   text-sm">Beginner</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-4 items-center">
            <FaTools className="text-xl text-maheenWT1 " />
            <div>
              <p className="text-zinc-500 text-xl">ExpressJS</p>
              <p className="text-zinc-500   text-sm">Beginner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Block>
);

const Project1 = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 text-3xl leading-tight md:col-span-4"
  >
    <div>
      Savor Oasis
      <p className="text-zinc-500 text-xl">Restaurant Management Website</p>
      <div className="mt-2">
        <button
          onClick={() => document.getElementById("my_modal_3").showModal()}
          className="flex items-center gap-1 text-base text-red-300 hover:underline"
        >
          View Details <FiArrowRight />
        </button>

        <dialog id="my_modal_3" className="modal">
          <svg className="hidden">
            <filter id="grainy">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.5"
              ></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
            </filter>
          </svg>
          <div className="modal-box jaja bg-[#0a0c0d] border-2 border-maheenWT1">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn text-maheenWT1 btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <Image
              src="https://i.ibb.co/Y8KXckT/Screenshot-2024-06-17-160807.png"
              alt="something"
              priority={true}
              className="rounded-lg border border-[#0a0c0d] mt-6"
              width={1200} // Specify width attribute
              height={1200} // Specify height attribute
            />
            <div className="py-4">
              <p className="text-3xl text-maheenWT1">Savor Oasis</p>
              <p className="text-xl mt-2 mb-4 text-zinc-500 ">Technologies:</p>
              <div className="text-[10px] md:text-sm text-zinc-500 text-center grid grid-cols-3 gap-2 mt-2">
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  React
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  Tailwind
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  Firebase
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  ExpressJS
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  MongoDB
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  JsonWebtoken
                </span>
              </div>
              <div className="flex justify-between  mt-4">
                <a
                  href="https://savor-oasis.web.app/"
                  target="_blank"
                  className="flex items-center text-sm md:text-base gap-1 text-red-300 hover:underline"
                >
                  Live Link <FiArrowRight />
                </a>
                <a
                  href="https://github.com/md-maheen-billah/Assignment-11-client-side"
                  target="_blank"
                  className="flex items-center text-xs md:text-base gap-1 text-red-300 hover:underline"
                >
                  Client Repo <FiArrowRight />
                </a>
                <a
                  href="https://github.com/md-maheen-billah/Assignment-11-server-side"
                  target="_blank"
                  className="flex items-center text-xs md:text-base gap-1 text-red-300 hover:underline"
                >
                  Server Repo <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </Block>
);

const Project2 = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 text-3xl leading-tight md:col-span-4"
  >
    <div>
      Canvas Isle
      <p className="text-zinc-500 text-xl">
        Painting and Drawing Buy/Sell Website
      </p>
      <div className="mt-2">
        <button
          onClick={() => document.getElementById("my_modal_2").showModal()}
          className="flex items-center gap-1 text-base text-red-300 hover:underline"
        >
          View Details <FiArrowRight />
        </button>

        <dialog id="my_modal_2" className="modal">
          <svg className="hidden">
            <filter id="grainy">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.5"
              ></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
            </filter>
          </svg>
          <div className="modal-box jaja bg-[#0a0c0d] border-2 border-maheenWT1">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn text-maheenWT1 btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <Image
              src="https://i.ibb.co/kHrGQ19/Screenshot-2024-06-17-175319.png"
              alt="something"
              priority={true}
              className="rounded-lg border border-[#0a0c0d] mt-6"
              width={1200} // Specify width attribute
              height={1200} // Specify height attribute
            />
            <div className="py-4">
              <p className="text-3xl text-maheenWT1">Canvas Isle</p>
              <p className="text-xl mt-2 mb-4 text-zinc-500 ">Technologies:</p>
              <div className="text-[10px] md:text-sm text-zinc-500 text-center grid grid-cols-3 gap-2 mt-2">
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  React
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  Tailwind
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  Firebase
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  ExpressJS
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  MongoDB
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  JsonWebtoken
                </span>
              </div>
              <div className="flex justify-between  mt-4">
                <a
                  href="https://assignment-10-13166.web.app/"
                  target="_blank"
                  className="flex items-center text-sm md:text-base gap-1 text-red-300 hover:underline"
                >
                  Live Link <FiArrowRight />
                </a>
                <a
                  href="https://github.com/md-maheen-billah/Assignment-10-client-side"
                  target="_blank"
                  className="flex items-center text-xs md:text-base gap-1 text-red-300 hover:underline"
                >
                  Client Repo <FiArrowRight />
                </a>
                <a
                  href="https://github.com/md-maheen-billah/Assignment-10-server-side"
                  target="_blank"
                  className="flex items-center text-xs md:text-base gap-1 text-red-300 hover:underline"
                >
                  Server Repo <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </Block>
);

const Project3 = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 text-3xl leading-tight md:col-span-4"
  >
    <div>
      Terra Scope
      <p className="text-zinc-500 text-xl">Real Estate Exploring Website</p>
      <div className="mt-2">
        <button
          onClick={() => document.getElementById("my_modal_1").showModal()}
          className="flex items-center gap-1 text-base text-red-300 hover:underline"
        >
          View Details <FiArrowRight />
        </button>

        <dialog id="my_modal_1" className="modal">
          <svg className="hidden">
            <filter id="grainy">
              <feTurbulence
                type="turbulence"
                baseFrequency="0.5"
              ></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
            </filter>
          </svg>
          <div className="modal-box jaja bg-[#0a0c0d] border-2 border-maheenWT1">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn text-maheenWT1 btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <Image
              src="https://i.ibb.co/M2H5Skg/Screenshot-2024-06-17-175709.png"
              alt="something"
              priority={true}
              className="rounded-lg border border-[#0a0c0d] mt-6"
              width={1200} // Specify width attribute
              height={1200} // Specify height attribute
            />
            <div className="py-4">
              <p className="text-3xl text-maheenWT1">Terra Scope</p>
              <p className="text-xl mt-2 mb-4 text-zinc-500 ">Technologies:</p>
              <div className="text-[10px] md:text-sm text-zinc-500 text-center grid grid-cols-3 gap-2 mt-2">
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  React
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  Tailwind
                </span>
                <span className="bg-maheenWT1 rounded-md px-2 py-1 text-maheenBB1">
                  Firebase
                </span>
              </div>
              <div className="flex justify-between  mt-4">
                <a
                  href="https://assignment-9-7f06b.web.app/"
                  target="_blank"
                  className="flex items-center text-sm md:text-base gap-1 text-red-300 hover:underline"
                >
                  Live Link <FiArrowRight />
                </a>
                <a
                  href="https://github.com/md-maheen-billah/Assignment-9"
                  target="_blank"
                  className="flex items-center text-xs md:text-base gap-1 text-red-300 hover:underline"
                >
                  Github Repo <FiArrowRight />
                </a>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  </Block>
);

const LocationBlock = () => (
  <Block
    whileHover={{
      scale: 1.03,
      rotate: "2.5deg",
    }}
    className="col-span-12 flex flex-col items-center gap-4 md:col-span-4"
  >
    <FiMapPin className="text-3xl" />
    <p className="text-center text-base md:text-sm lg:text-base text-zinc-400">
      Brussels, Belgium
    </p>
  </Block>
);

const PhoneBlock = () => (
  <Block
    whileHover={{
      scale: 1.03,
    }}
    className="col-span-12 flex bg-maheenWT1 flex-col items-center gap-4 md:col-span-4"
  >
    <LuPhone className="text-3xl text-maheenBB1" />
    <p className="text-center text-base md:text-sm lg:text-base text-zinc-800">
      +32 455197479
    </p>
  </Block>
);

const EmailBlock = () => (
  <Block
    whileHover={{
      scale: 1.03,
      rotate: "-2.5deg",
    }}
    className="col-span-12 flex flex-col items-center gap-4 md:col-span-4"
  >
    <MdOutlineEmail className="text-3xl" />
    <p className="text-center text-base md:text-sm lg:text-base text-zinc-400">
      md.maheen.billah.97@gmail.com
    </p>
  </Block>
);

const Footer = () => {
  return (
    <motion.footer
      whileHover={{
        scale: 1.05,
      }}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.2 }}
      className="mt-16"
    >
      <div>
        <Image
          src="https://i.ibb.co/hZgVMn1/maheen.png"
          alt="something"
          priority={true}
          className="h-20 w-20 mx-auto"
          width={1200} // Specify width attribute
          height={1200} // Specify height attribute
        />
      </div>

      <p className="text-center text-maheenBB1 mt-4">
        Copyright 2024 developed by{" "}
        <a
          href="https://www.linkedin.com/in/md-maheen-billah/"
          target="_blank"
          className="text-red-500 hover:underline"
        >
          Md Maheen Billah
        </a>{" "}
        - All rights reserved
      </p>
    </motion.footer>
  );
};
