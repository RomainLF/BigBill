import SUpgrade from "./style";

export default function Upgrade(props) {
  const showPlusStats = () => {
    props.profit * 1, 20;
  };

  return (
    <SUpgrade>
      <div className="test">
        <div className="five">
          <button
            className="cube cube1"
            onClick={() => {
              showPlusStats();
            }}
          ></button>
          <button className="cube cube2"></button>
          <button className="cube cube3"></button>
          <button className="cube cube4"></button>
          <button className="cube cube5"></button>
        </div>
        <div className="up">
          <p>UPGRADE</p>
        </div>
      </div>
    </SUpgrade>
  );
}
