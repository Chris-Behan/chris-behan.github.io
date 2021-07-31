import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";

export function SignupForm() {
  const mailChimpURL =
    "https://chrisbehan.us6.list-manage.com/subscribe/post?u=0b20b88aeb38038fee452a64e&amp;id=ef13d3d07a";
  const mailChimpUser = "0b20b88aeb38038fee452a64e";
  const mailChimpID = "ef13d3d07a";
  const [email, setEmail] = useState("");
  return (
    <div className={styles.container}>
      <p className={styles.subscribeText}>
        Like what you read? <br /> Share with others and Subscribe
      </p>
      <form
        className={styles.signupForm}
        action={mailChimpURL}
        method="POST"
        noValidate
      >
        <input type="hidden" name="u" value={mailChimpUser} />
        <input type="hidden" name="id" value={mailChimpID} />
        <input
          type="email"
          name="EMAIL"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoCapitalize="off"
          autoCorrect="off"
        />

        <input
          className={styles.subscribeButton}
          href="#"
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
        />

        {/* Protects against bots */}
        <div
          style={{ position: "absolute", left: "-5000px" }}
          aria-hidden="true"
          aria-label="Please leave the following three fields empty"
        >
          <label htmlFor="b_name">Name: </label>
          <input
            type="text"
            name="b_name"
            tabIndex="-1"
            value=""
            placeholder="Freddie"
            id="b_name"
          />

          <label htmlFor="b_email">Email: </label>
          <input
            type="email"
            name="b_email"
            tabIndex="-1"
            value=""
            placeholder="youremail@gmail.com"
            id="b_email"
          />

          <label htmlFor="b_comment">Comment: </label>
          <textarea
            name="b_comment"
            tabIndex="-1"
            placeholder="Please comment"
            id="b_comment"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
