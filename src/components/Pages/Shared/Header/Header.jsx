import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import SiteIcon from "./favicon.ico";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOutUser } = useAuth();

  console.log(user);

  return (
    <header className="bg-green-600">
      <nav className="container mx-auto font-medium text-gray-100">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex w-full items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">
                  <span className="flex group transition">
                    <img className="h-6" src={SiteIcon} alt="" />
                    <span className="ml-2 text-lg tracking-wider group-hover:text-gray-300">
                      Immune and Inspired
                    </span>
                  </span>
                </NavLink>
              </div>

              <div className="hidden md:block text-base">
                <div className="ml-10 w-full flex items-center space-x-4">
                  <NavLink
                    activeClassName="text-green-300 transition"
                    to="/home"
                    className="transition hover:text-green-300"
                  >
                    Home
                  </NavLink>

                  <NavLink
                    activeClassName="text-green-300 transition"
                    className="transition hover:text-green-300"
                    to="/departments"
                  >
                    Departments
                  </NavLink>

                  <NavLink
                    activeClassName="text-green-300 transition"
                    className="transition hover:text-green-300"
                    to="/contact-us"
                  >
                    Contact Us
                  </NavLink>

                  <NavLink
                    activeClassName="text-green-300 transition"
                    className="transition hover:text-green-300"
                    to="/covid-19"
                  >
                    Corona Info
                  </NavLink>
                </div>
              </div>

              <div className=" ml-auto hidden md:block">
                {!user?.email ? (
                  <NavLink
                    className="bg-green-300 text-gray-800 px-4 py-2 rounded-full outline-none transition hover:bg-green-400 focus:ring focus:ring-offset-2 focus:ring-green-400 focus:ring-opacity-50"
                    to="/login"
                  >
                    Log In
                  </NavLink>
                ) : (
                  <div className="ml-auto flex items-center">
                    <div className="h-8 w-8 rounded-full border-green-700 border-2 overflow-hidden">
                      <img
                        className="rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <button
                      onClick={signOutUser}
                      className="ml-2 bg-green-700 text-gray-100 px-4 py-1 rounded-full outline-none transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-green-700 focus:ring-opacity-75"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref-setter={ref}
                className="text-center px-2 pt-2 pb-3 space-y-2 sm:px-3"
              >
                <NavLink
                  activeClassName="text-green-300 transition"
                  to="/home"
                  className="block"
                >
                  Home
                </NavLink>

                <NavLink
                  activeClassName="text-green-300 transition"
                  className="block"
                  to="/departments"
                >
                  Departments
                </NavLink>

                <NavLink
                  activeClassName="text-green-300 transition"
                  className="block"
                  to="/contact-us"
                >
                  Contact Us
                </NavLink>

                <NavLink
                  activeClassName="text-green-300 transition"
                  className="block mb-4"
                  to="/covid-19"
                >
                  Corona Info
                </NavLink>

                {!user?.email ? (
                  <NavLink
                    className="bg-green-300 text-gray-800 px-4 py-2 rounded-full outline-none transition hover:bg-green-400 focus:ring focus:ring-offset-2 focus:ring-green-400 focus:ring-opacity-50"
                    to="/login"
                  >
                    Log In
                  </NavLink>
                ) : (
                  <div className="ml-auto flex items-center justify-center">
                    <div className="h-8 w-8 rounded-full border-green-700 border-2 overflow-hidden">
                      <img
                        className="rounded-full"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                    <button
                      onClick={signOutUser}
                      className="ml-2 bg-green-700 text-gray-100 px-4 py-1 rounded-full outline-none transition hover:bg-green-500 focus:ring focus:ring-offset-2 focus:ring-green-700 focus:ring-opacity-75"
                    >
                      Log out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
};

export default Header;
