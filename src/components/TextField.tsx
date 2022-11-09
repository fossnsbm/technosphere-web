import "./TextField.css";
interface AppState {
    title: string;
    placeholder : string
  }
const TextField = ({title,placeholder}: AppState) => {
  return (
    <div>
        <p>{title}</p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default TextField;
