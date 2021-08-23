import React from "react";

export default () => {
  return (
    <section className="contact">
      <div className="contact__wrapper">
        <div className="contact__left"></div>
        <div className="contact__right">
          <h1 className="contact__heading">Contact</h1>
          <form>
            <div className="input-group">
              <input type="text" className="field" />
              <label className="input-label">Full Name</label>
            </div>
            <div className="input-group">
              <input type="email" className="field" />
              <label className="input-label">Email</label>
            </div>
            <div className="input-group">
              <textarea className="field"></textarea>
              <label className="message">Message</label>
            </div>
            <input type="submit" className="submit-btn" value="Submit" />
          </form>
        </div>
      </div>
    </section>
  );
};
