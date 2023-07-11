import type { FC } from "react";

const FAQSectionWithThreeColumns: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-lg text-center">
          <h2 className="mb-2 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mb-8 text-gray-500 dark:text-gray-400 lg:text-lg">
            Ask us anything about our brand and products, and get factual
            responses.
          </p>
        </div>
        <div className="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-16">
          <div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                What do you mean by "Figma assets"?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                You will have access to download the full Figma project
                including all of the pages, the components, responsive pages,
                and also the icons, illustrations, and images included in the
                screens.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                What does "lifetime access" exactly mean?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Once you have purchased either the design, code, or both
                packages, you will have access to all of the future updates
                based on the roadmap, free of charge.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                How does support work?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                We're aware of the importance of well qualified support, that is
                why we decided that support will only be provided by the authors
                that actually worked on this project.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Feel free to{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact us
                </a>{" "}
                and we'll help you out as soon as we can.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                I want to build more than one project with Flowbite. Is that
                allowed?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                You can use Flowbite for an unlimited amount of projects,
                whether it's a personal website, a SaaS app, or a website for a
                client. As long as you don't build a product that will directly
                compete with Flowbite either as a UI kit, theme, or template,
                it's fine.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Find out more information by
                <a
                  href="https://flowbite.com/license"
                  className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
                >
                  reading the license
                </a>
                .
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                What does "free updates" include?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The free updates that will be provided is based on the{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
                >
                  roadmap
                </a>
                that we have laid out for this project. It is also possible that
                we will provide extra updates outside of the roadmap as well.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                What does the free version include?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
                >
                  free version
                </a>{" "}
                of Flowbite includes a minimal style guidelines, component
                variants, and a dashboard page with the mobile version alongside
                it.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                You can use this version for any purposes, because it is
                open-source under the MIT license.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                What is the difference between Flowbite and Tailwind UI?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Although both Flowbite and Tailwind UI are built for integration
                with Tailwind CSS, the main difference is in the design, the
                pages, the extra components and UI elements that Flowbite
                includes.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Additionally, Flowbite is a project that is still in
                development, and later it will include both the application,
                marketing, and e-commerce UI interfaces.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Can I use Flowbite in open-source projects?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Generally, it is accepted to use Flowbite in open-source
                projects, as long as it is not a UI library, a theme, a
                template, a page-builder that would be considered as an
                alternative to Flowbite itself.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                With that being said, feel free to use this design kit for your
                open-source projects.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Find out more information by
                <a
                  href="https://flowbite.com/license"
                  className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
                >
                  reading the license
                </a>
                .
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                When will I get access to the Tailwind CSS code if I pre-ordered
                it?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                The official date that we have set out to release the code
                version of Flowbite is the{" "}
                <span className="font-medium text-gray-900">
                  25th of September, 2021
                </span>
                . We are already working on the integration and if you have a
                pre-order, you will also get frequent updates about the
                progress.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                You'll be one of the first to know when it will be available.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                What is your refund policy?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                If you are unhappy with your purchase, just{" "}
                <a
                  href="#"
                  className="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  contact us
                </a>{" "}
                within 30 days and we'll issue a full refund.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Is it allowed to use the design assets, such as the fonts,
                icons, and illustrations?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                What you see is what you get. Which means that all icons, fonts,
                and illustrations can be used based on the licensing that we
                researched or purchased. For example, we purchased rights to use
                the illustrations in Flowbite.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Where can I access my download files?
              </h3>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                After you purchased one of the plans, you will get two emails:
                one for the invoice, and another one with the download files.
              </p>
              <p className="mb-4 text-gray-500 dark:text-gray-400">
                Soon we will create a way that you will be able to access the
                download files from the Flowbite dashboard from this website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSectionWithThreeColumns;
