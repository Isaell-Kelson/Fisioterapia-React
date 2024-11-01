"use client";
import React, {useEffect, useRef} from 'react';
import 'leaflet/dist/leaflet.css';

export default function Region() {
    const mapId = 'map-section';
    const mapRef = useRef(null);

    useEffect(() => {
        const L = require('leaflet');
        L.Icon.Default.imagePath = '/';

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    initMap();
                    observer.disconnect();
                }
            });
        });

        const section = document.querySelector(`#${mapId}`);
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    const initMap = () => {
        const L = require('leaflet');
        const map = L.map(mapRef.current, {
            center: [-8.8137, -36.9541],
            zoom: 7,
            zoomControl: false,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        setTimeout(() => {
            map.flyTo([-8.047562, -34.877001], 13, {
                animate: true,
                duration: 2,
            });

            setTimeout(() => {
                L.marker([-8.047562, -34.877001], {
                    icon: new L.Icon({
                        iconUrl: '/marker-icon.png',
                        shadowUrl: '/marker-shadow.png',
                    }),
                }).addTo(map)
                    .bindPopup('<b>Recife e Região</b>')
                    .openPopup();
            }, 2000);
        }, 1000);
    };

    return (
        <section
            className="map-section flex flex-col items-center p-5 relative"
            id={mapId}
            style={{zIndex: 10}}
        >
            <div className="map-section__header text-center mb-5">
                <h2 className="map-section__title text-4xl text-gray-800 p-2">Atendimentos</h2>
                <h3 className="map-section__subtitle text-xl text-gray-600 mb-24">
                    Região onde nossos serviços alcançam
                </h3>
            </div>
            <div className="map-section__content flex flex-col md:flex-row gap-5 w-full justify-center flex-wrap">
                <div
                    className="map-section__map flex-1 w-full max-w-[600px]"
                    style={{position: "relative", zIndex: 10}}
                >
                    <div
                        className="map-section__map-container h-[400px] w-full rounded-lg shadow-lg"
                        ref={mapRef}
                        style={{
                            position: "relative",
                            zIndex: 10
                        }}
                    ></div>
                </div>
                <div className="map-section__text-content flex-1 w-full max-w-[600px] flex items-center">
                    <p className="map-section__description text-base text-gray-700 leading-6 text-justify m-0 p-2 bg-gray-50 border-2 border-teal-300 rounded">
                        Nossos serviços de fisioterapia pediátrica estão disponíveis em Recife e região, oferecendo
                        cuidados especializados para crianças de todas as idades. Nossa equipe é altamente qualificada
                        para tratar uma ampla gama de condições, desde problemas de desenvolvimento motor até lesões e
                        reabilitação. Com um ambiente acolhedor e equipamentos de ponta, garantimos que cada sessão seja
                        eficaz e agradável para seus pequenos. Entre em contato conosco para saber mais sobre como podemos ajudar seu filho
                        a alcançar seu pleno potencial.
                    </p>
                </div>
            </div>
        </section>
    );

}
