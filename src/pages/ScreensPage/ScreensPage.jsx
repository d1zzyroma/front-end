import { useParams } from "react-router-dom";
import s from "./ScreensPage.module.css";
import MainDashBoard from "../../components/MainDashBoard/MainDashBoard.jsx";
import AddCard from "../../components/AddCard/AddCard.jsx";

const ScreensPage = () => {
  const { boardId } = useParams();

  return (
    <div className={s.cont}>
      {/* <h2 className={s.title}>Board </h2>
      <p>Нижче створюйте вже колонки {boardId}</p>
      <p>Десь тут ще хедер борда{boardId}</p>
      <MainDashBoard boardId={boardId} />
      <div>Відмалюємо дошку з id : {boardId} з даних запиту</div> */}
      <AddCard />
    </div>
  );
};

export default ScreensPage;
