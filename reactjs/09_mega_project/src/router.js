import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import AuthLayout from "./components/AuthLayout";
import Login from "./pages/Login/Login";
import Category from "./pages/Category/Category";
import AddBlog from "./pages/AddBlog/AddBlog";
import UserBlogs from "./pages/UserBlogs/UserBlogs";
import Blogs from "./pages/Blogs/Blogs";
import BlogDetails from "./pages/BlogDetails/BlogDetails";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog-details/:slug" element={<BlogDetails />} />

            <Route element={<AuthLayout authentication={false} />}>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
            </Route>

            <Route element={<AuthLayout authentication={true} />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/add-category" element={<Category />} />
                <Route path="/add-blog" element={<AddBlog />} />
                <Route path="/user-blog" element={<UserBlogs />} />
            </Route>
        </Route>
    )
)

export default router;