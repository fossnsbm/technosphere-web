import "./TextField.css";

export enum InputType {
  Number,
  Text,
}
interface AppState {
  title: string;
  obscured: boolean;
  type: InputType;
  placeholder: string;
}
const TextField = ({ title, placeholder }: AppState) => {
  return (
    <div className="textf_bg">
      <p>{title}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default TextField;
