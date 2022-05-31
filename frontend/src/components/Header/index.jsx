import SHeader from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import logo from "../../assets/logoBigBill1.png";
import { Link } from "react-router-dom";

export default function Header() {
  const { choice, setChoice } = useContext(statsContext);
  return (
    <SHeader>
      <div className="displayButton">
        <Link to="/investissement">
          <button>Investissement</button>
        </Link>
        <Link to="/gestion">
          <button>Gestion</button>
        </Link>
        <Link to="/embauche">
          <button>Embauché</button>
        </Link>
      </div>
    </SHeader>
  );
}
