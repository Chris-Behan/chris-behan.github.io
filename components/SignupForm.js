import React, { useEffect, useState } from "react";
import styles from "../styles/signup.module.css";

export function SignupForm() {
  const sendInBlueAction = "https://97afcce2.sibforms.com/serve/MUIEAFn3FZzUf7t-OKK-YuxOzBVWrigWMnUU0m0uDnAhLANE9V7_mvearUT3JDq7ek3460GOlt9xsdTbIFxJzQhTODT3ng3hCJDSn5VKJHIpeSIemdm_WIjVe35TlQjTONLxRfgbB_M5FZoZUH9mTNP6mI4aDKVhqYx8SaHUDsmEWzOMEVwluujbKxN-PRrhUa2CK8QrQkr_o0ve"
  const [email, setEmail] = useState("");
  return (
    <div className={styles.container}>
      <p className={styles.subscribeText}>
        Like what you read? <br /> Share with others and Subscribe
      </p>
      <form
        className={styles.signupForm}
        action={sendInBlueAction}
        method="POST"
        datatype="subscription"
        noValidate
      >
        <input
          type="email"
          name="EMAIL"
          placeholder="Email"
          id="EMAIL"
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
