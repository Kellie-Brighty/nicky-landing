import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Solution from "./components/Solution";
import Video from "./components/Video";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Video />
      <Solution />
      <GetStarted />
      <Roadmap />
      <Footer />
    </div>
  );
}
