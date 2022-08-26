import { Accordion } from "react-accessible-accordion";
import { AccordionItemHeading } from "react-accessible-accordion/dist/types/components/AccordionItemHeading";

export const Forecast = () => {
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          <AccordionItem>
            <AccordionItemHeading></AccordionItemHeading>
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>;
        })}
      </Accordion>
    </>
  );
};
