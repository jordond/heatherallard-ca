import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: "", message: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;

    this.setState({ [name]: target.value });
  }

  handleSubmit(event) {
    const { email, message } = this.state;
    if (email && message) {
      console.log(`Submitted: ${email} -> ${message}`);
      this.setState({ email: "", message: "" });
      if (process.env.NODE_ENV === "production") {
        console.log("TODO -> Implement email sending");
      }
    }
    event.preventDefault();
  }

  render() {
    return (
      <div className="form">
        <input
          name="email"
          type="email"
          className="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <textarea
          name="message"
          className="message"
          placeholder="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button
          className="submit"
          onClick={this.handleSubmit}
          disabled={!this.state.email || !this.state.message}
        >
          send
        </button>
      </div>
    );
  }
}
