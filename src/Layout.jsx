import { Suspense } from "react";

import Header from "./components/Header/Header.jsx";

export const Layout = ({ children }) => {
  return (
    <div style={{ margin: "0 auto" }}>
      <Header />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
