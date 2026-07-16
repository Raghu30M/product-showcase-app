import { memo } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
    return (
        <div className="card h-100 border-0 shadow-sm">
            <div
                className="bg-white d-flex justify-content-center align-items-center p-4"
                style={{
                    height: "250px",
                }}
            >
                <img
                    src={product.images?.[0] || product.thumbnail}
                    alt={product.title}
                    className="img-fluid"
                    loading="lazy"
                    style={{
                        maxHeight: "180px",
                        objectFit: "contain",
                    }}
                    onError={(e) => {
                        e.target.src =
                            "https://placehold.co/300x300?text=No+Image";
                    }}
                />
            </div>

            <div className="card-body d-flex flex-column">
                <small className="text-secondary text-uppercase mb-2">
                    {product.category}
                </small>

                <h5
                    className="fw-bold"
                    style={{
                        minHeight: "55px",
                    }}
                >
                    {product.title}
                </h5>

                <p
                    className="text-secondary"
                    style={{
                        minHeight: "70px",
                    }}
                >
                    {product.description.length > 90
                        ? product.description.substring(0, 90) + "..."
                        : product.description}
                </p>

                <Link
                    to={`/products/${product.id}`}
                    className="btn btn-dark rounded-0 mt-auto"
                    aria-label={`View details for ${product.title}`}
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default memo(ProductCard);
