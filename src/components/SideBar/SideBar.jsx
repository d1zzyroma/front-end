import { NavLink } from "react-router-dom";
import s from "./SideBar.module.css";

const SideBar = () => {
  const boards = [
    { id: 1, name: "Board 1" },
    { id: 2, name: "Board 2" },
    { id: 3, name: "Board 3" },
  ];
  return (
    <>
      <div className={s.cont}>
        SideBar
        <h1>Boards</h1>
        <ul>
          {boards.map((board) => (
            <li key={board.id}>
              <NavLink to={`/home/${board.id}`}>{board.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SideBar;
