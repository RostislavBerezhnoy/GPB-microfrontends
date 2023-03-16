import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "./views/Container";

const Test1 = lazy(() => import("gpb_test1/Test1"));
const Test2 = lazy(() => import("gpb_test2/Test2"));
const Test3 = lazy(() => import("gpb_test3/Test3"));

const App = () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route
          path="/"
          element={

            <Container
              Test1={Test1}
              Test2={Test2}
              Test3={Test3}
            />

          }
        />
        <Route path="gpb_test1/*" element={<Test1 />} />
        <Route path="gpb_test2/*" element={<Test2 />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
