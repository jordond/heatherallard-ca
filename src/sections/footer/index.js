import React from "react";

import { key } from "../../utils/id";
import ContactForm from "./form";
import CircleImageLink from "./circleImageLink";

import imgBehance from "../../images/footer-behance.png";
import imgLinkedIn from "../../images/footer-linkedIn.png";
import imgInstagram from "../../images/footer-instagram.png";
import imgVimeo from "../../images/footer-vimeo.png";

import "./footer.css";

const links = [
  { img: imgBehance, url: "https://behance.net/hallard" },
  {
    img: imgLinkedIn,
    url: "https://www.linkedin.com/in/heather-allard-833b9b8b/"
  },
  { img: imgInstagram, url: "https://instagram.com/heather1allard" },
  { img: imgVimeo, url: "https://vimeo.com/heatherallard" }
];

export default () => (
  <div className="footer">
    <div className="text">Interested? Let&apos;s talk!</div>
    <div className="email">
      <span>email</span>
      <a href="mailto:heatherallard01@gmail.com">heatherallard01@gmail.com</a>
    </div>
    <div className="contact">
      or send a message.
      <ContactForm />
    </div>
    <div className="links">
      <ul>
        {links.map(({ url, img }) => (
          <li {...key()}>
            <CircleImageLink url={url} img={img} />
          </li>
        ))}
      </ul>
    </div>
  </div>
);
