import Dashboard from "./pages/Dashboard"
import { Routes, Navigate } from "react-router-dom"
import EditPage from "./pages/EditPage"
import ListCar from "./pages/ListCar"
import LoginPage from "./pages/LoginPage"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom"
import Template from "./pages/Template"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AddPage from "./pages/AddPage"

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
        <Route path="cars/add" element={<AddPage />}/>
        <Route path="cars/edit-car/:id" element={<EditPage />} />
      </Route>
        <Route path="login" element={<LoginPage />} />
    </Route>
  )
)

const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        {/* <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cars" element={<ListCar />} />
        page buat add car ada di sini
        <Route path="cars/edit-car/:id" element={<EditPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="dashboard" replace />} />
      </Routes> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
