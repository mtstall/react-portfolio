import React, { useState } from "react";
import { validateEmail } from "../../utils/helper";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleUserInput = (event) => {
    const { id, value } = event.target;

    if (id === "name-input") {
      setName(value);
    }
    if (id === "email-input") {
      setEmail(value);
    }
    if (id === "message-input") {
      setMessage(value);
    }
  };

  const handleError = (event) => {
    if (!event.target.value && event.target.id === "name-input") {
      setNameRequired(true);
    } else if (!event.target.value && event.target.id === "email-input") {
      setEmailRequired(true);
    } else if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email!");
    } else if (!event.target.value && event.target.id === "message-input") {
      setMessageRequired(true);
    } else {
      setNameRequired(false);
      setEmailRequired(false);
      setMessageRequired(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("in handleFormSubmit");

    setName("");
    setEmail("");
    setMessage("");
    alert("Message successfully submitted!");
  };

  return (
    <div>
      <div className="form-group">
        <label for="name-input">Name:</label>
        <textarea
          className="form-control"
          id="name-input"
          rows="1"
          value={name}
          onChange={handleUserInput}
          onBlur={handleError}
        ></textarea>
        {nameRequired && (
          <div className="alert alert-warning" role="alert">
            Please enter your name!
          </div>
        )}
      </div>
      <div className="form-group">
        <label for="email-input">Email address:</label>
        <input
          type="email"
          value={email}
          onChange={handleUserInput}
          onBlur={handleError}
          className="form-control"
          id="email-input"
          placeholder="name@example.com"
        ></input>
        {emailRequired && (
          <div className="alert alert-warning" role="alert">
            Please enter an email!
          </div>
        )}
        {errorMessage && (
          <div className="alert alert-warning" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
      <div className="form-group">
        <label for="message-input">Message:</label>
        <textarea
          className="form-control"
          id="message-input"
          value={message}
          onChange={handleUserInput}
          onBlur={handleError}
          rows="3"
        ></textarea>
      </div>
      {messageRequired && (
        <div className="alert alert-warning" role="alert">
          Please enter a message!
        </div>
      )}
      <a
        href="mailto:mtstallings95@gmail.com?subject=Contacting You From Your React Portfolio"
        onClick={handleFormSubmit}
        type="click"
      >
        Send Email
      </a>
    </div>
  );
}
