import React from "react";

export default function Intro() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white">
      
      <div
        className="absolute top-0 mt-24 right-0 w-full h-1/2 md:w-1/2 md:h-full lg:w-1/2 lg:h-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/fisio2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
      ></div>

      <div className="relative z-10 text-center">
        <h1 className="font-sans font-bold text-lg md:text-2xl lg:text-3xl text-fuchsia-400 mb-4">
          ROBERTA KARLIZE
        </h1>
        <div className="w-full md:w-full lg:w-96 mx-auto">
          <h2 className="font-black text-2xl md:text-4xl lg:text-5xl mb-4">
            REABILITAÇÃO INFANTIL COM AMOR
          </h2>
        </div>
        <p className="w-2/3 md:w-3/4 lg:w-10 xl:w-4/5 mx-auto text-lg lg:text-center">
          Oferecemos avaliação, tratamento e reabilitação fisioterapêutica
          pediátrica especializada, com atendimento domiciliar em Recife e
          região. Cuide da saúde e bem-estar do seu filho.
        </p>
      </div>
    </section>
  );
}
