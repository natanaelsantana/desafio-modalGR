import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { lazy, Suspense } from "react";
import { Loader } from "./Components/Fallback";
import QuestionOne from "./Pages/Sections/Question-one";
import QuestionTwo from "./Pages/Sections/Question-two";

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js").then(
      (registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      (error) => {
        console.log("ServiceWorker registration failed: ", error);
      }
    );
  });
}

const Home = lazy(() => import("./Pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="*" element={<Home />} />

          <Route path="/" element={<Home />}>
            <Route path="/question-one" element={<QuestionOne />} />
            <Route path="/question-two" element={<QuestionTwo />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
