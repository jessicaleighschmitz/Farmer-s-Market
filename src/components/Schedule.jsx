import React from "react";
import marketSchedule from './ScheduleData';
import ScheduleItem from './ScheduleItem';

function Schedule(){


  return (
    <div>
      <h2>Market Schedule</h2>
      <div className="market-container">
      {marketSchedule.map((scheduleItem, index) =>
      <ScheduleItem day={scheduleItem.day}
        location={scheduleItem.location}
        hours={scheduleItem.hours}
        booth={scheduleItem.booth}
        key={index}/>
      )}
      </div>
      <style jsx>{`
          .market-container{
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            grid-auto-flow: dense;
            max-width: 1000px;
          }
          `}</style>

    </div>
  );
}

export default Schedule;
