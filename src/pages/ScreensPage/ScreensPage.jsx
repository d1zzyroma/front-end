import { useParams } from "react-router-dom";
import s from "./ScreensPage.module.css";
import MainDashBoard from "../../components/MainDashBoard/MainDashBoard.jsx";
import SvgIcon from "../../components/SvgIcon/SvgIcon.jsx";
import Filter from "../../components/Filters/Filters.jsx";
import { useState } from "react";

const ScreensPage = () => {
  const { boardId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className={s.cont}>
      <div className={s.boardTitleBox}>
        <h2 className={s.boardTitle}>Board name </h2>
        <button onClick={openModal} className={s.filterBox}>
          <SvgIcon id="icon-filter" className={s.filterIcon} />
          <h3 className={s.filter}>Filters</h3>
        </button>
        {isModalOpen && <Filter closeModal={closeModal} />}
      </div>

      {/* <p>Нижче створюйте вже колонки {boardId}</p>
      <p>Десь тут ще хедер борда{boardId}</p> */}
      <MainDashBoard boardId={boardId} />
      {/* <div>Відмалюємо дошку з id : {boardId} з даних запиту</div> */}
    </div>
  );
};

export default ScreensPage;
