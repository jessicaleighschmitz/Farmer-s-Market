import React from "react";
import PropTypes from "prop-types";

function ProduceItem (props) {
  return (
    <div>
      <h3>{props.month}</h3>

    </div>
  );
}

ProduceItem.PropTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.string.isRequired
}

export default ProduceItem;
