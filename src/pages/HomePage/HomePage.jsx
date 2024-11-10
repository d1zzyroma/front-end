// import { useEffect } from "react";
// import Header from "../../components/Header/Header.jsx";

// import { Layout } from "../../components/Layout/Layout.jsx";
// import { userCurrent } from "../../redux/auth/operations.js";
// import ScreensPage from "../ScreensPage/ScreensPage.jsx";
// import s from "./HomePage.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors.js";

// const HomePage = () => {
//   const user = useSelector(selectUser);
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const dispatch = useDispatch();
//   // useEffect(() => {
//   //   dispatch(userCurrent());
//   // }, []);

//   return (
//     <div className={s.cont}>
//       <Layout>
//         <div className={s.testcont}>
//           {/* <SideBar /> */}
//           <Header />
//           <ScreensPage />
//         </div>
//       </Layout>
//     </div>
//   );
// };

// export default HomePage;
import { useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import { Layout } from "../../components/Layout/Layout.jsx";
import { userCurrent } from "../../redux/auth/operations.js";
import ScreensPage from "../ScreensPage/ScreensPage.jsx";
import s from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors.js";

const HomePage = () => {
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    // Якщо користувач залогінений і немає даних про користувача, виконуємо запит
    if (isLoggedIn && !user) {
      dispatch(userCurrent());
    }
  }, [isLoggedIn, user, dispatch]); // Додайте user до залежностей

  return (
    <div className={s.cont}>
      <Layout>
        <div className={s.testcont}>
          <Header />
          <ScreensPage />
        </div>
      </Layout>
    </div>
  );
};

export default HomePage;
