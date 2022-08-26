import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
  AccordionItemButton,
} from "react-accessible-accordion";

import "./forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const Forecast = ({ data }) => {


  const daysInAWeek = new Date().getDay();
  const forecastDay = WEEK_DAYS.slice(daysInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, daysInAWeek)
  );

  console.log(data);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    src={`icons/${item.weather[0].icon}.png`}
                    className="small-icon"
                  />
                  <label className="day">{forecastDay[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp)}°C/
                    {Math.round(item.main.temp_min)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details">
                    <div className="daily-details-grid-item">
                        <label>Pressure</label>
                        <label>{Math.ceil(item.main.pressure /100)} hPa</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Wind Speed</label>
                        <label>{item.wind.speed}  km/s</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Feels Like</label>
                        <label>{Math.floor(item.main.feels_like)}°C</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Humidity</label>
                        <label>{item.main.humidity}%</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Sea Level</label>
                        <label>{item.main.sea_level}m</label>
                    </div>
                    <div className="daily-details-grid-item">
                        <label>Clouds</label>
                        <label>{item.clouds.all}%</label>
                    </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

// const dayInWeek = new Date().getDay()
// WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))
