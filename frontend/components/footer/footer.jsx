import React from "react";
import { Link } from "react-router-dom";

export default(props) => {
  return (
    <div className="footer">
      <div className="footer-text">
        <span className="contact-plug"><a href="mailto:contact.darrenyong@gmail.com">Contact</a></span>
        <span className="github-plug"><a href="https://github.com/darrenyong">Github</a></span>
        <span className="linkedin-plug"><a href="https://linkedin.com/in/yongdarren">LinkedIn</a></span>

      </div>
    </div>
  )
}
