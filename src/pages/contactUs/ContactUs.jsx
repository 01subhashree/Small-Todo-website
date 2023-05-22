import { Button, TextField } from "@mui/material";
import { useState } from "react";
import joi from "joi-browser";
import { useNavigate } from "react-router-dom";
import { userDetails, userNames } from "../../Atom";
import { useRecoilState, useSetRecoilState } from "recoil";
import style from "./ContactUs.module.css";

const userSchema = joi.object({
  firstName: joi.string().min(4).max(20).required(),
  lastName: joi.string().required(),
  email: joi.string().email().required(),
  phone: joi.number().max(9999999999),
});

const Mystyle = {
  border: "1px solid black",
  backgroundColor: "white",
};

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userDetails);
  const setUserName = useSetRecoilState(userNames);

  const handleSubmit = () => {
    const { error } = userSchema.validate(
      { email, phone, firstName, lastName },
      { abortEarly: false }
    );
    console.log(error);
    if (!error) {
      alert("Register succeshully");

      const user = [
        ...userData,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          phone: phone,
        },
      ];
      localStorage.setItem("userDetail", JSON.stringify(user));
      navigate("/");
      setUserData(user);

      const userFullName = { firstName: firstName, lastName: lastName };
      setUserName(userFullName);
      localStorage.setItem("userName", JSON.stringify(userFullName));
    } else {
      alert("enter valid details");
    }

    console.log(userData);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className={style.mainDiv_from}>
      <span className={style.innerDiv_from}>
        <TextField
          sx={Mystyle}
          id="filled-basic"
          label="firstName"
          variant="filled"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          sx={Mystyle}
          id="filled-basic2"
          label="lastName"
          variant="filled"
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          sx={Mystyle}
          id="filled-basic3"
          label="email"
          variant="filled"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          sx={Mystyle}
          id="filled-basic4"
          label="phone"
          variant="filled"
          onChange={(e) => setPhone(e.target.value)}
        />

        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{ backgroundColor: "#1928d2" }}
        >
          Submit
        </Button>
      </span>
    </form>
  );
}
