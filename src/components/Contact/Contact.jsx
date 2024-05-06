import { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StarRating from "./StarRating";

const Contact = () => {
  const [rating, setRating] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const templateParams = {
      rating,
      email,
      feedback,
    };

    try {
      await emailjs.send(
        "service_9m3alyf",
        "template_j4jxvrd",
        templateParams,
        "ZXe18WgmqSc0ADf_k"
      );

      setSuccessMessage("Thank you for your message");
      setRating("");
      setEmail("");
      setFeedback("");

      toast.success("Message sent successfully", {
        position: "bottom-right",
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Message not sent !");
      toast.error("Failed to send message", {
        position: "bottom-right",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="myStore-feedback-container"
    >
      <h2 className="myStore-feedback-header">
        We welcome your feedback and suggestions
      </h2>
      <form
        onSubmit={handleSubmit}
        className="myStore-feedback-form"
        name="taahaduFeedback"
      >
        <div className="myStore-feedback-inputs-container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="myStore-feedback-input-container"
          >
            <label htmlFor="rating">Rating</label>
            <StarRating />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="myStore-feedback-input-container"
          >
            <label htmlFor="email">email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="myStore-feedback-input-container"
          >
            <label htmlFor="feedback">feedback and suggestions</label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Write here ..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </motion.div>
        </div>
        {errorMessage && (
          <div className="myStore-feedback-error">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="myStore-feedback-success">{successMessage}</div>
        )}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="myStore-feedback-submit-button"
        >
          Send
        </motion.button>
      </form>
    </motion.div>
  );
};

export default Contact;
