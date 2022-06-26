import SHeader from "./style";
import { useContext } from "react";
import statsContext from "@services/contexts";
import { Link } from "react-router-dom";

export default function Header() {
  const { currentNotif, setCurrentNotif } = useContext(statsContext);
  const resetNotif = () => {
    setCurrentNotif("");
  };
  return (
    <SHeader>
      <div className="displayButton">
        <Link to="/investissement">
          <button>Investissement</button>
        </Link>
        <Link to="/gestion" onClick={resetNotif}>
          <button>
            Gestion
            <div className={`${currentNotif ? "notif active" : ""}`}></div>
          </button>
        </Link>
        <Link to="/embauche">
          <button>Embauché</button>
        </Link>
      </div>
    </SHeader>
  );
}
