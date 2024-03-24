const PrivacyPolicy = () => {
  return (
    <div className="w-full px-40 flex flex-col items-center">
      <div className="h-[8rem]" />
      <h1 className=" font-semibold text-6xl text-white text-center">
        Privacy Policy
      </h1>

      <div className=" max-w-xl gap-6 mt-5 flex flex-col">
        <h4 className=" text-white/80 text-lg">
          Your privacy is important to us.
        </h4>
        <h4 className=" text-white/80 text-lg">
          It is Stakenet policy to respect your privacy and comply with any
          applicable law and regulation regarding any personal information we
          may collect about you, including acrossour website, and other sites we
          own and operate.
        </h4>
        <p className=" text-white text-lg font-medium">
          This policy is effective as of 24 March 2024.
        </p>
        <p className=" text-white text-lg font-medium">
          Last updated on 24 March 2024
        </p>

        <h1 className=" font-semibold text-5xl mt-10 text-white text-start">
          Information we collect
        </h1>

        <h1 className=" font-semibold text-4xl mt-10 text-white text-start">
          Personal Information
        </h1>

        <h4 className=" text-white/80 text-lg">
          We want to process as little personal information as possible when you
          use our website. That&apos;s why we&apos;ve Vercel Analytics for our
          website analytics, which doesn&apos;t use cookies and complies with
          the GDPR, ePrivacy (including PECR), COPPA and CCPA. Using this
          privacy-friendly website analytics software, your IP address is only
          briefly processed, and we (running this website) have no way of
          identifying you. As per the CCPA, your personal information is
          de-identified. You can read more about this on Fathom Analytics
          website.
        </h4>
        <h4 className=" text-white/80 text-lg">
          The purpose of me using this software is to understand our website
          traffic in the most privacy-friendly way possible so that we can
          continually improve our website. The lawful basis as per the GDPR is
          &apos;Article 6(1)(f); where our legitimate interests are to improve
          our website.&apos; As per the explanation, no personal data is stored
          over time.
        </h4>

        <h1 className=" font-semibold text-4xl mt-10 text-white text-start">
          Collection and Use of Information
        </h1>
        <h4 className=" text-white/80 text-lg">
          We may ask for personal information - when you contact me - which may
          include one or more of the following:
        </h4>

        <div className="flex flex-row items-start gap-2.5">
          <div className="h-2.5 w-2.5 aspect-square bg-white rounded-full" />
          <h4 className=" text-white/80 text-lg -mt-2 text-start">Email</h4>
        </div>

        <h1 className=" font-semibold text-4xl mt-10 text-white text-start">
          Legitimate Reasons for Processing Your Personal Information
        </h1>
        <h4 className=" text-white/80 text-lg">
          We only collect and use your personal information when we have a
          legitimate reason for doing so. In which instance, we only collect
          personal information that is reasonably necessary to provide our
          services to you when you contact me.
        </h4>

        <h1 className=" font-semibold text-4xl mt-10 text-white text-start">
          Limits of Our Policy
        </h1>
        <h4 className=" text-white/80 text-lg">
          Our website may link to external sites that are not operated by me.
          Please be aware that we have no control over the content and policies
          of those sites, and cannot accept responsibility or liability for
          their respective privacy practices.
        </h4>

        <h1 className=" font-semibold text-4xl mt-10 text-white text-start">
          Changes to This Policy
        </h1>
        <h4 className=" text-white/80 text-lg">
          At our discretion, we may change our privacy policy to reflect updates
          to our business processes, current acceptable practices, or
          legislative or regulatory changes. If wedecide to change this privacy
          policy, we will post the changes here at the same link by which you
          are accessing this privacy policy.
        </h4>
        <h4 className=" text-white/80 text-lg">
          If required by law, we will get your permission or give you the
          opportunity to opt in to or opt out of, as applicable, any new uses of
          your personal information.
        </h4>

        <h1 className=" font-semibold text-4xl mt-10 text-white text-start">
          Contact Us
        </h1>
        <h4 className=" text-white/80 text-lg">
          For any questions or concerns regarding your privacy, you may contact
          us using the following details:
        </h4>
        <h4 className=" text-white/80 text-lg underline underline-offset-2">
          {" "}
          supprt@stakenet.co
        </h4>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
