import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LandingWrapper from "../wrapper/landing-wrapper";

const Faq = () => {
  return (
    <div className="z-[1]" id="faqs">
      <LandingWrapper>
        <div className="flex flex-col items-center -mt-20 md:-mt-0 mb-40">
          <h1 className="text-5xl text-white font-semibold text-center mt-20 md:mt-32">
            FAQs
          </h1>
          <Accordion
            type="multiple"
            className="w-full max-w-4xl mt-10 gap-4 flex flex-col"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Stakenet?</AccordionTrigger>
              <AccordionContent>
                Stakenet is a revolutionary platform designed to enhance your
                online betting experience. By combining the wisdom of a strong
                community with advanced predictive AI technology, Stakenet helps
                users make more informed decisions and increase their chances of
                winning bets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How does Stakenet work?</AccordionTrigger>
              <AccordionContent>
                Stakenet harnesses the power of collective intelligence by
                aggregating insights and predictions from its community members.
                Our cutting-edge AI algorithms analyze this data alongside
                relevant factors such as historical trends and real-time
                information, providing users with actionable insights to inform
                their betting strategies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I trust the predictions provided by Stakenet?
              </AccordionTrigger>
              <AccordionContent>
                While no prediction can guarantee success, Stakenet is committed
                to providing accurate and reliable insights based on thorough
                analysis and input from our community members and AI algorithms.
                We encourage users to use our predictions as one of many factors
                in their decision-making process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What platforms are supported?</AccordionTrigger>
              <AccordionContent>
                Stakenet will be available on mobile (iOS & Android) as well as
                web for desktop users on release day.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                How can I join the Stakenet community?
              </AccordionTrigger>
              <AccordionContent>
                Joining the Stakenet community is simple! Sign up for our
                waitlist and join the telegram channel to gain early access to
                the platform and become part of a vibrant community of
                like-minded individuals passionate about online betting.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </LandingWrapper>
    </div>
  );
};

export default Faq;
