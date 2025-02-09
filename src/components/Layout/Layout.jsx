import { Suspense } from "react";
import Navigation from "../Navigation/Navigation";
import Loader from "../Loader/Loader";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
