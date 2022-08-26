import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
} from "react-accessible-accordion";

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
