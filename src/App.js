import Dashboard from "./pages/Dashboard";
import { Routes, Navigate } from "react-router-dom";
import EditPage from "./pages/EditPage";
import ListCar from "./pages/ListCar";
import LoginPage from "./pages/LoginPage";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Template from "./pages/Template";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/dashboard"
        element={<Template />}
        // loader={rootLoader}
        // action={rootAction}
        // errorElement={<ErrorPage />}
      >
        <Route path="" element={<Dashboard />} />
        <Route path="cars" element={<ListCar />} />
        {/* page buat add car ada di sini */}
        <Route path="cars/edit-car/:id" element={<EditPage />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cars" element={<ListCar />} />
        page buat add car ada di sini
        <Route path="cars/edit-car/:id" element={<EditPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes> */}
    </div>
  );
}

export default App;
