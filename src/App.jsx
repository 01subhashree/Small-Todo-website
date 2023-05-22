import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ContactUs from "./pages/contactUs/ContactUs";
import TaskPage from "./pages/task/TaskPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/task" element={<TaskPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
