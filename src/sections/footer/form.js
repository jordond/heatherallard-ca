import React from "react";
import PropTypes from "prop-types";

import { sendEmail } from "./formspree";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", message: "" };

    this.attributeMaker = this.attributeMaker.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  attributeMaker(name) {
    return {
      name,
      className: name,
      placeholder: name,
      onChange: this.handleChange
    };
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    const { email, message } = this.state;
    if (email && message) {
      console.log(`Attempting to submit: ${email} ->\n${message}`);
      this.setState({ email: "", message: "" });

      sendEmail({ email, message, sendTo: this.props.email }).then(res => {
        if (res) {
          console.info("Email sent successfully!");
        }
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <input
          type="email"
          value={this.state.email}
          {...this.attributeMaker("email")}
        />
        <textarea
          value={this.state.message}
          {...this.attributeMaker("message")}
        />
        <button
          className="submit"
          type="submit"
          disabled={!this.state.email || !this.state.message}
        >
          send
        </button>
      </form>
    );
  }
}

ContactForm.protoTypes = {
  email: PropTypes.string.isRequired
};

export default ContactForm;
