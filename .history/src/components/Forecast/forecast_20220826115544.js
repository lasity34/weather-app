import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
  AccordionItemButton,
} from "react-accessible-accordion";

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

export const Forecast = ({ data }) => {
    
   const daysInAWeek = new Date().getDay()
   const forecastDay = WEEK_DAYS.slice(daysInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, daysInAWeek))

   console.log(data)

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                    <img alt="weather" src={`icons/${item.weather[0].icon}.png`} className="small-icon" />
                    <label className="day">{forecastDay[idx]}</label>
                    <label className="description">{item.weather[0].description}</label>
                    <label className="min-max">{Math.ceil(item.main.temp)}{Math.ceil(item.main.temp_min)}</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Hello</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};


    // const dayInWeek = new Date().getDay()
    // WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek))

