import { CSSProperties } from "react";
import SNSIcon, { SNSIconProps } from "./SNSIcon";
import SNSText, { SNSTextProps } from "./SnsText";
type SNSLoginProps = {
  SNSIconP: SNSIconProps;
  SNSTextP: SNSTextProps;
  SNSColor: "#1877F2" | "black" | "white";
};
const SNSLogin = ({ SNSIconP, SNSTextP, SNSColor }: SNSLoginProps) => {
  const style: CSSProperties = {
    backgroundColor: SNSColor,
  };

  return (
    <>
      <div>
        <SNSIcon {...SNSIconP} />
        <SNSText {...SNSTextP} />
      </div>
    </>
  );
};
export default SNSLogin;
