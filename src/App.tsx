// App.tsx

import classes from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import SwapPage from "./pages/SwapPage/SwapPage";
import SwapLayout from "./Layout/SwapLayout/SwapLayout";
import ProtectedRoute from "./components/common/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/common/NotFound/NotFound";
import { Heading } from "./components/common";
import HistoryPage from "./pages/HistoryPage/HistoryPage";
import ChartPage from "./pages/ChartPage/ChartPage";

const App = () => {
  const isAuthenticated = true;

  return (
    <>
      <Heading xl5 className={classes.heading} primitive0>
        Please open in mobile
      </Heading>

      <main className={classes.mainWrapper}>
        <Routes>
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
            <Route path="/" element={<MainLayout />}>
              <Route element={<SwapLayout />}>
                <Route path="swap" element={<SwapPage />} />
                <Route path="chart" element={<ChartPage />} />
                <Route path="history" element={<HistoryPage />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
