import SAvatar from "./style";
import mainLogo1 from "../../assets/BigBill.png";

export default function Wallet() {
  return (
    <SAvatar>
      <div className="mainLogo">
        <img src={mainLogo1} />
      </div>
    </SAvatar>
  );
}
