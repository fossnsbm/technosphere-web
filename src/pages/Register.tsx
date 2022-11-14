import "../styles/register.scss";
import { useState } from "react";
import CheckBox from "../components/global/CheckBox";
import TextField, { InputType } from "../components/global/TextField";
import Dropdown, { PositionType } from "../components/global//Dropdown";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { Formik } from "formik";

const Register = () => {
  const [inPerson, setInPerson] = useState(false);
  const [batch, setBatch] = useState<string>("20.1");
  const [foodPreference, setFoodPreference] = useState<string>("Vegetarian");

  return (
    <section className="register">
      <HeaderMenus />
      <div className="register_content">
        <div className="center">
          <div className="attendance_toggle">
            <div className="toggle_para">
              <CheckBox onChange={() => setInPerson(!inPerson)} />
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

          <Formik
            initialValues={{ email: "", password: "", fullName: "", phone: "" }}
            validate={(values: {
              email: string;
              password: string;
              fullName: string;
              phone: string;
              batch?: string;
              food?: string;
              isComing?: boolean;
            }) => {
              const errors: any = {};

              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              values.batch = batch;
              values.food = foodPreference;
              values.isComing = inPerson;

              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                // @TODO
                // send a post req to /auth/register 
                // with this payload and thats it 
                
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
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                  placeholder={"Full Name"}
                />

                <TextField
                  title="Email"
                  name="email"
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  placeholder="username@student.nsbm.ac.lk"
                  value={values.email}
                />

                {!inPerson && (
                  <TextField
                    title="Phone"
                    placeholder=""
                    name="phone"
                    obscured={false}
                    type={InputType.Number}
                    onChange={handleChange}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={touched.phone && errors.phone}
                    value={values.phone}
                  />
                )}

                <TextField
                  title="Password"
                  onChange={handleChange}
                  name="password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  placeholder="Password"
                  value={values.password}
                  obscured={true}
                />

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
                        name="phone"
                        placeholder=""
                        obscured={false}
                        type={InputType.Number}
                        onChange={handleChange}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                        value={values.phone}
                      />
                    </div>
                    <Dropdown
                      placeholder="Food Preferences"
                      items={["Vegetarian", "Non-vegetarian"]}
                      position={PositionType.Down}
                      selectedItem={foodPreference}
                      setSelectedItem={setFoodPreference}
                    />
                  </div>
                )}

                <div className="btn_container">
                  <button className="btn" type="submit" disabled={isSubmitting}>
                    Register
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default Register;
