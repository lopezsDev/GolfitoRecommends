import AboutDev from "@/app/Componentes/about";
import Header from "@/app/Componentes/header";
import Places from "@/app/Componentes/places";
import Footer from "@/app/Componentes/footer";
import RecomendationsSection from "./Recomendations/recomendations-section";



export default function Home() {
  return (
      <div>
          <Header/>
          <br></br>
          <hr></hr>
          <br></br>
          <Places/>
          <br></br>
          <hr></hr>
          <br></br>
          <AboutDev/>
          <br></br>
          <hr></hr>
          <RecomendationsSection/>
          <br></br>
          <Footer/>
      </div>
  );
}
