//path: src\app\containers\PageContent.tsx

import { FC, Suspense, lazy, useRef, useEffect } from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "../routes";
import SuspenseContent from "./SuspenseContent";
import { useSelector } from "react-redux";

const Page404 = lazy(() => import("@/app/protected/404"));

interface IRootState {
  header: {
    pageTitle: string;
  };
  // your other reducers go here...
}

const PageContent: FC = () => {
  const mainContentRef = useRef<HTMLDivElement>(null);
  const { pageTitle } = useSelector((state: IRootState) => state.header);

  // Scroll back to top on new page load
  useEffect(() => {
    mainContentRef.current?.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pageTitle]);

  return (
    <div className="drawer-content flex flex-col ">
      <Header />
      <main
        className="flex-1 overflow-y-auto pt-8 px-6  bg-base-200"
        ref={mainContentRef}
      >
        <Suspense fallback={<SuspenseContent />}>
          <Routes>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                element={<route.component />}
              />
            ))}
            {/* Redirecting unknown url to 404 page */}
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Suspense>
        <div className="h-16"></div>
      </main>
    </div>
  );
};

export default PageContent;
