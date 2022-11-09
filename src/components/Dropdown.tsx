import { useState } from "react";
import "./dropdown.css";


interface props{
    placeholder : string,
    items  : string[]
}
const Dropdown = ({placeholder , items} : props) => {
  const [active, setActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  return (

      <div className="dropdown_bg" onClick={() => setActive(!active)}>
        <p>{placeholder}</p>
        <div className="dropdown"><p>{selectedItem ? selectedItem : `Select ${placeholder}`}</p></div>
        {active && (
          <div className="dropdown_items">
            <ul>
              {items.map((x) => <li onClick={() => setSelectedItem(x)}>{x}</li>)}
            </ul>
          </div>
        )}
      </div>

  );
};

export default Dropdown;
