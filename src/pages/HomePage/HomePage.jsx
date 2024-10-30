import SideBar from "../../components/SideBar/SideBar.jsx";
import { Layout } from "../../Layout.jsx";
import ScreensPage from "../ScreensPage/ScreensPage.jsx";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.cont}>
      <Layout>
        <div className={s.testcont}>
          <SideBar />
          <ScreensPage />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
