import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { AddProjectPage } from "./pages/AddProjectPage.jsx";
import { ProjectDitailPage } from "./pages/ProjectDitail.jsx";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddProjectPage" element={<AddProjectPage />} />
        <Route path="/ProjectDitail/:id" element={<ProjectDitailPage />} />
      </Routes>
    </>
  );
}

export default App;
