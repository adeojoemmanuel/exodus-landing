import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Features from "./components/Features";
import HowOlympusWorks from "./components/HowOlympusWorks";
import Sustainable from "./components/Sustainable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <HowOlympusWorks />
      <Features />
      <Sustainable />
    </div>
  );
}

export default App;
