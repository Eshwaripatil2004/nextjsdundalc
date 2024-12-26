"use client";
import Image from "next/image";
import { useState } from "react";

import codeClubLogo from "@/public/img/code_club_logo.jpg";
import scratchImage from "@/public/img/scratch.png";
import pythonImage from "@/public/img/python.png";
import webImage from "@/public/img/web.png";
import Link from "next/link";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [{
    path: "/",
    pathname: "Home"
  }, {
    path: "/scratch",
    pathname: "Scratch"
  },
  {
    path: "/python",
    pathname: "Python"
  },
  {
    path: "/web",
    pathname: "Web"
  },];
  return (
    <div className="container_ flex w-full">
       <div className="div">
        <nav className="hidden  lg:flex flex-col items-start bg-white shadow-md p-4  h-screen sticky top-0 left-0  w-64">
          <Image
            src={codeClubLogo}
            alt="Code Club Logo"
            width={48}
            height={48}
            className="rounded-xl"
          />
          {navItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className="block px-4 py-2 text-black hover:bg-lime-300 transition duration-200"
            >
              {item.pathname}
            </Link>
          ))}
        </nav>
      </div>
      <div className="bg-lime-300 min-h-screen md:w-full">
      <header id="logo" className="container mx-auto rounded-xl">
        <div className="flex justify-between items-center px-4 py-3">
          <Image
            src={codeClubLogo}
            alt="Code Club Logo"
            width={48}
            height={48}
            className="rounded-xl md:flex lg:hidden"
          />

          <nav className="lg:hidden hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="border-solid border-2 px-3 py-1 rounded-md border-black bg-white hover:bg-lime-300 transition-all duration-200"
              >
                {item.pathname}
              </Link>
            ))}
          </nav>

          <button
            id="menu-toggle"
            className="md:hidden text-black focus:outline-none"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/50 z-10">
          <div className="bg-white w-3/4 h-full p-4">
            <button
              id="menu-close"
              className="mb-4 bg-red-700 text-white p-2 rounded-xl focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
            {["Home", "Scratch", "Python", "Web"].map((item, index) => (
              <Link
                href={`/${item.toLowerCase()}`}
                key={index}
                className="block border-solid border-2 px-3 py-1 rounded-md border-black bg-white hover:bg-lime-300 mb-2 transition-all duration-200 ease-in-out"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="container mx-auto px-4 rounded-xl">
        <article className="container clear-both mx-auto px-4 py-4 rounded-xl">
          <header
            id="intro"
            className="container bg-blue-300 border-2 border-black mx-auto p-7 rounded-xl w-full lg:w-4/5"
          >
            <h1 className="text-2xl font-bold mb-4">Learn to code with Code Club</h1>
            <p>
              Our projects have step-by-step instructions to teach you how to
              create games, animations, and much more. Choose from hundreds of
              options, in up to 30 languages.
            </p>
          </header>
          <div
            id="panels"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-4/5 mx-auto mt-4"
          >
            {/* Panels */}
            {[
              {
                id: "one",
                bg: "bg-orange-400",
                img: scratchImage,
                title: "Scratch",
                description:
                  "Create animations, apps, and interactive stories by adding code, costumes, and sounds.",
                link: "/scratch",
                btn: "Explore Scratch Projects",
              },
              {
                id: "two",
                bg: "bg-blue-200",
                img: pythonImage,
                title: "Python",
                description:
                  "Make digital art, games, and more while exploring one of the world's most popular programming languages.",
                link: "/python",
                btn: "Explore Python Projects",
              },
              {
                id: "three",
                bg: "bg-lime-600",
                img: webImage,
                title: "Web design",
                description: "Build websites and apps by learning HTML, CSS, and JavaScript.",
                link: "/web",
                btn: "Explore Web Projects",
              },
            ].map((section, index) => (
              <section
                id={section.id}
                key={index}
                className={`p-5 ${section.bg} rounded-md mx-2 text-center`}
              >
                <Image
                  src={section.img}
                  alt={`${section.title} Logo`}
                  width={300}
                  height={200}
                  className="mx-auto w-full"
                />
                <div className="content p-4">
                  <h2 className="font-bold text-start text-xl">{section.title}</h2>
                  <p className="text-start">{section.description}</p>
                </div>
                <Link href={section.link}>
                  <button className="pl-10 pr-10 bg-neutral-50 hover:bg-green-100 mt-20 text-center">
                    {section.btn}
                  </button>
                </Link>
              </section>
            ))}
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="text-center mt-4">
        <address>Dublin Road, Dundalk</address>
      </footer>
    </div>
    </div>
   
  );
}
