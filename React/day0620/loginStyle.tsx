import {
  CSSProperties,
  ChangeEvent,
  ChangeEventHandler,
  useState,
} from "react";

type inputText = {
  placeholder: string;
  type: "text" | "password";
  id: string;
  handlechange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LoginInput = ({ placeholder, type, id, handlechange }: inputText) => {
  const inputStyle: CSSProperties = {
    backgroundColor: "#f5f5f5",
    width: "500px",
    height: "45px ",
    border: "1px solid white",
    borderRadius: "5px",
  };

  return (
    <>
      <input
        style={inputStyle}
        type={type}
        name="name"
        id={id}
        placeholder={placeholder}
        onChange={handlechange}
      />
    </>
  );
};

export default LoginInput;
