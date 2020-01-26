import React from "react";
import PropTypes from "prop-types";

const TechItem = ({ tech }) => {
  return (
    <li className="collection-item">
      <React.Fragment>
        {tech.firstName} {tech.lastName}
        <a href="#!" className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </React.Fragment>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired
};

export default TechItem;
