import s from "./MainDashBoard.module.css";

const MainDashBoard = ({ boardId }) => {
  return (
    <>
      <div className={s.cont}>MainDashBoard number {boardId}</div>
      <ul>
        <li>Колонки в яких будуть рендеритись картки 1</li>
        <li>Колонки в яких будуть рендеритись картки 2</li>
        <li>Колонки в яких будуть рендеритись картки 3 </li>
      </ul>
    </>
  );
};

export default MainDashBoard;
