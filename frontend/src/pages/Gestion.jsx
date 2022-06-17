import Counter from "@components/Counter";
import Timer from "@components/Timer";
import Modal from "@components/Modal";
import Logo from "@components/Logo";
import GaleryGestion from "@components/GalleryGestion";
import { useContext } from "react";
import { useEffect } from "react";
import StatsContext from "../services/contexts/index";
import Chart from "@components/Chart";

export default function Game() {
  const { timer, money, endGameFunc } = useContext(StatsContext);
  useEffect(() => {
    endGameFunc();
  }, [timer, money]);

  return (
    <main>
      <Modal />
      <section className="gallery">
        <GaleryGestion />
      </section>
      <section className="stats">
        <div className="cadre">
          <Logo />
          <Counter />
          <Timer />
          <Chart />
        </div>
      </section>
    </main>
  );
}
