import { encodeObjectForFetch } from "../../utils/misc";

export function sendEmail({ email, message, sendTo }) {
  console.log(`Sending to Formspree!\nUsing -> ${sendTo}`);
  return fetch(`https://formspree.io/${sendTo}`, {
    method: "post",
    headers: {
      accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    body: encodeObjectForFetch({
      _subject: "New Message from HeatherAllard.ca!",
      email,
      message
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success !== "email sent") {
        console.error("Was unable to send the message!\n", data);
        return false;
      }
      return true;
    })
    .catch(err => console.error("Something went wrong...\n", err));
}
