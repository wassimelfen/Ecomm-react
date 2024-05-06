import { Link } from "react-router-dom";
import "./LandingPage.css";
import gif1  from "../../assets/gif1.gif"
import gif2  from "../../assets/gif2.gif"
import gif3 from "../../assets/gif3.gif";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div>
      <section id="banner">
        <div className="container-fluid" id="banner-container">
          <div className="row" id="banner-row">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="col-md-6 welcomeText"
              id="banner-col"
            >
              <h3>Welcome to our Online Store!</h3>
              <p>
                Explore our wide range of products and find everything you need
                for your daily life.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link className="btn btn-primary" to="/store" role="button">
                    Shop Now
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="col-md-6"
              id="banner-col2"
            >
              <motion.img
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="img-responsive rounded mx-auto d-block"
                src="https://i.pinimg.com/originals/ea/9c/f1/ea9cf19cba89b5decfbdd2c2c557e263.gif"
                alt="Store Banner"
              />
            </motion.div>
          </div>
        </div>
      </section>
      <section id="service">
        <br />
        <div className="container-fluid" id="service-container">
          <div className="row" id="banner-row">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ y: [-40, 0], opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="col-md-4"
              id="service-col1"
            >
              <img
                src={gif2}
                className="img-fluid rounded mx-auto d-block threeGifs"
                alt="..."
              />
              <h3>Secure Chekout</h3>

              <p>
                Our secure checkout process ensures that your transactions are
                protected and your personal information is kept safe.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ y: [-40, 0], opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="col-md-4"
              id="service-col2"
            >
              <img
                src={gif1}
                className="img-fluid rounded mx-auto d-block threeGifs"
                alt="..."
              />
              <h3>30 Day Returns</h3>

              <p>
                Enjoy peace of mind with our 30-day return policy, ensuring that
                you can shop with confidence.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ y: [-40, 0], opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="col-md-4"
              id="service-col3"
            >
              <img
                src={gif3}
                className="img-fluid rounded mx-auto d-block threeGifs"
                alt="..."
              />
              <h3>Quick and Free Shipping</h3>

              <p>
                Experience quick and free shipping on all orders, ensuring that
                your purchases arrive at your doorstep promptly and without
                extra cost.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <hr />
      <section id="about">
        <h1 className="text-center">About Us</h1>
        <div className="container-fluid" id="about-container">
          <div className="row" id="banner-row">
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [-40, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="col-md-6"
              id="about-col"
            >
              <h3>Why Us</h3>
              <ul>
                <li>
                  We are passionate about delivering exceptional products and an
                  unparalleled shopping experience to our customers
                </li>
                <li>
                  With a dedication to quality and customer satisfaction, we
                  strive to curate a diverse selection of products that cater to
                  every need and taste
                </li>
                <li>
                  Founded on the principles of integrity and innovation, [Your
                  Store Name] is committed to exceeding expectations and
                  building lasting relationships with our valued patrons
                </li>
                <li>
                  From our humble beginnings to our present-day presence, we are
                  driven by a relentless pursuit of excellence, ensuring that
                  each interaction leaves a lasting impression of trust and
                  reliability
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [40, 0], opacity: 1 }}
              transition={{ duration: 1 }}
              className="col-md-6"
              id="banner-col2"
            >
              <img
                className="img-responsive rounded mx-auto d-block imageAbout"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/announcement-of-product-discounts-in-e-commerce-7735410-6241789.png?f=webp"
                alt=""
              />
            </motion.div>{" "}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
