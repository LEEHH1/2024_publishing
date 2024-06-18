// import { CSSProperties } from "react";

import { CSSProperties } from "react";
import { IconType } from "react-icons";
import { MdCancel } from "react-icons/md";

// type circleColor = {
//   backgroundColor: string;
// };

// const circleStyle = ({ backgroundColor }: circleColor) => {
//   const circle: CSSProperties = {
//     width: "10px",
//     height: "10px",
//     borderRadius: "10px",
//     backgroundColor: backgroundColor,
//   };

//   return (
//     <>
//       <div style={circle}></div>
//     </>
//   );
// };

// export default circleStyle;

export type Color = "#F44336" | "#ff9800" | "#2196f3" | "#BDBDBD";

type CircleProps = {
  backgroundColor: Color;
  hasCancel?: boolean;
};

const Circle = ({
  backgroundColor = "#BDBDBD",
  hasCancel = false,
}: CircleProps) => {
  const style: CSSProperties = {
    borderRadius: "50%",
    width: "16px",
    height: "16px",
    backgroundColor: backgroundColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
  };
  const iconStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={style}>
      <span style={iconStyle}>{hasCancel ? <MdCancel /> : null}</span>
    </div>
  );
};
export default Circle;
