import { Route, Routes } from "react-router-dom";
import { About, Contact, Home, Layout, Projects } from "./components";
import { StarsMovingBG } from "./shared/shared_components";

function App() {
  return (
    <>
      <StarsMovingBG />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="projects" element={<Projects />}></Route>
          <Route path="contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
