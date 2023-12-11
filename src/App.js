import "./App.css";
import { LandingPage } from "./landingPage";
import { SectionFive } from "./sectionFive";
import { SectionFour } from "./sectionFour";
import { SectionThree } from "./sectionThree";
import { SectionTwo } from "./sectionTwo";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
}

export default App;
