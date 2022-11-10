import "./TextField.css";

export enum InputType {
  Number = "number",
  Text = "text",
  Email  = "email",

}
interface AppState {
  title: string;
  obscured: boolean;
  type: InputType;
  placeholder: string;
}
const TextField = ({ title, placeholder , type }: AppState) => {
  return (
    <div className="textf_bg">
      <p>{title}</p>
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default TextField;
