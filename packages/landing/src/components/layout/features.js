import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { features } from "../../../../helpers/data/features";

// Library creation
library.add(fas, fab);

export default () => {
  return (
    <>
      <section className="features">
        <div className="section-header">
          <h1 className="section-heading">Features</h1>
          <div className="underline"></div>
          <div className="services">
            {features.map((el, i) => (
              <div className="service" key={i}>
                <div className="service__header">
                  <FontAwesomeIcon
                    icon={[el.icon_prefix, el.icon]}
                    aria-hidden="true"
                    className="icon"
                  />
                  <h3>{el.title}</h3>
                </div>
                <p className="service__text">{el.description}</p>
              </div>
            ))}
            <div className="features-img-wrapper">
              <FontAwesomeIcon
                icon={["fas", "lightbulb"]}
                aria-hidden="true"
                className="wrapper-icon"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
