import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="z-10" id="faq">
      <div className="flex flex-col items-center -mt-20 md:-mt-0 mb-40">
        <h1 className="text-5xl text-white font-semibold text-center mt-20 md:mt-32">
          FAQs
        </h1>
        <Accordion
          type="multiple"
          className="w-full max-w-4xl mt-10 gap-4 flex flex-col z-[1]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>When is the app releasing?</AccordionTrigger>
            <AccordionContent>sdfa</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What features will be available on release day?
            </AccordionTrigger>
            <AccordionContent>
              $ELP is a community driven token in the Solana network which aims
              to reach 1 Billion Market Cap
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              What platforms will this support?
            </AccordionTrigger>
            <AccordionContent>
              $ELP is a community driven token in the Solana network which aims
              to reach 1 Billion Market Cap
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
