import "../styles/profile.scss";

import pfp from "../assets/user_profile.png";
import { useState, useRef, useEffect } from "react";
import CheckBox from "../components/global/CheckBox";
import TextField, { InputType } from "../components/global/TextField";
import Dropdown, { PositionType } from "../components/global//Dropdown";
import HeaderMenus from "../components/headerMenus/headerMenus";

const Profile = () => {
  const [inPerson, setInPerson] = useState(false);
  const [isProfileFeatureEnabled, setIsProfileFeatureEnabled] = useState(false);
  const [batch, setBatch] = useState<string>("20.1");

  const [formData, setFormData] = useState({
    fullName: null,
    email_student: null,
    email_guest: null,
    batch: null,
    phone_guests: null,
    phone_students: null,
    food_preference: null,
  });

  const handleInPersonToggleChange = (_event: React.FormEvent) => {
    setInPerson(!inPerson);
  };

  const handleProfileToggleChange = (_event: React.FormEvent) => {
    setIsProfileFeatureEnabled(!isProfileFeatureEnabled);
  };

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl: any = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e: any) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };
  return (
    <section className="profile">
      <HeaderMenus />
      {/* <div className="grid">
        <img src={grid} alt="" />
      </div> */}
      <div className="profile_content">
        <div className="center">
          <div className="profile_photo">
            <div className="photo_display">
              <img src={preview ?? pfp} alt="" />
            </div>
            <div className="photo_upload_container">
              <input
                type="file"
                id="files"
                className="hidden"
                onChange={onSelectFile}
              />
              <label htmlFor="files" className="btn">
                upload image
              </label>
              {/* <input type="file" name="" id="" className="btn" accept="image/png, image/jpeg/" /> */}
              {/* // <button className="btn" type="upload">change photo</button> */}

              {/* <span className="btn btn_upload">
                <p>update photo</p>
                <img src={upload} alt="" />
              </span> */}
              <div className="homepage_append_toggle">
                <CheckBox onChange={handleProfileToggleChange} />
                <h5>Feature my profile in home page</h5>
              </div>
            </div>
          </div>

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
              please contact us - 077 329 8319
            </p>
          </div>
          <div className="form_data-default">
            <TextField
              title="Full Name"
              placeholder="Full Name"
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
            {inPerson ? (
              <TextField
                title="E-mail"
                placeholder="username"
                obscured={false}
                type={InputType.Email}
              />
            ) : (
              <TextField
                title="E-mail"
                placeholder="Your email address"
                obscured={false}
                type={InputType.GuestEmail}
              />
            )}
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
                  selectedItem={batch}
                  setSelectedItem={setBatch}
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
                selectedItem={batch}
                setSelectedItem={setBatch}
                placeholder="Food Preferences"
                items={["Vegetarian", "Non-vegetarian"]}
                position={PositionType.Down}
              />
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
