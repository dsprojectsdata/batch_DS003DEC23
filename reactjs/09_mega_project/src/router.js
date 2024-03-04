import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
        </Route>
    )
)

export default router;