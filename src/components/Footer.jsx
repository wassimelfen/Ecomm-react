import "./Footer.css";
const Footer = () => {
  return (
    <section id="footer">
      <section id="footer">
        <div className="container-fluid" id="footer-container">
          <div className="row" id="banner-row">
            <div className="col-md-4" id="footer-col1">
              <h3>My Store</h3>
              <p>
                Explore our wide range of products and find everything you need
                for your daily life.
              </p>
            </div>
            <div className="col-md-4" id="footer-col2">
              <h3>Contact Us</h3>
              <p>Call Us- +21650790136</p>
              <p>Email Us- wassimelfen@gmail.com</p>
            </div>
            <div className="col-md-4" id="footer-col2">
              <h3>Subscribe To Newsletter</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <div id="emailHelp" className="form-text">
                    We will never share your email with anyone else.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary newsBtn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
