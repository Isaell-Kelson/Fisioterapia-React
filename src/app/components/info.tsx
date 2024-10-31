"use client";
import React, { useState, useEffect } from 'react'
import Image from "next/image";
import Photo from "../../../public/fisio3.jpg";
import '../././style/info.css';

export default function Info() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    
    const triggerPoint = 200;

    if (scrollY > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative py-10 mt-14">
      <div className={`flex justify-center items-center mt-20 ${isVisible ? 'animate-slideIn' : 'invisible'}`}>
        <div className="relative mr-36">
          <Image src={Photo} alt="photo" className="w-60 sm:w-72 lg:mr-48"></Image>
        </div>
        <div className="p-5 w-52 sm:w-96  border-4 border-pink-300 absolute ml-48 sm:ml-60 bg-white">
          <div className="flex flex-col items-center">
            <h1 className="sm:text-3xl text-sm font-semibold text-teal-300">
              Roberta Karlize: Fisioterapia Pediátrica Especializada
            </h1>
            <p className="text-center text-xs lg:text-base mt-4 text-teal-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
