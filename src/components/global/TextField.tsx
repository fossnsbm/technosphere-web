import "./TextField.css";
import eye from "../../assets/eye.svg";
import { useState } from "react";

export enum InputType {
  Number = "number",
  Text = "text",
  GuestEmail = "",
  Email = "email",

}
interface AppState {
  title: string;
  obscured: boolean;
  type: InputType;
  placeholder: string;

}
const TextField = ({ title, placeholder, type, obscured  }: AppState) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="textf_bg">
      <p>{title}</p>
      <span>
        {type === InputType.Email && (
          <div className="postfix">@student.nsbm.ac.lk</div>
        )}
        <input
          type={obscured ? (visible ? "text" : "password") : type}
          placeholder={placeholder}
        />
        {obscured && (
          <div className="eye" onClick={() => setVisible(!visible)}>
            <img src={eye} alt="" />
          </div>
        )}
      </span>
    </div>
  );
};

export default TextField;
