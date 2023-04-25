import React from "react";

export default function Contact() {
  return (
    <div>
              <div class="form-group">
        <label for="name-input">Name:</label>
        <textarea
          class="form-control"
          id="name-input"
          rows="1"
        ></textarea>
      </div>
      <div class="form-group">
        <label for="email-input">Email address:</label>
        <input
          type="email"
          class="form-control"
          id="email-input"
          placeholder="name@example.com"
        ></input>
      </div>
      <div class="form-group">
        <label for="message-input">Message:</label>
        <textarea
          class="form-control"
          id="message-input"
          rows="3"
        ></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </div>
  );
}
