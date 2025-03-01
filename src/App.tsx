import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { StarsMovingBG } from "./shared/shared_components";
import { routes } from "./routes";
import { lazyLoad } from "./shared/utils/lazyLoad";


const Layout = React.lazy(() => import("./components/Layout/Layout"));
// Lazy load the components
const componentMapping: { [key: string]: React.LazyExoticComponent<React.ComponentType<any>> } = {
  Home:lazyLoad("Home"),
  About:lazyLoad("About"),
  Projects:lazyLoad("Projects"),
  Contact: lazyLoad("Contact"),
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