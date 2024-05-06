import PropTypes from "prop-types";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { item, onClick } = props;

  const title = item && item.title ? item.title : "";
  const price = typeof item.price === "number" ? item.price.toString() : "";
  const image = item && item.image ? item.image : "";

  return (
    <div className="product-item" onClick={() => onClick(item)}>
      <img className="images" src={image} alt={title} />
      <p>{title}</p>
      <h3>{price}$</h3>
    </div>
  );
};

ProductItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductItem;
