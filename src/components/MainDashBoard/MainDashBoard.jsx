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
        { cardTitle: "Card 4", cardDescr: "Card descr" },
        { cardTitle: "Card 5", cardDescr: "Card descr" },
        { cardTitle: "Card 6", cardDescr: "Card descr" },
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
                  <div className={s.cardStatusSpanWrapper}></div>
                  <h3 className={s.cardTitle}>{card.cardTitle}</h3>
                  <p className={s.cardDescr}>{card.cardDescr}</p>
                  <div className={s.cardDivider}></div>
                  <div className={s.cardEditsInfo}>
                    <div className={s.cardInfo}>
                      <div className={s.priority}>
                        <p className={s.priorityTitle}>Priority</p>
                        <div className={s.priorityValueWrapper}>
                          <div className={s.priorityCircle}></div>
                          <p className={s.priorityValue}>Medium</p>
                        </div>
                      </div>
                      <div className={s.cardDeadline}>
                        <p className={s.deadline}>Deadline</p>
                        <p className={s.deadlineDate}>31/10/2024</p>
                      </div>
                    </div>
                    <div className={s.cardIcons}>
                      <SvgIcon
                        id="icon-arrow-circle-broken-right"
                        className={s.columnIcons}
                      />
                      <SvgIcon id="icon-pencil" className={s.columnIcons} />
                      <SvgIcon id="icon-trash" className={s.columnIcons} />
                    </div>
                  </div>
                </div>
              ))}
              <button className={s.addCardBtn}>
                <span className={s.btnWrapper}>
                  <span className={s.btnIconWrapper}>
                    <SvgIcon id="icon-plus" className={s.columnIcons} />
                  </span>
                  <span>Add another card</span>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainDashBoard;
