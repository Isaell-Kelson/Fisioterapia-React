import Image from "next/image";
import Logo from "../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const whatsappNumber = "5581996181228";

    useEffect(() => {

        const button = document.getElementById('whatsapp-button-mobile');
        if (button) {
            button.classList.add('animate-bounce');
        }
    }, []);

    return (
        <nav className="fixed top-0 w-full h-24 bg-slate-200 flex items-center justify-between p-1 z-20">
            <div className="flex-shrink-0">
                <Image src={Logo} alt="logo" className="w-20 md:w-32" />
            </div>
            <div className="text-center md:text-left md:ml-4">
                <h1 className="font-normal text-gray-800 text-lg md:text-3xl">Roberta Karlize</h1>
                <h2 className="mt-1 md:mt-0 lg:ml-5 text-gray-950 text-xs md:text-sm">SAÚDE EM MOVIMENTO</h2>
            </div>
            <div className="ml-auto flex items-center">
                <button
                    id="whatsapp-button"
                    type="button"
                    className="hidden md:flex h-12 w-28 mr-3 lg:h-16 lg:w-36 focus:outline-none items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-4 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
                >
                    <FontAwesomeIcon icon={faWhatsapp} className="me-1 text-2xl" />
                    <span>AGENDE AGORA!</span>
                </button>
                <a
                    id="whatsapp-button-mobile"
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden fixed bottom-5 right-5 h-16 w-16 bg-green-700 hover:bg-green-800 text-white rounded-full flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 animate-jump"
                    aria-label="WhatsApp"
                >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
                </a>
                <button
                    className="md:hidden flex items-center text-gray-800 text-3xl focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>

            {/* Menu Sanduíche */}
            {menuOpen && (
                <div className="absolute top-24 right-0 w-48 bg-white shadow-lg z-30">
                    <ul className="flex flex-col p-2">
                        <li className="py-2 px-4 hover:bg-gray-200">Início</li>
                    </ul>
                </div>
            )}

            <style jsx>{`
                .animate-jump {
                    animation: jump 0.6s infinite;
                }

                @keyframes jump {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </nav>
    );
}
