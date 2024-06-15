"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const images = [
    '/ucr-images/club-centro.jpg',
    '/ucr-images/club-centro-b.jpg',
    '/ucr-images/principal.jpg',
];

const AboutSection = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length);
        }, 3000); // Cambia la imagen cada 3000 milisegundos (3 segundos)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="text-white bg-gray-900" id="about">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="relative w-full h-96">
                    <Image
                        src={images[currentImage]}
                        layout="fill"
                        objectFit="cover"
                        alt="Imagen de Carrusel"
                        className="rounded-lg"
                    />
                </div>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">Acerca de Nosotros</h2>
                    <p className="text-base lg:text-lg mb-4">
                        Somos un grupo de estudiantes de Info...
                    </p>
                    <div className="flex justify-start space-x-4">
                        <button className="bg-black text-white hover:bg-gray-700 py-2 px-4 rounded">
                            Contactar
                        </button>
                        <button className="bg-white border border-black text-black hover:bg-gray-200 py-2 px-4 rounded">
                            Redes Sociales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
