import { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../redux/productSlice";

import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Pagination from "../components/Pagination";

import useDebounce from "../hooks/useDebounce";

const Products = () => {
    const dispatch = useDispatch();

    const { products, loading, error } = useSelector((state) => state.product);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const debouncedSearch = useDebounce(search);

    const productsPerPage = 10;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const categories = useMemo(() => {
        return [...new Set(products.map((item) => item.category))];
    }, [products]);

    const filteredProducts = useMemo(() => {
        return products.filter((product) => {
            const matchesSearch = product.title
                .toLowerCase()
                .includes(debouncedSearch.toLowerCase());

            const matchesCategory =
                category === "" || product.category === category;

            return matchesSearch && matchesCategory;
        });
    }, [products, debouncedSearch, category]);

    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const currentProducts = useMemo(() => {
        const start = (currentPage - 1) * productsPerPage;

        return filteredProducts.slice(start, start + productsPerPage);
    }, [filteredProducts, currentPage]);

    const handleSearch = useCallback((event) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    }, []);

    const handleCategory = useCallback((event) => {
        setCategory(event.target.value);
        setCurrentPage(1);
    }, []);

    const handlePageChange = useCallback((page) => {
        setCurrentPage(page);
    }, []);

    return (
        <section>
            <div className="container">
                <h2 className="fw-bold mb-4">Products</h2>

                <div className="row mb-4">
                    <div className="col-md-6">
                        <SearchBar value={search} onChange={handleSearch} />
                    </div>

                    <div className="col-md-6">
                        <CategoryFilter
                            categories={categories}
                            value={category}
                            onChange={handleCategory}
                        />
                    </div>
                </div>

                {loading && <Loader />}

                {error && <ErrorMessage message={error} />}

                <div className="row">
                    {!loading &&
                        currentProducts.map((product) => (
                            <div
                                className="col-lg-3 col-md-6 mb-4"
                                key={product.id}
                            >
                                <ProductCard product={product} />
                            </div>
                        ))}
                </div>

                <div className="d-flex justify-content-between align-items-center">
                    <small>
                        Showing {currentProducts.length} of{" "}
                        {filteredProducts.length} Products
                    </small>

                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </section>
    );
};

export default Products;
