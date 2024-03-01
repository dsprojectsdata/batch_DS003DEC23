import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
        </Route>
    )
)

export default router;