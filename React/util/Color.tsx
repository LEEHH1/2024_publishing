type HolidayColor = "blue" | "red";
type WekkdayColor = "black";

const changeColor = (yoil: number): HolidayColor | WekkdayColor => {
  const dayColorMap: { [key: number]: HolidayColor } = {
    0: "red",
    6: "blue",
  };
  return dayColorMap[yoil] || "black";
};
export default changeColor;
