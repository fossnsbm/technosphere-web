import "../styles/register.scss";

import pfp from "../assets/pfp.png";

import upload from "../assets/upload_icon.svg";
import { useState ,useRef } from "react";
import CheckBox from "../components/global/CheckBox";
import TextField, { InputType } from "../components/global/TextField";
import Dropdown, { PositionType } from "../components/global//Dropdown";
import HeaderMenus from "../components/headerMenus/headerMenus";

const Register = () => {
  const [inPerson, setInPerson] = useState(false);
  const [isRegisterFeatureEnabled, setIsRegisterFeatureEnabled] = useState(false);

  const [formData, setFormData] = useState({
    fullName: null,
    email: null,
    batch: null,
    phone_guests: null,
    phone_students: null,
    food_preference: null,
  });

  const handleInPersonToggleChange = (_event: React.FormEvent) => {
    setInPerson(!inPerson);
  };

  const handleRegisterToggleChange = (_event: React.FormEvent) => {
    setIsRegisterFeatureEnabled(!isRegisterFeatureEnabled);
  };

  return (
    <section className="register">
      <HeaderMenus/>
      {/* <div className="grid">
        <img src={grid} alt="" />
      </div> */}
      <div className="register_content">
        <div className="center">
          <div className="attendance_toggle">
            <div className="toggle_para">
              <CheckBox onChange={handleInPersonToggleChange} />
              <h5>Will you be able to attend the in-person event?</h5>
            </div>
            <p>
              The in-person event will be held on 02.12.2022 at NSBM Green
              University premises. This event is only for the NSBM Green
              University students and if you're a student from another
              university and willing to participate in the in-person event,
              please contact us - 071 311 2927
            </p>
          </div>
          <div className="form_data-default">
            <TextField
              title="Full Name"
              placeholder="Thaanu Perera"
              obscured={false}
              type={InputType.Text}
            />
            {!inPerson && (
              <TextField
                title="Phone"
                placeholder="07X-XXX-XXXX"
                obscured={false}
                type={InputType.Number}
              />
            )}
            <TextField
              title="E-mail"
              placeholder="username@student.nsbm.ac.lk"
              obscured={false}
              type={InputType.Text}
            />
          </div>
          {inPerson && (
            <div className="form_data-secondary">
              <div className="row">
                <Dropdown
                  placeholder="Batch"
                  items={[
                    "19.2",
                    "20.1",
                    "20.2",
                    "20.3",
                    "21.1",
                    "22.1",
                    "22.2",
                  ]}
                  position={PositionType.Up}
                />
                <TextField
                  title="Phone"
                  placeholder=""
                  obscured={false}
                  type={InputType.Number}
                />
              </div>
              <Dropdown
                placeholder="Food Preferences"
                items={["Vegetarian", "Non-vegetarian"]}
                position={PositionType.Down}
              />
              {/* <TextField title="Food Preferences" placeholder=""/> */}
            </div>
          )}
          <div className="btn_container">
            <button className="btn">Register</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;