import { Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import type { FC } from "react";

const SearchBarWithLinksFAQSection: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            How can we help you?
          </h2>
          <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Here are a few of the questions we get the most. If you don't see
            what's on your mind, reach out to us anytime on phone, chat, or
            email.
          </p>
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                aria-hidden
                className="h-6 w-6 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <TextInput
              icon={HiSearch}
              id="search"
              placeholder="Type keywords to find answers"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            You can also browse the topics below to find what you are looking
            for.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">General</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  How to update
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to change the language
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About forwarding limits
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to update Flowbite
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">Android</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  Verifying your number
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to restore your chat history
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Account & Profile
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">Iphone</h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  How to restore your chat history
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to use status
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Can’t log out
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold dark:text-white">
              Web & Desktop
            </h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:underline">
                  About WhatsApp Web and Desktop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to log in or out
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to manage your notifications
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  How to update Flowbite
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBarWithLinksFAQSection;
