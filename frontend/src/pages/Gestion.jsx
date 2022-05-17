import Counter from "@components/Counter";
import Avatar from "@components/Avatar";
import Timer from "@components/Timer";
import Modal from "@components/Modal";
import GaleryGestion from "@components/GalleryGestion";
import { useContext } from "react";
import { useEffect } from "react";
import StatsContext from "../services/contexts/index";

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
          <Counter />
          <Timer />
        </div>
        <Avatar />
      </section>
    </main>
  );
}
