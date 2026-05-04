import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ─── Lazy-loaded screens to avoid overwhelming the bundler ─── */
const Dashboard = lazy(() => import("./screens/Dashboard").then(m => ({ default: m.Dashboard })));
const Courses = lazy(() => import("./screens/Courses").then(m => ({ default: m.Courses })));
const LiveClasses = lazy(() => import("./screens/LiveClasses").then(m => ({ default: m.LiveClasses })));
const MockTest = lazy(() => import("./screens/MockTest").then(m => ({ default: m.MockTest })));
const MockTestQuestions = lazy(() => import("./screens/MockTestQuestions").then(m => ({ default: m.MockTestQuestions })));
const TestSeries = lazy(() => import("./screens/TestSeries").then(m => ({ default: m.TestSeries })));
const Bundles = lazy(() => import("./screens/Bundles").then(m => ({ default: m.Bundles })));
const Poll = lazy(() => import("./screens/Poll").then(m => ({ default: m.Poll })));
const Tracks = lazy(() => import("./screens/Tracks").then(m => ({ default: m.Tracks })));
const Code = lazy(() => import("./screens/Code").then(m => ({ default: m.Code })));
const MoreProducts = lazy(() => import("./screens/MoreProducts").then(m => ({ default: m.MoreProducts })));
const QuestionPool = lazy(() => import("./screens/QuestionPool").then(m => ({ default: m.QuestionPool })));
const Classification = lazy(() => import("./screens/Classification").then(m => ({ default: m.Classification })));
const Utilities = lazy(() => import("./screens/Utilities").then(m => ({ default: m.Utilities })));
const Export = lazy(() => import("./screens/Export").then(m => ({ default: m.Export })));
const CreateCourse = lazy(() => import("./screens/CreateCourse").then(m => ({ default: m.CreateCourse })));
const FillInfo = lazy(() => import("./screens/FillInfo").then(m => ({ default: m.FillInfo })));
const LessonViewer = lazy(() => import("./screens/LessonViewer").then(m => ({ default: m.LessonViewer })));
const LiveClassBasic = lazy(() => import("./screens/LiveClassBasic").then(m => ({ default: m.LiveClassBasic })));
const RecentActivity = lazy(() => import("./screens/RecentActivity").then(m => ({ default: m.RecentActivity })));
const CreateLiveClass = lazy(() => import("./screens/CreateLiveClass").then(m => ({ default: m.CreateLiveClass })));
const CreateLive = lazy(() => import("./screens/CreateLive").then(m => ({ default: m.CreateLive })));
const LiveClassesOn = lazy(() => import("./screens/LiveClassesOn").then(m => ({ default: m.LiveClassesOn })));
const MockTestOverview = lazy(() => import("./screens/MockTestOverviewV3").then(m => ({ default: m.MockTestOverview })));
const MockTestFormBuilder = lazy(() => import("./screens/MockTestFormBuilder").then(m => ({ default: m.MockTestFormBuilder })));
const MockTestFormBuilderV2 = lazy(() => import("./screens/MockTestFormBuilderV2").then(m => ({ default: m.MockTestFormBuilderV2 })));
const MockTestFigmaBuilder = lazy(() => import("./screens/MockTestFigmaBuilder").then(m => ({ default: m.MockTestFigmaBuilder })));
const MockTestSurveyBuilder = lazy(() => import("./screens/MockTestSurveyBuilder").then(m => ({ default: m.MockTestSurveyBuilder })));
const MockTestListing = lazy(() => import("./screens/MockTestListing").then(m => ({ default: m.MockTestListing })));
const CreateMockTest = lazy(() => import("./screens/CreateMockTest").then(m => ({ default: m.CreateMockTest })));
const MockTestBuilder = lazy(() => import("./screens/MockTestBuilder").then(m => ({ default: m.MockTestBuilder })));
const MockTestEditor = lazy(() => import("./screens/MockTestEditorV3").then(m => ({ default: m.MockTestEditor })));
const MockTestForm = lazy(() => import("./screens/MockTestForm").then(m => ({ default: m.MockTestForm })));
const MockTestQuestionEditor = lazy(() => import("./screens/MockTestQuestionEditor").then(m => ({ default: m.MockTestQuestionEditor })));
const MockTestFillForm = lazy(() => import("./screens/MockTestFillForm").then(m => ({ default: m.MockTestFillForm })));
const MockTestSetting = lazy(() => import("./screens/MockTestSetting").then(m => ({ default: m.MockTestSetting })));
const MockTestFillthe = lazy(() => import("./screens/MockTestFillthe").then(m => ({ default: m.MockTestFillthe })));
const MockTestDetails = lazy(() => import("./screens/MockTestDetails").then(m => ({ default: m.MockTestDetails })));
const MockTestAccepting = lazy(() => import("./screens/MockTestAccepting").then(m => ({ default: m.MockTestAccepting })));
const MockTestResponses = lazy(() => import("./screens/MockTestResponses").then(m => ({ default: m.MockTestResponses })));

/* ─── Loading fallback ─── */
function LoadingFallback() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#f4f6f9]">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-gray-200 border-t-[#0957a1]" />
        <span className="text-sm font-medium text-gray-400 [font-family:'Roboto',Helvetica]">Loading...</span>
      </div>
    </div>
  );
}

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/live-classes" element={<LiveClasses />} />
          <Route path="/mock-test" element={<MockTest />} />
          <Route path="/mock-test-questions" element={<MockTestQuestions />} />
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
          <Route path="/mock-test-overview" element={<MockTestOverview />} />
          <Route path="/mock-test-listing" element={<MockTestListing />} />
          <Route path="/create-mock-test" element={<CreateMockTest />} />
          <Route path="/mock-test-builder" element={<MockTestBuilder />} />
          <Route path="/mock-test-editor" element={<MockTestEditor />} />
          <Route path="/mock-test-form" element={<MockTestForm />} />
          <Route path="/mock-test-accepting" element={<MockTestAccepting />} />
          <Route path="/mock-test-responses" element={<MockTestResponses />} />
          <Route path="/mock-test-form-builder" element={<MockTestFormBuilderV2 />} />
          <Route path="/mock-test-form-builder-figma" element={<MockTestFigmaBuilder />} />
          <Route path="/mock-test-survey-builder" element={<MockTestSurveyBuilder />} />
          <Route path="/mock-test-form-builder-legacy" element={<MockTestFormBuilder />} />
          <Route path="/mock-test-question-editor" element={<MockTestQuestionEditor />} />
          <Route path="/mock-test-fill-form" element={<MockTestFillForm />} />
          <Route path="/mock-test-setting" element={<MockTestSetting />} />
          <Route path="/mock-test-fill-the" element={<MockTestFillthe />} />
          <Route path="/mock-test-details" element={<MockTestDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
);
