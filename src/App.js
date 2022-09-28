import { Route, Routes } from "react-router";
import "./App.css";

import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/login-page" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
