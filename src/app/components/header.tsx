import Image from "next/image";
import Logo from "../../../public/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <nav className="fixed top-0 w-full h-24 bg-slate-200 opacity-80 flex items-center justify-between p-1 z-20">
      <div className="flex-shrink-0">
        <Image src={Logo} alt="logo" className="w-20 md:w-32" />
      </div>
      <div className="text-center md:text-left md:ml-4">
        <h1 className="text-zinc-800 font-normal text-gray-800 text-lg md:text-3xl">Roberta Karlize</h1>
        <h2 className="mt-1 md:mt-0 lg:ml-5 text-gray-950 text-xs md:text-sm">SAÚDE EM MOVIMENTO</h2>
      </div>
      <button
        type="button"
        className="ml-auto h-12 w-28 mr-3 lg:h-16 lg:w-36 focus:outline-none flex items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xs md:text-sm px-4 py-1 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="me-1" />
        <span>AGENDE AGORA!</span>
      </button>
    </nav>
  );
}
