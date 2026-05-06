import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stack from "./components/Stack";

const App = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 py-2 md:px-8 xl:px-16 2xl:px-0">
      <Header />
      <Hero />
      <AboutMe />
      <Services />
      <Stack />
    </section>
  );
};

export default App;
