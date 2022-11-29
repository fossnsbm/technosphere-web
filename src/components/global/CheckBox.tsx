import "./checkmark.css";

interface AppState {
  onChange: any;
}
const CheckBox = ({ onChange }: AppState) => {
  return (
    <>
      <label className="container">
        <input type="checkbox" onChange={onChange} disabled />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default CheckBox;
