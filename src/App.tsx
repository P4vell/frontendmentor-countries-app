import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import CountryDetails from "./pages/CountryDetails";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:cca3" element={<CountryDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
