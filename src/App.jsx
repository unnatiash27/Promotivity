import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@pages/Home"));
const Todo = lazy(() => import("@pages/Todo"));

function App() {
  return (
    <div className="max-w-4xl mx-auto p-5 ">
      <Suspense fallback={""}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<Todo />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
