import { Routes, Route } from "react-router-dom";
import RegisterPage from "./components/authPages/RegisterPage";
import LoginPage from "./components/authPages/LoginPage";
import Profile from "./components/Pages/Profile";
import NavBar from "./components/Pages/NavBar";
import Dribble from "./components/Pages/Dribble";
import Footer from "./components/Pages/footer";
import EmailPage from "./components/Pages/EmailPage";
import VeryEmail from "./components/Pages/VeryEmail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/select-job-type" element={<Dribble />} />
        <Route path="/verify-email" element={<EmailPage />} />
        <Route path="/verify" element={<VeryEmail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
