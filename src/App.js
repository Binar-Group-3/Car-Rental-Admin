import Dashboard from './pages/Dashboard';
import {Routes, Route, BrowserRouter} from "react-router-dom";
import EditPage from './pages/EditPage';
import ListCar from './pages/ListCar';
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Dashboard />} />
            <Route path = "/edit/:id" element= {<EditPage />} />
            <Route path = "/listcar" element={<ListCar />} />
            <Route path="/login-page" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
