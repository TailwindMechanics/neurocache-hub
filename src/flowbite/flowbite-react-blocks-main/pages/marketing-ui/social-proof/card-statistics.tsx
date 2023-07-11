import { Card } from "flowbite-react";
import type { FC } from "react";

const CardsWithStatisticsSocialProof: FC = function () {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 xl:px-0">
        <div className="mx-auto mb-8 max-w-screen-md text-center md:mb-16">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Transformation by the numbers
          </h2>
        </div>
        <div className="mb-4 space-y-4 md:mb-8 md:grid md:grid-cols-3 md:gap-4 md:space-y-0 xl:gap-16">
          <Card className="flex items-center justify-center rounded-none border-0 !bg-gray-50 text-center">
            <div>
              <p className="mb-2 text-4xl font-extrabold md:text-5xl">40%</p>
              <h3 className="mb-2 text-xl font-semibold">Reduction</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                in developer onboarding time{" "}
                <span className="font-medium text-primary-600 dark:text-primary-500">
                  *
                </span>
              </p>
            </div>
          </Card>
          <Card className="flex items-center justify-center rounded-none border-0 !bg-gray-50 text-center">
            <div>
              <p className="mb-2 text-4xl font-extrabold md:text-5xl">469%</p>
              <h3 className="mb-2 text-xl font-semibold">
                Return on investment
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                over 3 years{" "}
                <span className="font-medium text-primary-600 dark:text-primary-500">
                  *
                </span>
              </p>
            </div>
          </Card>
          <Card className="flex items-center justify-center rounded-none border-0 !bg-gray-50 text-center">
            <div>
              <p className="mb-2 text-4xl font-extrabold md:text-5xl">60+</p>
              <h3 className="mb-2 text-xl font-semibold">Minutes saved</h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                per developer, per day{" "}
                <span className="font-medium text-primary-600 dark:text-primary-500">
                  *
                </span>
              </p>
            </div>
          </Card>
        </div>
        <p className="text-center text-sm font-light text-gray-500 dark:text-gray-400">
          <span className="font-medium text-primary-600 dark:text-primary-500">
            *
          </span>{" "}
          Results based on a composite organization of 1,800 developers using
          GitHub over three years.
        </p>
      </div>
    </section>
  );
};

export default CardsWithStatisticsSocialProof;
