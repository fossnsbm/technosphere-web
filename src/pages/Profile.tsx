import "../styles/profile.scss";
import grid from "../assets/grid.png";


import pfp from "../assets/pfp.png";

import upload from "../assets/upload_icon.svg";
import { useState ,useRef } from "react";
import CheckBox from "../components/CheckBox";
import TextField, { InputType } from "../components/TextField";
import Dropdown, { PositionType } from "../components/Dropdown";

const Profile = () => {
  const [inPerson, setInPerson] = useState(false);
  const [isProfileFeatureEnabled, setIsProfileFeatureEnabled] = useState(false);
  const [formData, setFormData] = useState({
    fullName: null,
    email: null,
    batch: null,
    phone_guests: null,
    phone_students: null,
    food_preference: null,
  });
  const handleInPersonToggleChange = (event : any) => { 
    setInPerson(!inPerson)
  }; 
  const handleProfileToggleChange = (event : any) => { 
    setIsProfileFeatureEnabled(!isProfileFeatureEnabled)
  }; 
  return (
    <section className="profile">
      {/* <div className="grid">
        <img src={grid} alt="" />
      </div> */}
      <div className="profile_content">
        <div className="center">
          <div className="profile_photo">
            <div className="photo_display">
              <img src={pfp} alt="" />
            </div>
            <div className="photo_upload_container">
            <button className="btn">change profile photo</button>

              {/* <span className="btn btn_upload">
                <p>update photo</p>
                <img src={upload} alt="" />
              </span> */}
              <div className="homepage_append_toggle">
                <CheckBox onChange={handleProfileToggleChange}/>
                <h5>Feature my profile in home page</h5>
              </div>
            </div>
          </div>

          <div className="attendance_toggle">
            <div className="toggle_para">
            <CheckBox onChange={handleInPersonToggleChange}/>
              <h5>Will you be able to attend the in-person event?</h5>
            </div>
            <p>
              The in-person event will be held on 02.12.2022 at NSBM Green
              University premises. This event is only for the NSBM Green
              University students and if you’re a student from another
              university and willing to participate in the in-person event,
              please contact us - 077 329 8319
            </p>
          </div>
          <div className="form_data-default">
            <TextField title="Full Name" placeholder="Thaanu Perera" obscured={false} type={InputType.Text}/>
            {!inPerson && <TextField title="Phone" placeholder="07X-XXX-XXXX" obscured={false} type={InputType.Number}/>}
            <TextField title="E-mail" placeholder="username@student.nsbm.ac.lk" obscured={false} type={InputType.Text}/>
          </div>
          {inPerson && (
            <div className="form_data-secondary">
              <div className="row">
              <Dropdown placeholder="Batch" items={['19.2' , '20.1' , '20.2' , '20.3' , '21.1' , '22.1' , '22.2']} position={PositionType.Up}/>
                <TextField title="Phone" placeholder="" obscured={false}  type={InputType.Text}/>
              </div>
              <Dropdown placeholder="Food Preferences" items={['Vegetarian' , 'Non-vegetarian']} position={PositionType.Down}/>
              {/* <TextField title="Food Preferences" placeholder=""/> */}

            </div>
          )}
          <div className="btn_container">
            <button className="btn">update profile</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
