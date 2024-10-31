import React from "react";
import Logo from "../../../public/logo.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-teal-300 2xl:mt-20 sm:mt-14">
            <svg
                className="relative w-full"
                viewBox="0 0 1536 200"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
            >
                <path
                    fill="rgba(255, 255, 255, 1)"
                    d="M 0 32 C 467.4 32 311.6 110 779 110 L 779 110 L 779 0 L 0 0 Z"
                    strokeWidth="0"
                ></path>
                <path
                    fill="rgba(255, 255, 255, 1)"
                    d="M 778 110 C 1226.8 110 1077.2 0 1526 0 L 1526 0 L 1526 0 L 778 0 Z"
                    strokeWidth="0"
                ></path>
            </svg>

            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="flex flex-col items-center">
                    <div className="flex items-center mb-4">
                        <Image src={Logo} className="w-24 h-24 md:w-32 md:h-32 lg:w-44 lg:h-44" alt="Logo"/>
                        <span
                            className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap text-fuchsia-400 ml-2">
                            Roberta Karlize
                        </span>
                    </div>

                    <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
                        Meu objetivo é proporcionar uma recuperação rápida e eficaz para você.
                    </p>
                    <div className="flex mb-4">
                        <a
                            href="https://www.instagram.com/robertakarlize/"
                            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                            aria-label="Instagram"
                        >
                            <img
                                className="w-8 h-8"
                                src="/instagram-svgrepo-com.svg"
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                <div className="text-center py-4 text-gray-500 dark:text-gray-400 text-sm">
                    © 2024{" "}
                    <a>
                        Roberta Karlize™
                    </a>
                    . Todos os Direitos Reservados.
                </div>
                <div
                    className="relative text-center py-4 text-gray-500 dark:text-gray-400 text-sm flex items-center justify-center">
                    <a className="flex items-center mr-2" href="https://www.linkedin.com/in/isaell-kelson-8667a1251/">
                        <img
                            className="w-6 h-6"
                            src="/linkedin-svgrepo-com.svg"
                            alt="LinkedIn"
                        />
                    </a>
                    <span>Desenvolvido por Isaell Kelson</span>
                </div>

            </div>
        </footer>
    );
}
