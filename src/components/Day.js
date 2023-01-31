import React from "react";

function Day({ date, day, hour, location }) {
  return (
    <div className="col-md-2">
      <div className="day">
        <h5>
          {new Date(date).toLocaleDateString("en-US", {
            weekday: "long",
          })}
        </h5>
        <p>{date}</p>
        <img src={day.condition.icon} alt="weather" />
        <h2 className="degree">
          {day.maxtemp_c} <sup>o</sup> C
        </h2>
        <span>{day.condition.text}</span>
      </div>
    </div>
  );
}

export default Day;
