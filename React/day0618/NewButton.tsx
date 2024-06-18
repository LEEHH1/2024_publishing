import { click } from "@testing-library/user-event/dist/click";

//함수 프롭스 전달

type NewButtonProps = {
  click: () => void;
};

const NewButton = ({ click }: NewButtonProps) => {
  return <button onClick={click}>뉴버튼</button>;
};

export default NewButton;
