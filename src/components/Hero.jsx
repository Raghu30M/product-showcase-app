import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";

const Hero = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="display-3 fw-bold mb-4">
                            Explore Quality Products With Confidence
                        </h1>

                        <p className="fs-5 text-secondary mb-4">
                            Discover a wide range of products designed to meet
                            your everyday needs. Browse our collection and find
                            the right product with ease.
                        </p>

                        <Link
                            to="/products"
                            className="btn btn-dark btn-lg px-4 py-3 rounded-0"
                        >
                            Explore Products
                        </Link>
                    </div>

                    <div className="col-lg-6 text-center mt-5 mt-lg-0">
                        <img
                            src={heroImage}
                            alt="Hero"
                            className="img-fluid rounded shadow"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
