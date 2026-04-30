import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./screens/Dashboard";
import { Courses } from "./screens/Courses";
import { LiveClasses } from "./screens/LiveClasses";
import { MockTest } from "./screens/MockTest";
import { TestSeries } from "./screens/TestSeries";
import { Bundles } from "./screens/Bundles";
import { Poll } from "./screens/Poll";
import { Tracks } from "./screens/Tracks";
import { Code } from "./screens/Code";
import { MoreProducts } from "./screens/MoreProducts";
import { QuestionPool } from "./screens/QuestionPool";
import { Classification } from "./screens/Classification";
import { Utilities } from "./screens/Utilities";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/live-classes" element={<LiveClasses />} />
        <Route path="/mock-test" element={<MockTest />} />
        <Route path="/test-series" element={<TestSeries />} />
        <Route path="/bundles" element={<Bundles />} />
        <Route path="/poll" element={<Poll />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/code" element={<Code />} />
        <Route path="/more-products" element={<MoreProducts />} />
        <Route path="/question-pool" element={<QuestionPool />} />
        <Route path="/classification" element={<Classification />} />
        <Route path="/utilities" element={<Utilities />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
