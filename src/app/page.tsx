import About from "@/components/about";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import Places from "@/components/places";
import Footer from "@/components/footer";
import React from "react";


export default function Home() {
    return (
        <div className="bg-[#000020] text-black">

            <Header/>

            <HeroSection/>

            <Places/>

            <About/>

            <Footer/>
        </div>
    );
}
