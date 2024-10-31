import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./MainDashBoard.module.css";

const MainDashBoard = ({ boardId }) => {
  const columns = [
    {
      columnTitle: "Column title 1",
      cards: [
        { cardTitle: "Card 1", cardDescr: "Card descr" },
        { cardTitle: "Card 2", cardDescr: "Card descr" },
        { cardTitle: "Card 3", cardDescr: "Card descr" },
      ],
    },
    {
      columnTitle: "Column title 2",
      cards: [{ cardTitle: "Card 1", cardDescr: "Card descr" }],
    },
    {
      columnTitle: "Column title 3",
      cards: [
        { cardTitle: "Card 1", cardDescr: "Card descr" },
        { cardTitle: "Card 2", cardDescr: "Card descr" },
        { cardTitle: "Card 3", cardDescr: "Card descr" },
        { cardTitle: "Card 4", cardDescr: "Card descr" },
        { cardTitle: "Card 5", cardDescr: "Card descr" },
        { cardTitle: "Card 6", cardDescr: "Card descr" },
      ],
    },
  ];

  return (
    <>
      <div className={s.boardContainer}>
        {columns.map((column, index) => (
          <div key={index} className={s.columnWrapper}>
            <div className={s.columnNameBox}>
              <div className={s.columnName}>
                {column.columnTitle} {boardId}
              </div>
              <div className={s.iconsBox}>
                <SvgIcon id="icon-pencil" className={s.columnIcons} />
                <SvgIcon id="icon-trash" className={s.columnIcons} />
              </div>
            </div>
            <div className={s.cardList}>
              {column.cards.map((card, cardIndex) => (
                <div key={cardIndex} className={s.card}>
                  <h3 className={s.cardTitle}>{card.cardTitle}</h3>
                  <p className={s.cardDescr}>{card.cardDescr}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainDashBoard;
