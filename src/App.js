import Dashboard from "./pages/Dashboard"
import { Routes, Route, Navigate } from "react-router-dom"
import EditPage from "./pages/EditPage"
import ListCar from "./pages/ListCar"
import LoginPage from "./pages/LoginPage"

function App() {
  return (
    <div>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cars" element={<ListCar />} />
        {/* page buat add car ada di sini */}
        <Route path="cars/edit-car/:id" element={<EditPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes>
    </div>
  )
}

export default App
