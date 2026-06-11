import Hero from "../components/Hero";
import Skills from "../components/Skills";

function Home() {
  return (
    // The page-container wrapper forces the dark background to stretch perfectly
    <div className="page-container">
      <Hero />
      <Skills />
    </div>
  );
}

export default Home;