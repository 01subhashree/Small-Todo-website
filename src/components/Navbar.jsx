import { Button } from "@mui/material";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <AddHomeWorkIcon
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
      <span>
        <Button onClick={() => navigate("/contact")}>Contact Us</Button>
        <Button onClick={() => navigate("/task")}>Task</Button>
      </span>
    </div>
  );
}
