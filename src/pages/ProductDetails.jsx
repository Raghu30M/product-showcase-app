import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { fetchProductById } from "../redux/productSlice";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductCard from "../components/ProductCard";

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { product, loading, error, products } = useSelector(
        (state) => state.product
    );

    useEffect(() => {
        dispatch(fetchProductById(id));
    }, [dispatch, id]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage message={error} />;
    }

    if (!product) {
        return null;
    }

    const relatedProducts = products
        .filter(
            (item) =>
                item.category === product.category && item.id !== product.id
        )
        .slice(0, 4);

    return (
        <div className="container py-4">
            <button
                className="btn btn-dark rounded-0 mb-4"
                onClick={() => navigate(-1)}
            >
                <i className="bi bi-arrow-left me-2"></i>
                Back
            </button>

            <div className="row g-5 align-items-start">
                {/* Left Image */}

                <div className="col-lg-5 text-center">
                    <div className="border rounded p-4 bg-light">
                        <img
                            src={product.images?.[0] || product.thumbnail}
                            alt={product.title}
                            className="img-fluid"
                            loading="lazy"
                            style={{
                                maxHeight: "420px",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </div>

                {/* Right Details */}

                <div className="col-lg-7">
                    <small className="text-uppercase text-secondary">
                        {product.category}
                    </small>

                    <h2 className="fw-bold my-3">{product.title}</h2>

                    <p className="text-secondary mb-4">{product.description}</p>

                    <h5 className="fw-bold mb-3">Technical Specifications</h5>

                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <th width="180">Brand</th>
                                <td>{product.brand || "-"}</td>
                            </tr>

                            <tr>
                                <th>Category</th>
                                <td>{product.category}</td>
                            </tr>

                            <tr>
                                <th>Price</th>
                                <td>$ {product.price || "-"}</td>
                            </tr>

                            <tr>
                                <th>Warranty</th>
                                <td>{product.warrantyInformation || "-"}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Related Products */}

            <section className="mt-5">
                <h3 className="fw-bold mb-4">Related Products</h3>

                <div className="row">
                    {relatedProducts.length > 0 ? (
                        relatedProducts.map((item) => (
                            <div
                                className="col-lg-3 col-md-6 col-sm-6 mb-4"
                                key={item.id}
                            >
                                <ProductCard product={item} />
                            </div>
                        ))
                    ) : (
                        <p className="text-secondary">
                            No related products available.
                        </p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default ProductDetails;
