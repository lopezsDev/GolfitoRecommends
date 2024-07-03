"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const images = [
    "/ucr-images/club-centro.jpg",
    "/ucr-images/club-centro-b.jpg",
    "/ucr-images/principal.jpg",
];

export function About() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((currentImage) => (currentImage + 1) % images.length);
        }, 3000); // Cambia la imagen cada 3000 milisegundos (3 segundos)

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                <div className="relative w-full h-96 mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover object-center sm:aspect-video">
                    <Image
                        src={images[currentImage]}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                        alt="About"
                        className="rounded-xl"
                        priority
                    />
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Our Company</h2>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            The app discovers and recommends the best destinations in Golfito, from serene beaches to
                            vibrant restaurants, cozy hotels and exciting adventures in national parks. Designed to personalize the user
                            experience, the app provides recommendations tailored to individual tastes and preferences, covering all types
                            of recreational venues such as soccer fields and leisure centers. With advanced technology, it offers up-to-date and reliable information, facilitating a complete and enriching
                            exploration of the region.
                        </p>
                    </div>
                    <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                        prefetch={false}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default About;
