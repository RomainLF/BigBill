import SHeader from "./style";
import logo from "../../assets/logoBigBill.png";

export default function Header() {
  return (
    <SHeader>
      <img src={logo} alt="logo" />
    </SHeader>
  );
}
