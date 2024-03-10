import React from "react";
import { useLocation } from "react-router-dom";
import Showbooks from "../ShowBooks/Showbooks";
import "./Sechead.css";

const Sechead = () => {
  const location = useLocation();
  const { pathname } = location;

  const renderShowbooks = pathname !== "/about";

  return (
    <div className="sec-header">
      <header className="sec-header">
        <div className="sec-header-content flex flex-content-center">
          <h2 className="sec-header-title text-capitalize">
            Get in Touch With Us!
          </h2>
          <p className="sec-header-text fs-18 fw-3">
            Feel free to reach out to us if you have any questions, feedback, or
            inquiries. We're here to assist you on your literary journey and
            ensure you have the best experience possible. Whether you have
            recommendations, suggestions for improvement, or simply want to
            connect with fellow book enthusiasts, we'd love to hear from you.
          </p>

          <div className="contact-form-sec">
            <form>
              <div className="form-group-sec">
                <label className="label-sec" htmlFor="name">
                  Name
                </label>
                <input
                  className="input-sec"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="form-group-sec">
                <label className="label-sec" htmlFor="email">
                  Email
                </label>
                <input
                  className="input-sec"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="form-group-sec">
                <label className="label-sec" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="textarea-sec"
                  id="message"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button className="button-sec" type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
        {renderShowbooks && <Showbooks />}
      </header>
    </div>
  );
};

export default Sechead;
