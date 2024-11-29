import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import ResearchMethodsPage from "./pages/ResearchMethodsPage/ResearchMethodsPage";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" />} />
        <Route path="methods" element={<ResearchMethodsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
