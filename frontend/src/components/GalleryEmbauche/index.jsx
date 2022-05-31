import SGallery from "./style";
import axios from "axios";
import { useEffect, useState } from "react";
import datas from "@assets/data";
import { useContext } from "react";
import statsContext from "@services/contexts";

export default function Gallery() {
  const [dataImmo, setDataImmo] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5050/immo").then(({ data }) => {
      setDataImmo(data);
    });
  }, []);

  return (
    <SGallery>
      <div>Embauche</div>
    </SGallery>
  );
}
