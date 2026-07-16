const CategoryFilter = ({ categories, value, onChange }) => {
    return (
        <select className="form-select" value={value} onChange={onChange}>
            <option value="">All Categories</option>

            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default CategoryFilter;
