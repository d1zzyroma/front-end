import Header from "../../components/Header/Header.jsx";

import { Layout } from "../../components/Layout/Layout.jsx";
import ScreensPage from "../ScreensPage/ScreensPage.jsx";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.cont}>
      <Layout>
        <div className={s.testcont}>
          {/* <SideBar /> */}
          <Header />
          <ScreensPage />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
