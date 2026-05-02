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
import { Export } from "./screens/Export";
import { CreateCourse } from "./screens/CreateCourse";
import { FillInfo } from "./screens/FillInfo";
import { LessonViewer } from "./screens/LessonViewer";
import { LiveClassBasic } from "./screens/LiveClassBasic";
import { RecentActivity } from "./screens/RecentActivity";
import { CreateLiveClass } from "./screens/CreateLiveClass";
import { CreateLive } from "./screens/CreateLive";
import { LiveClassesOn } from "./screens/LiveClassesOn";

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
        <Route path="/export" element={<Export />} />
        <Route path="/create-course" element={<CreateCourse />} />
        <Route path="/fill-info" element={<FillInfo />} />
        <Route path="/lesson-viewer" element={<LessonViewer />} />
        <Route path="/live-class-basic" element={<LiveClassBasic />} />
        <Route path="/recent-activity" element={<RecentActivity />} />
        <Route path="/create-live-class" element={<CreateLiveClass />} />
        <Route path="/create-live" element={<CreateLive />} />
        <Route path="/live-classes-on" element={<LiveClassesOn />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
