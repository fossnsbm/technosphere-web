import "../styles/profile.scss";

import pfp from "../assets/user_profile.png";
import { useState, useRef, useEffect } from "react";
import CheckBox from "../components/global/CheckBox";
import TextField, { InputType } from "../components/global/TextField";
import Dropdown, { PositionType } from "../components/global//Dropdown";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { Formik } from "formik";
import { GetUserDetails } from "../services/react-query/user/useCurrentUser";
import axios from "axios";
import { AppConfig } from "../config";

const Profile = () => {
  const [inPerson, setInPerson] = useState(false);
  const [isProfileFeatureEnabled, setIsProfileFeatureEnabled] = useState(false);
  const me = GetUserDetails();
  const [batch, setBatch] = useState<string>("20.1");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    profileImgUrl: "",
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
    console.log("object---");
    console.log(selectedFile);
  };

  async function getProfileImageURL() {
    let res = await axios.post(`${AppConfig.BACKEND_API}/users/upload`, {});

    let data = res.data;
    console.log(data);
    return data;
  }

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
            <Formik
              initialValues={formData}
              validate={(values: any) => {
                const errors: any = {};
                if (!values.email) {
                  errors.email = "This filed is Required";
                } else if (
                  !inPerson &&
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.fullName) {
                  errors.fullName = "This filed is required";
                }
                if (!inPerson && !values.phone) {
                  errors.phone = "This filed is required";
                }

                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                setTimeout(() => {
                  console.log("submitted");
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="form_data-default" onSubmit={handleSubmit}>
                  <TextField
                    title="Full Name"
                    name="fullName"
                    value={values.fullName}
                    onChange={handleChange}
                    errorText={errors.fullName}
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                    placeholder={"Full Name"}
                  />

                  <TextField
                    title="Email"
                    name="email"
                    errorText={errors.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    placeholder={"Your Email Address"}
                    value={values.email}
                    isUniEmail={inPerson}
                  />

                  {!inPerson && (
                    <TextField
                      errorText={errors.phone}
                      title="Phone"
                      placeholder="07X XXX XXXX"
                      name="phone"
                      obscured={false}
                      type={InputType.Number}
                      onChange={handleChange}
                      error={touched.phone && Boolean(errors.phone)}
                      helperText={touched.phone && errors.phone}
                      value={values.phone}
                    />
                  )}
                  <div className="btn_container">
                    <button className="btn" type="submit">
                      update profile
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
