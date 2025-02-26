import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Layout, Projects } from "./components";
import { StarsMovingBG } from "./shared/shared_components";
import { routes } from "./routes";

// Create a mapping of component names to components
const componentMapping: { [key: string]: React.ComponentType } = {
  Home,
  About,
  Projects,
  Contact,
};

function App() {
  return (
    <>
      <StarsMovingBG />
      <Routes>
        <Route element={<Layout />}>
          {routes.map((route, index) => {
            const Component = componentMapping[route.element];
            return (
              <Route
                key={index}
                path={route.path ? route.path : "/"}
                element={<Component />}
                index={route.index}
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
