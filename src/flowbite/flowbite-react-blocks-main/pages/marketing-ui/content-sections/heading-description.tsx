import type { FC } from "react";

const HeadingWithDescriptionContentSection: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
        <div className="max-w-screen-lg text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Powering innovation at&nbsp;
            <span className="font-extrabold">200,000+</span> companies worldwide
          </h2>
          <p className="mb-4 font-light">
            Track work across the enterprise through an open, collaborative
            platform. Link issues across Jira and ingest data from other
            software development tools, so your IT support and operations teams
            have richer contextual information to rapidly respond to requests,
            incidents, and changes.
          </p>
          <p className="mb-4 font-medium">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Learn more
            <svg
              className="ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeadingWithDescriptionContentSection;
