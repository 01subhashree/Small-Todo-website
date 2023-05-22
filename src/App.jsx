import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactUs from "./pages/contactUs/ContactUs";
import TaskPage from "./pages/task/TaskPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/task" element={<TaskPage />} />
      </Routes>
    </>
  );
}

export default App;
