import Start from "@components/Start";
import { Link } from "react-router-dom";
import SHome from "./style";
import mainLogo1 from "../assets/BigBill.png";

export default function Home() {
  return (
    <>
      <SHome>
        <div className="start">
          <section className="autre">
            <div className="Logo">
              <img src={mainLogo1} />
            </div>
            <div className="mainButton">
              <Link to="/investissement">
                <Start />
              </Link>
            </div>
          </section>

          <section className="info">
            <div className="note"></div>
            <div className="news"></div>
          </section>
        </div>
      </SHome>
    </>
  );
}
