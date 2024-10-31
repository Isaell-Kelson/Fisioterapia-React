import React from "react";
import Image from "next/image";
import Work1 from "../../../public/work1.jpg";

const services = [
    {
        id: 1,
        title: "Avaliação Fisioterapêutica Pediátrica",
        description: "Agende uma avaliação especializada para seu filho e proporcione a ele o cuidado e atenção que merece",
    },
    {
        id: 2,
        title: "Tratamento Fisioterapêutico Pediátrico",
        description: "Nosso tratamento oferece cuidados especializados e personalizados para ajudar as crianças a alcançarem seu pleno potencial de movimento e desenvolvimento.",
    },
    {
        id: 3,
        title: "Reabilitação Fisioterapêutica Pediátrica",
        description: "Nosso serviço de reabilitação ajuda as crianças a alcançarem seu máximo potencial de movimento e funcionalidade.",
    },
];

export default function Work() {
    const whatsappNumber = ""; // WhatsApp number


    const handleWhatsAppRedirect = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <section className="w-full mt-n-15 bg-teal-300">
            <div className="relative mt-16">
                <svg
                    className="absolute w-full"
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
                <div className="grid grid-cols-1">
                    <h1 className="text-white text-center font-extrabold font-mono text-4xl mt-32">
                        CONHEÇA NOSSOS PRODUTOS E SERVIÇOS
                    </h1>
                    <p className="grid grid-cols1 text-center text-white mt-5">
                        Oferecemos atendimento especializado em fisioterapia pediátrica,
                        garantindo o melhor cuidado para o seu filho em Recife e Região.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center bg-teal-300">
                    {services.map((service) => (
                        <div key={service.id} className="grid place-items-center">
                            <Image
                                src={Work1}
                                alt={`work${service.id}`}
                                className="rounded-full h-40 w-40 object-cover border-4 md:mt-20 lg:mt-32 mt-5"
                            />
                            <h2 className="text-center text-white font-extrabold">
                                {service.title}
                            </h2>
                            <p className="text-center text-white text-sm">
                                {service.description}
                            </p>
                            <div className="grid place-items-center mt-3 p-5">
                                <button
                                    className="border-2 w-36 rounded-xl font-light text-white text-sm py-2 px-4 transition-transform transform hover:scale-105 shadow-md"
                                    onClick={handleWhatsAppRedirect}
                                >
                                    FALE CONOSCO
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
