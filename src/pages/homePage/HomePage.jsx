import { Button } from "@mui/material";
import { userNames } from "../../Atom";
import { useRecoilState } from "recoil";
import style from "./HomePage.module.css";

export default function HomePage() {
  const [userFullName, setUserFullName] = useRecoilState(userNames);

  const removeData = () => {
    setUserFullName({});
    localStorage.removeItem("userName");
  };
  console.log(userFullName);

  return (
    <div className={style.box}>
      <h1>Welcome to Home Page</h1>
      <h1>
        {userFullName.firstName} {userFullName.lastName}
      </h1>
      <Button
        variant="contained"
        onClick={removeData}
        sx={{
          backgroundColor: "#1928d2",
          color: "white",
          width: "7rem",
          border: "1px solid black",
          "&:hover": {
            backgroundColor: "#5a1c63",
          },
        }}
      >
        Clear
      </Button>
    </div>
  );
}
