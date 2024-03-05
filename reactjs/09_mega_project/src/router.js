import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import AuthLayout from "./components/AuthLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route element={<AuthLayout authentication={false} />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Signup />} />
            </Route>

            <Route element={<AuthLayout authentication={true} />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/add-blog" element={<Profile />} />
            </Route>
        </Route>
    )
)

export default router;