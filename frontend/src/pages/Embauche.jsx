import Counter from "@components/Counter";
import Avatar from "@components/Avatar";
import Timer from "@components/Timer";
import Modal from "@components/Modal";
import Logo from "@components/Logo";
import GaleryEmbauche from "@components/GalleryEmbauche";
import { useContext } from "react";
import { useEffect } from "react";
import StatsContext from "../services/contexts/index";
import Header from "@components/Header";
import FooterGame from "@components/FooterGame";

export default function Game() {
  const { timer, money, endGameFunc } = useContext(StatsContext);
  useEffect(() => {
    endGameFunc();
  }, [timer, money]);

  return (
    <main>
      <Modal />
      <Header />
      <section className="gallery">
        <GaleryEmbauche />
      </section>
      <section className="stats">
        <FooterGame />
        <Avatar />
      </section>
    </main>
  );
}
