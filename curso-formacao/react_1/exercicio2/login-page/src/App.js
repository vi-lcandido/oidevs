import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./view/login/login_page";
import Home from "./view/home";
import RecoverPage from "./view/recoverPassword/recover_page";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/recoverPassword" element={<RecoverPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
