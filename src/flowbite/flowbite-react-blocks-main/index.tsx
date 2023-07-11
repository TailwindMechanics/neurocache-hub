import { Flowbite } from "flowbite-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
const routes = [];
for (const path of Object.keys(pages)) {
  const fileName = path.match(/\.\/pages\/(.*)\.tsx$/)?.[1];
  if (!fileName) {
    continue;
  }

  const normalizedPathName = fileName.includes("$")
    ? fileName.replace("$", ":")
    : fileName.replace(/\/index/, "");

  routes.push({
    path: fileName === "index" ? "/" : `/${normalizedPathName.toLowerCase()}`,
    // @ts-expect-error
    Element: pages[path].default,
    // @ts-expect-error
    loader: pages[path]?.loader as unknown as LoaderFunction | undefined,
    // @ts-expect-error
    action: pages[path]?.action as unknown as ActionFunction | undefined,
    // @ts-expect-error
    ErrorBoundary: pages[path]?.ErrorBoundary as unknown as JSX.Element,
  });
}

const router = createBrowserRouter(
  // eslint-disable-next-line no-unused-vars
  routes.map(({ Element, ErrorBoundary, ...props }) => ({
    ...props,
    element: <Element />,
  }))
);

const rootElem = document.getElementById("root");
if (!rootElem) {
  throw new Error("React root element doesn't exist");
}

const root = createRoot(rootElem);
root.render(
  <StrictMode>
    <Flowbite>
      <RouterProvider router={router} />
    </Flowbite>
  </StrictMode>
);
