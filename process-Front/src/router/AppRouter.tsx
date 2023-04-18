import { Navigate, Route, Routes } from "react-router-dom";

import { SearchPage } from "../pages/SearchPage";
import { DetailPage } from "../pages/DetailPage";
import { ClosePage } from "../pages/ClosePage";
import { NotFound } from "../pages/NotFound";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/detail/:userId/:orderId" element={<DetailPage />} />
        <Route path="/close" element={<ClosePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
