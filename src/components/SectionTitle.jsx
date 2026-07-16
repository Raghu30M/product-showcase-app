const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="text-center mb-5">
            <h2 className="fw-bold mb-3">{title}</h2>
            <p className="text-secondary">{subtitle}</p>
        </div>
    );
};

export default SectionTitle;
