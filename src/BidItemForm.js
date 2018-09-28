import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

class BidItemForm extends Component {
  render() {
    return (
      <div className="contact-wrapper">
        <div className="contact-form">
          <div className="contact-form-header">
            <p>CONTACT ME</p>
            <hr />
          </div>
          <form
            className="contact-form-form"
            action="https://formspree.io/lesleysab210@gmail.com"
            method="POST"
          >
            <input type="text" label="Name" placeholder="Name" name="name" />
            <input
              type="email"
              name="_replyto"
              label="Email"
              placeholder="Email"
            />
            <textarea
              type="textarea"
              name="message"
              label="Message"
              placeholder="Message"
            />
            <input className="contact-button" type="submit" value="Send" />
          </form>
        </div>
      </div>
    );
  }
}
export default BidItemForm;
