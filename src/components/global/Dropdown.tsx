import { useState } from "react";
import "./dropdown.css";
import down from "../../assets/dowm.svg";

export enum PositionType {
  Up,
  Down,
}
interface props<T> {
  placeholder: string;
  position: PositionType;
  items: string[];
  selectedItem: T;
  setSelectedItem: (item: T) => void;
}
const Dropdown = <T extends String>({
  placeholder,
  items,
  selectedItem,
  setSelectedItem,
}: props<T>) => {
  const [active, setActive] = useState(false);

  return (
    <div className="dropdown_bg" onClick={() => setActive(!active)}>
      <p>{placeholder}</p>
      <div className="dropdown">
        <p className="selected_item">{selectedItem ? selectedItem : ""}</p>
        <img
          src={down}
          alt=""
          style={{ transform: active ? `rotate(180deg)` : `rotate(0deg)` }}
        />
      </div>
      {active && (
        <div className="dropdown_items">
          <ul>
            {items.map((x: any) => (
              <li onClick={() => setSelectedItem(x)}>{x}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
