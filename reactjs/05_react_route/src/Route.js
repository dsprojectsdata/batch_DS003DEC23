import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Layout from "./Component/Layout/Layout";
import Contact from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/Products/ProductDetails";


const route = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path="" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact-us" element={<Contact />} />
                <Route path="products" element={<Products />} />
                <Route path="product-detail/:product_id/:cart_id" element={<ProductDetails />} />
            </Route>
        </>
    )
)

export default route;