import {
  Accordion,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItem,
  AccordionItemButton
} from "react-accessible-accordion";

export const Forecast = ( { data }) => {
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          <AccordionItem key={idx}>
            <AccordionItemHeading>
                <AccordionItemButton>
                   <p>hello</p>
                </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
                <p></p>
            </AccordionItemPanel>
          </AccordionItem>;
        })}
      </Accordion>
    </>
  );
};
