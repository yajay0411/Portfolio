import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { StarsMovingBG } from "./shared/shared_components";
import { routes } from "./routes";

const Layout = React.lazy(() => import("./components/Layout/Layout"));
const Home = React.lazy(() => import("./components/pages/Home"));
const About = React.lazy(() => import("./components/pages/About"));
const Projects = React.lazy(() => import("./components/pages/Projects"));
const Contact = React.lazy(() => import("./components/pages/Contact"));

// Lazy load the components
const componentMapping: {
  [key: string]: React.LazyExoticComponent<React.ComponentType<any>>;
} = {
  Home,
  About,
  Projects,
  Contact,
};

function App() {
  return (
    <>
      <StarsMovingBG />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            {routes.map((route, index) => {
              const Component = componentMapping[route.element];
              return (
                <Route
                  key={index}
                  path={route.path || "/"}
                  element={<Component />}
                  index={route.index}
                />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
