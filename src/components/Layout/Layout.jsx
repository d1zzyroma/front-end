import { Suspense } from "react";

import SideBar from "../SideBar/SideBar.jsx";

export const Layout = ({ children }) => {
  return (
    <div style={{ margin: "0 auto", display: "flex" }}>
      <SideBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
