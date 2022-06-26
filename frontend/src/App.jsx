import Header from "@components/Header";
import GlobalStyle from "./style";
import Footer from "@components/Footer";
import Home from "@pages/Home";
import Investissement from "@pages/Investissement";
import Gestion from "@pages/Gestion";
import GameOver from "@pages/GameOver";
import Embauche from "@pages/Embauche";
import { Reset } from "styled-reset";
import { StatsContext } from "./services/contexts/index";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <StatsContext>
        <Reset />
        <GlobalStyle>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/investissement" element={<Investissement />} />
            <Route path="/gestion" element={<Gestion />} />
            <Route path="/embauche" element={<Embauche />} />
            <Route path="/gameover" element={<GameOver />} />
          </Routes>
          <Footer />
        </GlobalStyle>
      </StatsContext>
    </div>
  );
}

export default App;
