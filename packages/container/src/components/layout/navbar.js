import React, { useState } from "react";
import { quotes } from "../../../../helpers/data/quotes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library creation
library.add(fas, fab);

export default () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [random, setRandom] = useState(0);
  const [open, setOpen] = useState(false);

  const getRandomQuote = (e) => {
    if (e.target.checked) {
      setRandom(Math.floor(Math.random() * quotes.length));
      setOpen(!e.target.checked);
    }

    if (open) {
      setRandom(Math.floor(Math.random() * quotes.length));
    }
  };

  const LoggedOutLinks = () => {
    return (
      <>
        <ul className="nav-list">
          <li className="nav-list-item">
            <div className="nav-list-link">
              <a href="/calculator">Time Calculator</a>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-link">
              <a href="/auth/login">Log In</a>
            </div>
          </li>
        </ul>
      </>
    );
  };

  const LoggedInLinks = () => {
    return (
      <>
        <ul className="nav-list">
          <li className="nav-list-item">
            <div className="nav-list-link">
              <a href="/#">My Plan</a>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-link">
              <a href="/#">Goals</a>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-link">
              <a href="/#">Stats</a>
            </div>
          </li>
          <li className="nav-list-item">
            <div className="nav-list-link">
              <a href="/#">Profile</a>
            </div>
          </li>
          {admin && (
            <li className="nav-list-item">
              <div className="nav-list-link">
                <a href="/#">Admin</a>
              </div>
            </li>
          )}
          <li className="nav-list-item">
            <div className="nav-list-link">
              <a href="/#">Logout</a>
            </div>
          </li>
        </ul>
      </>
    );
  };

  return (
    <>
      <nav className="navbar">
        <input
          type="checkbox"
          id="check"
          className="checkbox"
          hidden
          onChange={(e) => getRandomQuote(e)}
        />
        <div className="hamburger-menu">
          <label htmlFor="check" className="menu">
            <div className="menu-line menu-line-1"></div>
            <div className="menu-line menu-line-2"></div>
            <div className="menu-line menu-line-3"></div>
          </label>
        </div>

        <div className="navbar-navigation">
          <div className="navbar-navigation-left">
            <div className="quote-section">
              <div className="quote-section-quote">
                <FontAwesomeIcon
                  icon={["fas", "quote-left"]}
                  aria-hidden="true"
                />
                <p className="quote">{quotes[random].quote}</p>
              </div>
              <div className="author-occupation">
                <em>
                  <p className="author">- {quotes[random].name}</p>
                </em>
                {quotes[random].occupation !== "" ? (
                  <p className="occupation">{quotes[random].occupation}</p>
                ) : null}
              </div>
            </div>
          </div>
          <div className="navbar-navigation-right">
            <div className="brand">
              <a href="/">
                <div className="brand-logo">
                  <div className="logo">
                    <FontAwesomeIcon
                      icon={["fas", "glasses"]}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <div className="companyname">TrueFocus</div>
                  </div>
                </div>
              </a>
            </div>
            <ul className="nav-list">
              {!loggedIn ? <LoggedOutLinks /> : <LoggedInLinks />}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
