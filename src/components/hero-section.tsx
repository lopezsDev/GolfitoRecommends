"use client";

import { Input } from "@/components/ui/input";
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
    const videoRef = useRef(null);
    const videoSources = ["/Video1.mp4", "/Video2.mp4", "/Video3.mp4"];
    let currentVideoIndex = 0;

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleVideoEnd = () => {
            currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
            videoElement.src = videoSources[currentVideoIndex];
            videoElement.play();
        };

        videoElement.addEventListener('ended', handleVideoEnd);
        videoElement.src = videoSources[currentVideoIndex];
        videoElement.play();

        return () => {
            videoElement.removeEventListener('ended', handleVideoEnd);
        };
    }, []);

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                Golfito Recommendations
                            </h1>
                            <p className="max-w-[600px] text-muted-foreground md:text-xl">
                                Explore, discover and enjoy. Our platform guides you to the best places near you,
                                from restaurants and bars to parks and museums - start your next local adventure with us
                                today!
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <form className="flex gap-2">
                                <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
                                <Button type="submit">Get Started</Button>
                            </form>
                            <p className="text-xs text-muted-foreground">
                                Sign up to unlock the full potential of our platform.{" "}
                                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                                    Terms &amp; Conditions
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="relative flex justify-center items-center">
                        <div className="video-wrapper overflow-hidden rounded-xl shadow-lg">
                            <video ref={videoRef} className="rounded-xl object-cover w-full h-full" muted autoPlay loop>
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
