import { Dropdown, Footer } from "flowbite-react";
import type { FC } from "react";

const NewsletterSignUpFooterSection: FC = function () {
  return (
    <Footer>
      <div className="mx-auto max-w-screen-xl p-4 py-6 md:p-8 lg:p-10">
        <div className="gap-8 space-y-12 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
          <address className="not-italic">
            <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              New York
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Huntersville,
              <br /> 957 Hill Hills Suite 491, United States
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Office: +12(3) 456 7890 1234
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Support:{" "}
                <a
                  href="mailto:company@name.com"
                  className="ml-2 hover:underline"
                >
                  company@name.com
                </a>
              </li>
            </ul>
          </address>
          <address className="not-italic">
            <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              Rome
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Piazza di Spagna,
              <br /> 00187 Roma RM, Italy
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Office: +12(3) 456 7890 1234
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Support:{" "}
                <a
                  href="mailto:company@name.com"
                  className="ml-2 hover:underline"
                >
                  company@name.it
                </a>
              </li>
            </ul>
          </address>
          <address className="not-italic">
            <p className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
              London
            </p>
            <p className="mb-3 text-gray-500 dark:text-gray-400">
              Fulham Rd,
              <br />
              London SW6 1HS, United Kingdom
            </p>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
                Office: +12(3) 456 7890 1234
              </li>
              <li className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Support:{" "}
                <a
                  href="mailto:company@name.com"
                  className="ml-2 hover:underline"
                >
                  company@name.co.uk
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div className="mx-auto mt-6 max-w-screen-md items-center justify-between rounded-lg bg-gray-50 p-4 dark:bg-gray-700 sm:flex lg:mt-16">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
            Sign up to our newsletter
          </p>
          <form action="#" className="ml-0 mt-4 flex w-full sm:ml-5 sm:mt-0">
            <div className="relative w-full">
              <label
                htmlFor="email-subscribe"
                className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="email"
                id="email-subscribe"
                className="block w-full rounded-l-lg border border-gray-300 bg-white p-3 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Your email"
                required
              />
            </div>
            <button
              type="submit"
              className="cursor-pointer rounded-r-lg border border-primary-600 bg-primary-600 px-5 py-3 text-center text-sm text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Subscribe
            </button>
          </form>
        </div>
        <Footer.Divider />
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <Footer.Brand
            alt="Flowbite logo"
            href="https://flowbite.com"
            name="Flowbite"
            src="https://flowbite.com/docs/images/logo.svg"
          />
          <Footer.Copyright
            by="Flowbite™. All Rights Reserved."
            href="https://flowbite.com"
            year={2023}
          />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                <span>English (US)</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 3900 3900"
                  className="h-5 w-5 rounded-full"
                >
                  <path fill="#b22234" d="M0 0h7410v3900H0z"></path>
                  <path
                    d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                    stroke="#fff"
                    strokeWidth="300"
                  ></path>
                  <path fill="#3c3b6e" d="M0 0h2964v2100H0z"></path>
                  <g fill="#fff">
                    <g id="d">
                      <g id="c">
                        <g id="e">
                          <g id="b">
                            <path
                              id="a"
                              d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                            ></path>
                            <use xlinkHref="#a" y="420"></use>
                            <use xlinkHref="#a" y="840"></use>
                            <use xlinkHref="#a" y="1260"></use>
                          </g>
                          <use xlinkHref="#a" y="1680"></use>
                        </g>
                        <use xlinkHref="#b" x="247" y="210"></use>
                      </g>
                      <use xlinkHref="#c" x="494"></use>
                    </g>
                    <use xlinkHref="#d" x="988"></use>
                    <use xlinkHref="#c" x="1976"></use>
                    <use xlinkHref="#e" x="2470"></use>
                  </g>
                </svg>
              </span>
            }
          >
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>German</Dropdown.Item>
            <Dropdown.Item>Italian</Dropdown.Item>
            <Dropdown.Item>Spanish</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    </Footer>
  );
};

export default NewsletterSignUpFooterSection;
