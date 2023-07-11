import { Button, TextInput } from "flowbite-react";
import type { FC } from "react";

const EmailSignUpCardNewsletterSection: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="items-center justify-between gap-16 rounded-lg bg-gray-900 p-6 text-white dark:bg-gray-800 md:p-12 lg:flex lg:gap-24">
          <div className="w-full">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="font-light text-gray-400 sm:text-xl">
              Stay up to date with the roadmap progress, announcements and
              exclusive discounts feel free to sign up with your email.
            </p>
          </div>
          <div className="mt-6 w-full lg:mt-0">
            <form action="#">
              <div className="mb-3 items-center space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="member_email"
                    className="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <TextInput
                    icon={() => (
                      <svg
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                    )}
                    id="member_email"
                    name="member_email"
                    placeholder="Enter your email"
                    required
                    type="email"
                    className="md:[&_input]:rounded-r-none"
                  />
                </div>
                <div>
                  <Button
                    color="info"
                    type="submit"
                    className="w-full md:w-fit md:rounded-l-none"
                  >
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="text-left text-sm text-gray-400 dark:text-gray-300">
                We care about the protection of your data.&nbsp;
                <a href="#" className="font-medium text-white hover:underline">
                  Read our Privacy Policy
                </a>
                .
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignUpCardNewsletterSection;
