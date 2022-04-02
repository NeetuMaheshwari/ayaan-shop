import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:ayaanmaheshwari.in@gmail.com" target="_blank">
        <Button>Contact: ayaanmaheshwari.in@gmail.com if you have to create a website you can contact me</Button>
      </a>
    </div>
  );
};

export default Contact;
