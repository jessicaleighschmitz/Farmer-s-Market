import React from "react";
import PropTypes from "prop-types";

function ProduceItem (props) {
  return (
    <div>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((item, index) =>
        <li key={index}>{item}</li>
        )}
      </ul>

      <style jsx>{`
          h3{
            text-align: center;
            text-decoration: underline;
            font-size: 1.4rem
          }
          li{
            font-size: 1.2rem;
          }
            `}
      </style>

    </div>
  );
}

ProduceItem.PropTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
}

export default ProduceItem;
