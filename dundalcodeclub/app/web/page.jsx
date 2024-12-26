"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import codeClubLogo from "@/public/img/code_club_logo.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function WebPage() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [accshow, setaccshow] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const navItems = [
    {
      path: "/",
      pathname: "Home"
    },
    {
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
    }
  ];

  const tabItems = [
    { name: "Tab 1", content: "This is the content of Tab 1." },
    { name: "Tab 2", content: "This is the content of Tab 2." },
    { name: "Tab 3", content: "This is the content of Tab 3." }
  ];

  const handleacc = (index) => {
    setaccshow(accshow === index ? null : index);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

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
      {/* Header */}
      <header id="logo" className="container mx-auto rounded-xl">
        <div className="flex justify-between items-center px-4 py-3">
        
        <Image
            src={codeClubLogo}
            alt="Code Club Logo"
            width={48}
            height={48}
            className="rounded-xl flex lg:hidden"
          />
         
          {/* Desktop Navbar */}
          <nav className="hidden lg:hidden md:flex space-x-4">
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

          {/* Mobile Menu Button */}
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

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-10">
          <div className="bg-white w-3/4 h-full p-4">
            <button
              id="menu-close"
              className="mb-4 bg-red-700 text-white p-2 rounded-xl focus:outline-none"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
            {navItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className="block border-solid border-2 px-3 py-1 rounded-md border-black bg-white hover:bg-lime-300 mb-2 transition-all duration-200 ease-in-out"
              >
                {item.pathname}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="container px-4   rounded-xl">
        <article className="container px-4 py-4 rounded-xl">
          <header
            id="intro"
            className="container bg-blue-200 border-2 border-black mx-auto p-7 rounded-xl w-full lg:w-4/5"
          >
            <h1 className="text-2xl font-bold mb-4">Web Design</h1>
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
            <section className="p-5 bg-orange-400 rounded-md mx-2 text-center">
              <Image
                src="/img/web-intro.webp"
                alt="Web design intro"
                width={300}
                height={200}
                className="mx-auto w-full"
              />
              <div className="content p-4">
                <h2 className="font-bold text-start text-xl">Introduction to Web</h2>
                <p className="text-start">
                  Create animations, apps, and interactive stories by adding code, costumes, and sounds.
                </p>
              </div>
            </section>

            <section className="p-5 bg-blue-200 rounded-md mx-2 text-center">
              <Image
                src="/img/more-web.webp"
                alt="More Web"
                width={300}
                height={200}
                className="mx-auto w-full"
              />
              <div className="content p-4">
                <h2 className="font-bold text-xl text-start">More Web</h2>
                <p className="text-start">
                  Make digital art, games, and more while exploring one of the world's most popular programming languages.
                </p>
              </div>
            </section>
          </div>
        </article>
      </main>

      <div className="accordion bg-blue-300 flex justify-center w-full p-10">
        <div className="ac space-y-10 w-full max-w-4xl">
          {[1, 2, 3].map((i) => (
            <div key={i} className={`accordion-${i} border-b border-gray-300 p-4 rounded-lg bg-white shadow-lg`}>
              <button
                className="flex justify-between items-center w-full bg-blue-400 p-4 rounded-lg hover:bg-blue-500 transition-colors duration-200"
                onClick={() => handleacc(i)}
              >
                <span className="text-white text-xl font-semibold">Accordion {i}</span>
                {accshow === i ? (
                  <FaChevronUp className="text-white" />
                ) : (
                  <FaChevronDown className="text-white" />
                )}
              </button>
              <div
                className={`accordion-content mt-2 transition-all duration-200 ease-in-out ${accshow === i ? "flex opacity-100 translate-y-0 visible" : "opacity-0 invisible"
                  }`}
              >
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque delectus cum quisquam placeat exercitationem accusantium eum doloribus, blanditiis quasi!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tabs bg-yellow-300 p-6 w-full max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          {tabItems.map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 mr-2 rounded-lg ${activeTab === index ? "bg-blue-500 text-white" : "bg-white border border-blue-500 text-blue-500"
                }`}
              onClick={() => handleTabChange(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>
        <div className="tab-content p-4 bg-white rounded-lg shadow-md">
          <p>{tabItems[activeTab].content}</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-4">
        <address>Dublin Road, Dundalk</address>
      </footer>
    </div>
    </div>
    
  );
}
