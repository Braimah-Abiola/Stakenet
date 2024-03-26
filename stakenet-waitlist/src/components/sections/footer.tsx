import Image from "next/image";
import AppStoreButton from "../ui/app-store-button";
import GooglePlayButton from "../ui/google-play-button";
import FooterLink from "../ui/footer-link";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full md:pt-20 pb-6 footer-pattern">
      <div className="w-full flex items-center flex-col md:flex-row justify-between px-3 md:px-40">
        <div className="flex flex-col items-start w-full md:w-1/2">
          <h1 className=" font-semibold text-5xl text-white">
            10X your winning <br />
            rate the StakeNet <br />
            app now!
          </h1>
          <div className="flex flex-row gap-4 mt-8 md:mt-12 z-[1]">
            <AppStoreButton />
            <GooglePlayButton />
          </div>
        </div>
        <div className="w-full ">
          <div
            className="relative h-[750px] md:ml-20 w-full -mt-20 md:-mt-0"
            id="float"
          >
            <Image
              className=" object-contain"
              fill
              src="/images/footer-img.png"
              alt="Product mockup"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between md:items-end px-3 md:px-40 mt-10">
        <div className="flex flex-col items-start gap-2 mb-2.5">
          <div className=" mb-4 flex flex-row gap-10">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://t.me/stakenet"
            >
              <svg
                className=" grayscale-[100] hover:grayscale-0 hover:scale-125 ease-in-out duration-200 cursor-pointer"
                width="34"
                height="27"
                viewBox="0 0 39 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.1262 0.282505C35.1262 0.282505 38.6785 -1.10264 38.3824 2.26128C38.2838 3.64644 37.3957 8.49444 36.705 13.7382L34.3368 29.2717C34.3368 29.2717 34.1395 31.5472 32.3633 31.943C30.5871 32.3387 27.923 30.5579 27.4296 30.1621C27.0349 29.8653 20.0291 25.413 17.5621 23.2364C16.8714 22.6427 16.082 21.4554 17.6608 20.0703L28.0216 10.1765C29.2057 8.98916 30.3898 6.21888 25.4561 9.5828L11.6417 18.982C11.6417 18.982 10.0629 19.9714 7.10272 19.0809L0.688842 17.1022C0.688842 17.1022 -1.67935 15.6181 2.36631 14.1339C12.2338 9.48379 24.3707 4.73472 35.1262 0.282505Z"
                  fill="#AECE2A"
                />
              </svg>
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://instagram.com/stakenetapp"
            >
              <svg
                className=" grayscale-[100] hover:grayscale-0 hover:scale-125 ease-in-out duration-200 cursor-pointer"
                width="28"
                height="27"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_247_68)">
                  <path
                    d="M16.4 0C12.051 0 11.509 0.021 9.80696 0.093C8.09796 0.177 6.94196 0.442 5.92196 0.838C4.86996 1.25 3.97396 1.797 3.08896 2.687C2.19796 3.572 1.64596 4.468 1.23996 5.52C0.843962 6.54 0.578962 7.696 0.494962 9.405C0.417962 11.108 0.401962 11.649 0.401962 15.998C0.401962 20.347 0.422962 20.889 0.494962 22.591C0.578962 24.295 0.843962 25.456 1.23996 26.476C1.65196 27.528 2.19896 28.424 3.08896 29.309C3.97396 30.2 4.86996 30.752 5.92196 31.158C6.94196 31.549 8.10296 31.819 9.80696 31.903C11.51 31.98 12.051 31.996 16.4 31.996C20.749 31.996 21.291 31.975 22.993 31.903C24.697 31.819 25.858 31.548 26.878 31.158C27.93 30.746 28.826 30.199 29.711 29.309C30.602 28.424 31.154 27.533 31.56 26.476C31.951 25.456 32.221 24.295 32.305 22.591C32.382 20.888 32.398 20.347 32.398 15.998C32.398 11.649 32.377 11.107 32.305 9.405C32.221 7.701 31.95 6.534 31.56 5.52C31.148 4.468 30.601 3.572 29.711 2.687C28.826 1.796 27.935 1.244 26.878 0.838C25.858 0.442 24.697 0.177 22.993 0.093C21.29 0.016 20.749 0 16.4 0ZM16.4 2.88C20.671 2.88 21.181 2.901 22.869 2.973C24.426 3.046 25.274 3.306 25.837 3.526C26.588 3.817 27.113 4.161 27.681 4.723C28.238 5.28 28.582 5.811 28.873 6.562C29.093 7.125 29.353 7.973 29.426 9.53C29.498 11.218 29.519 11.729 29.519 15.999C29.519 20.269 29.498 20.78 29.42 22.468C29.336 24.025 29.076 24.873 28.857 25.436C28.554 26.187 28.216 26.712 27.658 27.28C27.095 27.837 26.559 28.181 25.814 28.472C25.258 28.692 24.398 28.952 22.835 29.025C21.138 29.097 20.638 29.118 16.356 29.118C12.074 29.118 11.575 29.097 9.87596 29.019C8.31896 28.935 7.45996 28.675 6.89696 28.456C6.13696 28.153 5.61596 27.815 5.05796 27.257C4.49496 26.694 4.13696 26.158 3.86096 25.413C3.63696 24.857 3.38096 23.997 3.29796 22.434C3.24096 20.757 3.21396 20.237 3.21396 15.975C3.21396 11.715 3.24096 11.194 3.29796 9.496C3.38096 7.933 3.63696 7.075 3.86096 6.517C4.13696 5.756 4.49596 5.236 5.05796 4.673C5.61496 4.116 6.13696 3.756 6.89696 3.474C7.45996 3.255 8.29796 2.995 9.86096 2.917C11.558 2.856 12.058 2.834 16.334 2.834L16.4 2.88ZM16.4 7.787C11.859 7.787 8.18696 11.464 8.18696 16C8.18696 20.541 11.864 24.213 16.4 24.213C20.941 24.213 24.613 20.536 24.613 16C24.613 11.459 20.936 7.787 16.4 7.787ZM16.4 21.333C13.452 21.333 11.067 18.948 11.067 16C11.067 13.052 13.452 10.667 16.4 10.667C19.348 10.667 21.733 13.052 21.733 16C21.733 18.948 19.348 21.333 16.4 21.333ZM26.864 7.459C26.864 8.522 25.999 9.38 24.941 9.38C23.878 9.38 23.02 8.521 23.02 7.459C23.02 6.402 23.884 5.542 24.941 5.542C25.998 5.542 26.864 6.402 26.864 7.459Z"
                    fill="#AECE2A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_247_68">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0.399963)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/stakenetapp"
            >
              <svg
                className=" grayscale-[100] hover:grayscale-0 hover:scale-125 ease-in-out duration-200 cursor-pointer"
                width="30"
                height="27"
                viewBox="0 0 35 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.483148 0.00195312L13.6819 17.6496L0.399963 31.998H3.38943L15.018 19.4355L24.4132 31.998H34.5858L20.6441 13.3579L33.007 0.00195312H30.0176L19.3086 11.5714L10.6557 0.00195312H0.483148ZM4.87929 2.20375H9.55252L30.1891 29.7962H25.5159L4.87929 2.20375Z"
                  fill="#AECE2A"
                />
              </svg>
            </Link>
          </div>
          <FooterLink
            link="mailto:support@stakenet.co"
            text="Mail: contact@stakenet.co"
          />
        </div>
        <div className="flex flex-row gap-10">
          <FooterLink
            link="/legals/privacy-policy"
            text="StakeNet Privacy Policy"
          />
          <FooterLink
            link="/legals/terms-of-service"
            text="Terms of Services"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
