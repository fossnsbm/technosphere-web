import "./TextField.css";
import eye from "../../assets/eye.svg";
import { ChangeEvent, useState } from "react";

export enum InputType {
  Number = "number",
  Text = "text",
  GuestEmail = "email",
  Email = "text",
}

interface AppState {
  title: string;
  obscured?: boolean;
  type?: InputType;
  placeholder: string;
  errorText?: string | undefined;
  value?: string;
  error?: boolean | undefined;
  name?: string;
  helperText?: string | false | undefined;
  onChange?: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
}
const TextField = ({
  title,
  placeholder,
  type,
  obscured,
  error,
  errorText,
  value,
  name,
  onChange,
}: AppState) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="textf_bg">
      <div className="label-row">
        <p>{title}</p>
        {error && <h6>{errorText}</h6>}
      </div>
      <span>
        {type === InputType.Email && (
          <div className="postfix">@student.nsbm.ac.lk</div>
        )}
        <input
          type={obscured ? (visible ? "text" : "password") : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
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
