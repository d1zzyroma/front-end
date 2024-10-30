import { useParams } from "react-router-dom";
import s from "./ScreensPage.module.css";
import MainDashBoard from "../../components/MainDashBoard/MainDashBoard.jsx";

const ScreensPage = () => {
  const { boardId } = useParams();

  return (
    <div className={s.cont}>
      <h2>Board </h2>
      <p>Нижче створюйте вже колонки {boardId}</p>
      <p>Десь тут ще хедер борда{boardId}</p>
      <MainDashBoard boardId={boardId} />
      <div>Відмалюємо дошку з id : {boardId} з даних запиту</div>
    </div>
  );
};

export default ScreensPage;
