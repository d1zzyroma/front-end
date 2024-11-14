import { Suspense } from "react";

import SideBar from "../SideBar/SideBar.jsx";
import s from "./Layout.module.css";
export const Layout = ({ children }) => {
  return (
    <div className={s.cont}>
      <SideBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
