import About from "@/components/about";
import HeroSection from "@/components/hero-section";
import Header from "@/components/header";
import Places from "@/components/places";
import Footer from "@/components/footer";
import React from "react";




export default function Home() {
  return (
      <div>
              <Header/>
              <br></br>
              <hr></hr>
              <br></br>
              <HeroSection/>
              <br></br>
              <hr></hr>
              <br></br>
              <Places/>
              <br></br>
              <hr></hr>
              <br></br>
              <About/>
              <br></br>
              <hr></hr>
              <br></br>
              <Footer/>
      </div>
  );
}
