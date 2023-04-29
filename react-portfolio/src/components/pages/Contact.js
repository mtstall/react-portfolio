import React, { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState('');
  const [nameRequired, setNameRequired] = useState(false);
  const [emailRequired, setEmailRequired] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const handleUserInput = (event) => {
    const { id, value } = event.target;

    if (id === "name-input") {
      setName(value);
    }
    if (id === "email-input") {
      setEmail(value);
    }
    if (id === 'message-input') {
      setMessage(value);
    }
  };

  const handleError = (event) => {
    if (!event.target.value && event.target.id === "name-input") {
      setNameRequired(true);
    } else if (!event.target.value && event.target.id === "email-input") {
      setEmailRequired(true);
    } else if (!event.target.value && event.target.id === 'message-input') {
      setMessageRequired(true);
    } else {
      setNameRequired(false);
      setEmailRequired(false);
      setMessageRequired(false);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="form-group">
        <label for="name-input">Name:</label>
        <textarea
          class="form-control"
          id="name-input"
          rows="1"
          value={name}
          onChange={handleUserInput}
          onBlur={handleError}
        ></textarea>
        {nameRequired && (
          <div class="alert alert-warning" role="alert">
            Please enter your name!
          </div>
        )}
      </div>
      <div class="form-group">
        <label for="email-input">Email address:</label>
        <input
          type="email"
          value={email}
          onChange={handleUserInput}
          onBlur={handleError}
          class="form-control"
          id="email-input"
          placeholder="name@example.com"
        ></input>
        {emailRequired && (
          <div class="alert alert-warning" role="alert">
            Please enter an email!
          </div>
        )}
      </div>
      <div class="form-group">
        <label for="message-input">Message:</label>
        <textarea class="form-control" id="message-input" value={message} onChange={handleUserInput} onBlur={handleError} rows="3"></textarea>
      </div>
      {messageRequired && (
          <div class="alert alert-warning" role="alert">
            Please enter a message!
          </div>
      )}
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
