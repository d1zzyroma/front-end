import { useSelector } from "react-redux";
import SvgIcon from "../../SvgIcon/SvgIcon.jsx";
import css from "./ChangeColumn.module.css";
import { allColumnsByBoard } from "../../../redux/сolumns/selectors.js";
import { useDispatch } from "react-redux";
import { replaceCard } from "../../../redux/cards/operations.js";

const ChangeColumn = ({ closeEditColumn, columnId, cardId }) => {
  const columns = useSelector(allColumnsByBoard);
  const newColumns = columns.filter((column) => column._id !== columnId);
  const dispatch = useDispatch();

  return (
    <div
      className={css.container}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeEditColumn(null);
      }}
    >
      <ul className={css.list}>
        {newColumns.length !== 0
          ? newColumns.map((el) => (
              <li key={el._id} className={css.buttonWrapper}>
                <button
                  className={css.btn}
                  onClick={() => {
                    const newColumnId = el._id;
                    dispatch(replaceCard({ cardId, newColumnId, columnId }));
                    closeEditColumn(null);
                  }}
                >
                  <p>{el.title}</p>
                  <SvgIcon
                    id="icon-arrow-circle-broken-right"
                    className={css.columnIcons}
                  />
                </button>

                {/* {isMenuOpen && openMenuId === el._id && (
                  <div className={css.menu}>
                    <p>Вміст меню для {el.title}</p>
                  </div>
                )} */}
              </li>
            ))
          : "not column"}
      </ul>
    </div>
  );
};

export default ChangeColumn;
