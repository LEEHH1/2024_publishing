import { CSSProperties, useState } from "react";

const Counter = () => {
  //useState(초기값)
  const [num, setNum] = useState<number>(0);

  const handleCilckPlus = () => {
    setNum((prev) => prev + 1);
  };

  const handleCilckMinus = () => {
    setNum((prev) => (prev <= 0 ? 0 : prev - 1));
  };
  //   const [str, setUm] = useState("엄준식");

  //   const handleCilck = () => {
  //     setUm((prev) => (prev === "엄준식" ? "살아있다" : "엄준식"));
  //   };
  const style: CSSProperties = {
    display: "flex",
    gap: "20px",
    marginTop: "50px",
  };

  return (
    <>
      <div style={style}>
        <button onClick={handleCilckPlus}>Plus</button>
        <div>{num}</div>
        <button onClick={handleCilckMinus}>Minus</button>
      </div>
    </>
  );
};

export default Counter;
