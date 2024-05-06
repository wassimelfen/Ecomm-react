import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchDataFromAPI } from "../services/api.js";
import ProductItem from "./ProductItem.jsx";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Store.css";

function Store() {
  const [fetchedData, setFetchedData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromAPI();
        setFetchedData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const filteredData = fetchedData
    ? fetchedData
        .filter((item) => {
          return item.title.toLowerCase().includes(searchTerm.toLowerCase());
        })
        .filter((item) => {
          return categoryFilter === "all"
            ? true
            : item.category === categoryFilter;
        })
        .sort((a, b) => {
          if (filterOption === "highest") {
            return b.price - a.price;
          } else if (filterOption === "lowest") {
            return a.price - b.price;
          } else {
            return 0;
          }
        })
    : [];

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    setShowForm(false);
    setFormSubmitted(false);
  };

const handleSubmitClick = () => {
  const fullName = document.getElementById("fullName").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const location = document.getElementById("location").value;

  // I am Saving input data to local storage since the project is only Front-end
  localStorage.setItem("fullName", fullName);
  localStorage.setItem("phoneNumber", phoneNumber);
  localStorage.setItem("location", location);

  setShowForm(true);
  toast.success("Order successfully submitted!", {
    position: "bottom-right",
  });
};


  const handleShopNowClick = () => {
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mb-3 searchBar">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md-3 mb-3">
          <h5 className="mb-2">Filter by price</h5>
          <select
            className="form-control"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="all">All</option>
            <option value="highest">Highest Price</option>
            <option value="lowest">Lowest Price</option>
          </select>
        </div>
        <div className="col-md-3 mb-3">
          <h5 className="mb-2">Filter by category</h5>
          <select
            className="form-control"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="men's clothing">{`men's clothing`}</option>
            <option value="jewelery">Jewelery</option>
            <option value="women's clothing">{`women's clothing`}</option>
          </select>
        </div>
      </div>
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="col-lg-4 col-md-6 col-sm-12 productItem"
              onClick={() => openProductDetails(item)}
            >
              <ProductItem item={item} onClick={openProductDetails} />
            </motion.div>
          ))
        ) : (
          <h1 className="loading" data-text="No results found.">
            No Products Found.
          </h1>
        )}
      </div>
      {selectedProduct && (
        <div className="overlay" onClick={closeProductDetails}></div>
      )}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="popup"
        >
          <div className="popup-content">
            <span className="close-btn" onClick={closeProductDetails}>
              &times;
            </span>
            {showForm ? (
              <div>
                {formSubmitted ? (
                  <div className="confirmation-message">
                    <h2>Order Submitted</h2>
                    <h5>You successfully ordered:</h5>
                    <p>
                      {selectedProduct.title} -{" "}
                      <span className="PriceBold">
                        {" "}
                        ${selectedProduct.price}{" "}
                      </span>
                    </p>
                    <p>
                      It will be delivered to your home as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h2>Order Form</h2>
                    <div className="mb-3">
                      <label htmlFor="fullName" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phoneNumber" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="location" className="form-label">
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="location"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn btn-primary"
                      onClick={handleSubmitClick}
                    >
                      Submit
                    </motion.button>
                  </form>
                )}
              </div>
            ) : (
              <div className="row">
                <div className="col-md-6">
                  <motion.img
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="imageDetail"
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                  />
                </div>
                <div className="col-md-6">
                  <h5>{selectedProduct.title}</h5>
                  <h3>Price: ${selectedProduct.price}</h3>
                  <p>Description: {selectedProduct.description}</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="btn btn-primary"
                      onClick={handleShopNowClick}
                    >
                      Shop Now
                    </motion.button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}

export default Store;
