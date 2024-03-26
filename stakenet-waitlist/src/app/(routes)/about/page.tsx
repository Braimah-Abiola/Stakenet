import Beams from "@/components/ui/beam";

const AboutPage = () => {
  return (
    <div className="w-full px-3 md:px-40 flex flex-col items-center">
      <Beams />
      <div className="h-[8rem]" />
      <h1 className=" font-semibold text-5xl md:text-6xl text-white text-center">
        10X your winning <br />
        rate the StakeNet <br />
        app now!
      </h1>

      <div className=" max-w-xl gap-6 mt-6 flex flex-col">
        <h4 className=" text-white/80 text-lg">
          In a realm saturated with betting platforms offering generic
          solutions, Stakenet emerges as a beacon of personalized and insightful
          wagering experiences. While many apps provide surface-level features,
          lacking the depth required for tangible success, Stakenet
          distinguishes itself by offering users a tailored and enriching
          journey into the world of online betting.
        </h4>
        <h4 className=" text-white/80 text-lg">
          At the heart of Stakenet&apos;s mission is the meticulous tracking of
          your betting journey. Moving beyond simple bet placements, our
          platform allows users to monitor their bets comprehensively. This
          functionality serves as a powerful tool to visualize progress over
          time, fostering motivation and a sense of achievement as users witness
          their successes accumulate.
        </h4>
        <h4 className=" text-white/80 text-lg">
          Strategizing bets tailored to individual goals is crucial for
          maximizing returns, and Stakenet elevates this aspect to new heights.
          Our innovative predictive AI technology empowers users to make
          informed decisions about their bets, ensuring that they navigate the
          betting landscape with precision and confidence. This level of
          strategic guidance sets Stakenet apart in a market where generic
          solutions often lead to disappointment.
        </h4>
        <h4 className=" text-white/80 text-lg">
          Yet, Stakenet is more than just a betting platform; it&apos;s a
          holistic companion in your journey toward smarter and more rewarding
          betting. The platform encourages users to document their betting
          activity, capturing the nuances of their experience. This feature
          allows individuals to reflect on their wins, losses, and overall
          growth as bettors, creating a personalized record that transcends mere
          monetary gains.
        </h4>
        <h4 className=" text-white/80 text-lg">
          Embark on this transformative journey with us and discover a new
          dimension to online betting. Join Stakenet today and unlock the power
          of community-driven insights and predictive AI technology to enhance
          your betting experience like never before.
        </h4>

        <div className="flex flex-row items-center gap-2.5 mt-4">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.0576179 0.0574955L0.0576184 7.85822L15.6591 15.6589L0.0576175 23.4597L0.0576172 31.2604L15.6591 23.4597V31.2604L31.2605 23.4597V15.6589V7.85822L15.6591 0.0574951V7.85822L0.0576179 0.0574955ZM15.6591 7.85822V15.6589V23.4597L31.2605 15.6589L15.6591 7.85822Z"
                fill="white"
              />
            </svg>
          </div>
          <h4 className=" text-white text-xl font-medium">The Stakenet Team</h4>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
