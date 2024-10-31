"use client";
import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
    const [images] = useState([
        { source: '/fisio1.jpg', alt: 'Description for Image 1', title: 'Title 1' },
        { source: '/fisio2.jpg', alt: 'Description for Image 2', title: 'Title 2' },
    ]);

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="flex flex-col items-center mt-10 mb-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl">Galeria de Fotos</h1>
                <p className="text-lg mt-2">Eternizando momentos com meus pequenos e comemorando suas evoluções.</p>
            </div>

            <Slider {...settings} className="w-full md:w-1/2">
                {images.map((item, index) => (
                    <div key={index} className="flex justify-center items-center relative text-center">
                        <img
                            src={item.source}
                            alt={item.alt}
                            className="w-full h-[80vh] md:h-[50vh] object-cover"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white py-4">
                            {item.title}
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};