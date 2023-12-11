import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { AddProjectPage } from "./pages/AddProjectPage.jsx";
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddProjectPage" element={<AddProjectPage />} />
      </Routes>
    </>
  );
}

export default App;
