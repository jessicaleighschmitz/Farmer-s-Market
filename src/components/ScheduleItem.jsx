import React from "react";
import PropTypes from "prop-types";

function ScheduleItem (props) {
  return (
    <div className="scheduleItem">
      <p><strong>Day: </strong>{props.day}</p>
      <p><strong>Location: </strong>{props.location}</p>
      <p><strong>Hours: </strong>{props.hours}</p>
      <p><strong>Booth: </strong>{props.booth}</p>

      <style jsx>{`
        .scheduleItem{
          font-size: 1.2rem;
        }
            `}

      </style>


    </div>
  );
}

ScheduleItem.PropTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
}

export default ScheduleItem;
