import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import QuestionOne from "./Pages/Sections/Question-one";
import QuestionTwo from "./Pages/Sections/Question-two";

const Principal = lazy(() => import("./Pages/Sections/Principal"));

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>carregando...</div>}>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />}>
            <Route path="/principal" element={<Principal />} />
            <Route path="/question-one" element={<QuestionOne />} />
            <Route path="/question-two" element={<QuestionTwo />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
