import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login/Login";
import Category from "./pages/Category/Category";
import AddBlog from "./pages/AddBlog/AddBlog";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />

            <Route element={<AuthLayout authentication={false} />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<AuthLayout authentication={true} />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/add-category" element={<Category />} />
                <Route path="/add-blog" element={<AddBlog />} />
            </Route>
        </Route>
    )
)

export default router;