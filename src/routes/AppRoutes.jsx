import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../layouts/MainLayout";
import Loader from "../components/Loader";
import ScrollToTop from "../components/scrollToTop";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />

                        <Route path="/products" element={<Products />} />

                        <Route
                            path="/products/:id"
                            element={<ProductDetails />}
                        />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRoutes;
