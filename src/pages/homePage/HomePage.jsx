import { Button } from "@mui/material";
import { userName } from "../../Atom";
import { useRecoilValue } from "recoil";

export default function HomePage() {
  const userFullName = useRecoilValue(userName);
  console.log(userFullName);

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <h1>
        {userFullName.firstName} {userFullName.lastName}
      </h1>
      <Button variant="contained">Clear</Button>
    </div>
  );
}
