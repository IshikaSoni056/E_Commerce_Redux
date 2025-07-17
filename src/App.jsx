import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home, Layout, ScrollToTop } from "./utils/Route";

function App() {
  return (
    <>
      <BrowserRouter basename="/E_Commerce_Redux">
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
