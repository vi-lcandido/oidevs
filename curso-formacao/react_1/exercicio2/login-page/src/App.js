import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./view/login/login_page";
import Home from "./view/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
