import { Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./helpers/notfound";
import Layout from "./layout/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Layout />} />
        <Route path="/business" element={<Layout />} />
        <Route path="/risk" element={<Layout />} />
        <Route path="/funding" element={<Layout />} />
        <Route path="/konnect" element={<Layout />} />
        <Route path="/academy" element={<Layout />} />
        <Route path="/support" element={<Layout />} />
        <Route path="/" element={<Navigate to="/home" replace={true} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
