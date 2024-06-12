"use client";

import React, { useState, useEffect } from 'react';

const images = [
    '/ucr-images/club-centro.jpg',
    '/ucr-images/club-centro-b.jpg',
    '/ucr-images/principal.jpg',
];

const About = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length);
        }, 3000); // Cambia la imagen cada 3000 milisegundos (3 segundos)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black">
            <div className="flex flex-col lg:flex-row items-center justify-center bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl">
                <div className="w-full lg:w-1/2">
                    <img src={images[currentImage]} alt="Carrusel de imágenes" className="w-full h-full object-cover" style={{ height: '400px' }} />
                </div>
                <div className="w-full lg:w-1/2 p-8 flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-extrabold mb-4 text-gray-800">Acerca de nosotros:</h1>
                    <p className="mb-8 text-gray-600">Somos un grupo de estudiantes de ...........</p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-black text-white hover:bg-gray-700 py-2 px-4 rounded">
                            Contactar
                        </button>
                        <button className="bg-white border border-black text-black hover:bg-gray-200 py-2 px-4 rounded">
                            Redes Sociales
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
