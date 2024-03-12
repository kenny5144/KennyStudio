"use client";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../public/img/homepageimages/Logo.png";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const portfoliodrop = () => {
    setPortfolioIsOpen(!portfolioisOpen);
  };
  const [portfolioisOpen, setPortfolioIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav
        className={ pathname === "/" || pathname === "/Contact" ?"w-full   md:px-2 mt-1 flex justify-between absolute z-10 " :"w-full   md:px-2 mt-1 flex justify-between  "}
      >
        <Link
          href="/"
          onClick={() => {
            setIsOpen(false);
            setPortfolioIsOpen(false);
          }}
        >
          <Image
            src={Logo}
            height={50}
            //   width={50}

            alt="Kennys Studios logo"
          />
        </Link>
        <ul className="hidden md:flex md:space-x-4">
          <Link
            href="/About"
            onClick={() => {
              setIsOpen(false);
              setPortfolioIsOpen(false);
            }}
            className={
              pathname === "/About"
                ? "md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
          >
            About
          </Link>
          <li
            className={
              pathname === "/Lifestyle" ||
              pathname === "/Studio" ||
              pathname === "/Events" ||
              pathname === "/Business"
                ? "md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
            onClick={portfoliodrop}
          >
            Portfolio
          </li>
          {/* code for th dropdown button on computer */}
          {portfolioisOpen && (
            <div className="absolute  top-10 m-auto w-32 gap-10 rounded-lg right-[5rem] h-auto p-4  bg-black">
              <div>
                <ul className="text-orange-400  text-center">
                  <Link
                    href="/Events"
                    className={
                      pathname === "/Events"
                        ? "md:text-2xl cursor-pointer  text-green-600"
                        : "text-orange-400 cursor-pointer md:text-2xl"
                    }
                    onClick={() => {
                      navigate("/event");
                      setPortfolioIsOpen(false);
                    }}
                  >
                    Events
                  </Link>
                  <br />
                  <Link
                    href="/Studio"
                    className={
                      pathname === "/Studio"
                        ? "md:text-2xl cursor-pointer  text-green-600"
                        : "text-orange-400 cursor-pointer md:text-2xl"
                    }
                    onClick={() => {
                      setPortfolioIsOpen(false);
                    }}
                  >
                    Studio
                  </Link>
                  <br />
                  <Link
                    href="/Lifestyle"
                    className={
                      pathname === "/Lifestyle"
                        ? "md:text-2xl cursor-pointer  text-green-600"
                        : "text-orange-400 cursor-pointer md:text-2xl"
                    }
                    onClick={() => {
                      setPortfolioIsOpen(false);
                    }}
                  >
                    Lifestyle
                  </Link>
                  <br />
                  <Link
                    href="/Business"
                    className={
                      pathname === "/Business"
                        ? "md:text-2xl cursor-pointer  text-green-600"
                        : "text-orange-400 cursor-pointer md:text-2xl"
                    }
                    onClick={() => {
                      setPortfolioIsOpen(false);
                    }}
                  >
                    Business
                  </Link>
                </ul>
              </div>
            </div>
          )}

          <Link
            href="/Contact"
            onClick={() => {
              setIsOpen(false);
              setPortfolioIsOpen(false);
            }}
            className={
              pathname === "/Contact"
                ? "md:text-2xl cursor-pointer  text-green-600"
                : "text-orange-400 cursor-pointer md:text-2xl"
            }
          >
            Contact
          </Link>
        </ul>

        <div className="md:hidden relative top-1 right-[40px] text-xl cursor-pointer">
          <button onClick={toggleNavbar} className="text-orange-400">
            {isOpen ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </nav>

      {/* mobile menu  */}
      {isOpen ? (
        <div
          className="w-[100%]  flex bg-grey h-screen  justify-center items-center
           bg-white relative right-0 pt-7 "
        >
          <ul className=" gap-10  text-3xl flex flex-col  text-blue">
            <Link
              href="/About"
              className={
                pathname === "/About"
                  ? "md:text-2xl cursor-pointer  text-green-600"
                  : "text-orange-400 cursor-pointer md:text-2xl"
              }
              onClick={() => {
                setIsOpen(false);
                setPortfolioIsOpen(false);
              }}
            >
              About
            </Link>
            <li
              className="text-orange-400 cursor-pointer md:text-2xl"
              onClick={portfoliodrop}
            >
              Portfolio
            </li>
            {/* code for the portfolio  dropdown button on mobile device  */}
            {portfolioisOpen && (
              <div className=" bg-black w-44  gap-5 rounded-xl h-auto m-auto p-9 absolute ">
                <div>
                  <ul className="text-orange-400 gap-2 text-center flex flex-col ">
                    <Link
                      href="/Events"
                      className={
                        pathname === "/Events"
                          ? "md:text-2xl cursor-pointer  text-green-600"
                          : "text-orange-400 cursor-pointer md:text-2xl"
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setPortfolioIsOpen(false);
                      }}
                    >
                      Events
                    </Link>
                    <Link
                      href="/Studio"
                      className={
                        pathname === "/Studio"
                          ? "md:text-2xl cursor-pointer  text-green-600"
                          : "text-orange-400 cursor-pointer md:text-2xl"
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setPortfolioIsOpen(false);
                      }}
                    >
                      Studio
                    </Link>
                    <Link
                      href="/Lifestyle"
                      className={
                        pathname === "/Lifestyle"
                          ? "md:text-2xl cursor-pointer  text-green-600"
                          : "text-orange-400 cursor-pointer md:text-2xl"
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setPortfolioIsOpen(false);
                      }}
                    >
                      Lifestyle
                    </Link>
                    <Link
                      href="/Business"
                      className={
                        pathname === "/Business"
                          ? "md:text-2xl cursor-pointer  text-green-600"
                          : "text-orange-400 cursor-pointer md:text-2xl"
                      }
                      onClick={() => {
                        setIsOpen(false);
                        setPortfolioIsOpen(false);
                      }}
                    >
                      Business
                    </Link>
                  </ul>

                  <hr className="w-40 ml-[-30%] mt-4" />
                  <button
                    className="text-orange-400 flex justify-center mt-2 cursor-pointer md:text-2xl"
                    onClick={() => {
                      setPortfolioIsOpen(false);
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            <Link
              href="/Contact"
              className={
                pathname === "/Contact"
                  ? "md:text-2xl cursor-pointer  text-green-600"
                  : "text-orange-400 cursor-pointer md:text-2xl"
              }
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
            >
              Contact
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Nav;
