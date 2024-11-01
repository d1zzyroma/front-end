import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./MainDashBoard.module.css";
import EllipsisText from "react-ellipsis-text";

const MainDashBoard = ({ boardId }) => {
  const columns = [
    {
      columnTitle: "Column title 1",
      cards: [
        {
          cardTitle: "Card 1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 2",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 3",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 4",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 5",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 6",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
      ],
    },
    {
      columnTitle: "Column title 2",
      cards: [
        {
          cardTitle: "Card 1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
      ],
    },
    {
      columnTitle: "Column title 3",
      cards: [
        {
          cardTitle: "Card 1",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 2",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
        {
          cardTitle: "Card 3",
          cardDescr:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
        },
      ],
    },
  ];

  return (
    <>
      <div className={s.boardContainer}>
        <span className={s.scrollBottomContainer}>
          {columns.map((column, index) => (
            <div key={index} className={s.columnWrapper}>
              <div className={s.columnNameBox}>
                <h2 className={s.columnName}>
                  {column.columnTitle} {boardId}
                </h2>
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
                    <EllipsisText
                      className={s.cardDescr}
                      text={card.cardDescr}
                      length="115"
                    />
                    {/*  */}
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
              </div>
              <button className={s.addCardBtn}>
                <span className={s.btnWrapper}>
                  <span className={s.btnIconWrapper}>
                    <SvgIcon id="icon-plus" className={s.columnIcons} />
                  </span>
                  <span>Add another card</span>
                </span>
              </button>
            </div>
          ))}
        </span>
      </div>
    </>
  );
};

export default MainDashBoard;
