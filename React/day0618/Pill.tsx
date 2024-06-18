import { CSSProperties } from "react";
import Circle, { Color } from "./Circle";
import Text, { TextProps } from "./buttonText";

type PillProps = {
  CircleColor: Color;
  textContent: TextProps;
};

const Pill = ({ CircleColor, textContent }: PillProps) => {
  const style: CSSProperties = {
    padding: "5px",
    border: "1px solid #E0E0E0",
    borderRadius: "16px",
    display: "flex",
    alignContent: "center",
    gap: "3px",
  };
  return (
    <div style={style}>
      <Circle backgroundColor={CircleColor} />
      <Text text={textContent.text} />
      <Circle backgroundColor="#BDBDBD" hasCancel={true} />
    </div>
  );
};
export default Pill;
