import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-green-600">
      <nav className="container mx-auto font-medium text-gray-100">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex w-full items-center">
              <div className="flex-shrink-0">
                <NavLink to="/">Logo</NavLink>
              </div>

              <div className="text-sm ml-auto hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2">
                  <NavLink to="/home" className="nav-link">
                    Home
                  </NavLink>

                  <NavLink className="nav-link" to="/services">
                    Our Services
                  </NavLink>

                  <NavLink className="nav-link" to="/doctors">
                    Our Doctors
                  </NavLink>

                  <NavLink className="nav-link" to="/contact-us">
                    Contact Us
                  </NavLink>

                  <NavLink className="nav-link" to="/login">
                    Log In
                  </NavLink>
                </div>
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
                <NavLink to="/meals" className="nav-link block ">
                  Meals
                </NavLink>

                <NavLink className="nav-link block " to="/cart">
                  New1
                </NavLink>

                <NavLink className="nav-link block " to="/login">
                  Log In
                </NavLink>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
};

export default Header;
