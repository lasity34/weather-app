import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
  AccordionItemButton,
} from "react-accessible-accordion";

export const Forecast = ({ data }) => {


    const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

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
                    <label className="day"></label>
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
