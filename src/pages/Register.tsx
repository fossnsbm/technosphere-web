import "../styles/register.scss";
import { useState } from "react";
import CheckBox from "../components/global/CheckBox";
import TextField, { InputType } from "../components/global/TextField";
import Dropdown, { PositionType } from "../components/global//Dropdown";
import HeaderMenus from "../components/headerMenus/headerMenus";
import { Formik } from "formik";

import { useMutation } from "@tanstack/react-query";
import { AppConfig } from "../config";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { IUserRegistration } from "../interface/user";

const Register = () => {
  const [inPerson, setInPerson] = useState(false);
  const [batch, setBatch] = useState<string>("20.1");
  const [foodPreference, setFoodPreference] = useState<string>("Vegetarian");

  const navigate = useNavigate();
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

  const createRegistration = useMutation(
    (newRegistration: IUserRegistration) =>
      axios.post(`${AppConfig.BACKEND_API}/auth/sign-up`, newRegistration),
    {
      onSuccess: (response) => {
        toast.success("Registration Success !", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
        if (response.data?._id) navigate(`/login`);
      },

      onError: (error: AxiosError) => {
        const errorMessages: any = error?.response?.data;

        if (!errorMessages) {
          toast.error(error.message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return;
        }

        if (!Array.isArray(errorMessages.message)) {
          toast.error(errorMessages.message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
          return;
        }

        for (const message of errorMessages?.message) {
          toast.error(message, {
            style: {
              borderRadius: "10px",
              background: "#333",
              color: "#fff",
            },
          });
        }
      },
      onMutate: () => {},
    }
  );

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
            initialValues={{
              email: "",
              password: "",
              fullName: "",
              phone: "",
              profileImgUrl:
                "https://d3qy2z3f9c8bfd.cloudfront.net/default-pfp.png",
            }}
            validate={(values: IUserRegistration) => {
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
              if (!values.password) {
                errors.password = "This filed is required";
              } else if (values.password.length < 8) {
                errors.password = "Password is too short";
              } else if (!strongRegex.test(values.password)) {
                errors.password = "Password must one uppercase, lowercase and a number";
              }

              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              values.batch = batch;
              values.food = foodPreference;
              values.isComing = inPerson;
              values.email = !inPerson
                ? values.email
                : (!values.email.includes('@students.nsbm.ac.lk'))?`${values.email}@students.nsbm.ac.lk`:`${values.email}`;

              setTimeout(() => {
                createRegistration.mutate(values);
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
                  placeholder={
                    inPerson ? "NSBM Username" : "Email Address"
                  }
                  value={values.email}
                  isUniEmail= {inPerson}
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

                <TextField
                  errorText={errors.password}
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
                        errorText={errors.phone}
                        title="Phone"
                        name="phone"
                        placeholder="07X XXX XXXX"
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
