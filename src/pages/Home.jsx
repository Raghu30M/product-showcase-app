import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import { fetchProducts } from "../redux/productSlice";

const Home = () => {
    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.product);

    useEffect(() => {
        if (products.length === 0) {
            dispatch(fetchProducts());
        }
    }, [dispatch, products]);
    return (
        <>
            <Hero />

            <section className="py-5">
                <div className="container">
                    <div className="row align-items-start">
                        <div className="col-lg-6">
                            <small
                                className="text-uppercase text-secondary fw-semibold"
                                style={{ letterSpacing: "2px" }}
                            >
                                About Omni Store
                            </small>

                            <h2 className="display-5 fw-bold my-4">
                                Built for Better Products.
                            </h2>

                            <p className="text-secondary fs-5">
                                We believe every product should deliver value,
                                quality, and reliability. Our platform brings
                                together carefully selected products that are
                                easy to discover, compare, and explore through a
                                clean and intuitive experience.
                            </p>
                        </div>

                        <div className="col-lg-6 mt-5 mt-lg-0">
                            <div className="card border rounded-4 shadow-sm mb-4">
                                <div className="card-body p-4">
                                    <small className="text-uppercase text-secondary fw-semibold">
                                        Our Mission
                                    </small>

                                    <h5 className="mt-3 mb-0">
                                        Deliver quality products through a
                                        simple, reliable and user-friendly
                                        experience.
                                    </h5>
                                </div>
                            </div>

                            <div className="card border rounded-4 shadow-sm">
                                <div className="card-body p-4">
                                    <small className="text-uppercase text-secondary fw-semibold">
                                        Our Vision
                                    </small>

                                    <h5 className="mt-3 mb-0">
                                        To become a trusted destination where
                                        users can discover products with
                                        confidence.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FeaturedProducts />
        </>
    );
};

export default Home;
