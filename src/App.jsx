import "./App.css";

import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout/Layout";

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const TeachersPage = lazy(() => import("./pages/TeachersPage/TeachersPage"));

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
