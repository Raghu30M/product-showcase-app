import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import Loader from "./Loader";

const FeaturedProducts = () => {
    const { products, loading } = useSelector((state) => state.product);

    const featuredProducts = products.slice(0, 6);

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <SectionTitle
                    title="Featured Products"
                    subtitle="Browse our featured products."
                />

                {loading ? (
                    <Loader />
                ) : (
                    <div className="row">
                        {featuredProducts.map((product) => (
                            <div
                                className="col-lg-4 col-md-6 mb-4"
                                key={product.id}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedProducts;
