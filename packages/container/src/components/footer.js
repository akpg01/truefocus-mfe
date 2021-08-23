import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Library creation
library.add(fas, fab);

export default () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <p className="copyright">
            TrueFocus &copy; 2021. All Rights Reserved.
          </p>
          <div className="social-list">
            <Link to="/#">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </Link>
            <Link to="/#">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </Link>
            <Link to="/#">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
