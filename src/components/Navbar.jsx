import { Button } from "@mui/material";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import { useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";

const btnStyle = {
  width: "8rem",
  height: "3rem",
  border: "1px solid white",
  padding: "0 1rem",
  color: "white",
  backgroundColor: "#7e305c",
  "&:hover": {
    backgroundColor: "#1928d2",
  },
  "@media (max-width: 500px)": {
    width: "7rem",
    height: "2.5rem",
    fontSize: "0.7rem",
    padding: 0,
  },
};

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={style.mainDiv}>
      <AddHomeWorkIcon
        className={style.icon}
        onClick={() => navigate("/")}
        sx={{
          fontSize: "3rem",
          padding: "0.5rem",
          borderRadius: "2rem",
          backgroundColor: "#4158D0",
          backgroundImage:
            "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
        }}
      />
      <span className={style.inner_div_Links}>
        <Button sx={btnStyle} onClick={() => navigate("/contact")}>
          Contact Us
        </Button>
        <Button sx={btnStyle} onClick={() => navigate("/task")}>
          Task
        </Button>
      </span>
    </div>
  );
}
