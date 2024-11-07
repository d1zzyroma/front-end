// import { useState } from "react";
// import SvgIcon from "../SvgIcon/SvgIcon";
// import s from "./MainDashBoard.module.css";
// import EllipsisText from "react-ellipsis-text";
// import AddCardForm from "../AddCard/AddCard.jsx";
// import EditCardForm from "../EditCard/EditCard.jsx";

// const MainDashBoard = ({ boardId }) => {
//   const columns = [
//     {
//       columnTitle: "Column title 1",
//       cards: [
//         {
//           cardTitle: "Card 1",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//         {
//           cardTitle: "Card 2",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//         {
//           cardTitle: "Card 3",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//         {
//           cardTitle: "Card 4",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//         {
//           cardTitle: "Card 5",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//         {
//           cardTitle: "Card 6",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//       ],
//     },
//     {
//       columnTitle: "Column title 2",
//       cards: [
//         {
//           cardTitle: "Card 1",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//       ],
//     },
//     {
//       columnTitle: "Column title 3",
//       cards: [
//         {
//           cardTitle: "Card 1",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//         {
//           cardTitle: "Card 2",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//         {
//           cardTitle: "Card 3",
//           cardDescr:
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla deserunt quisquam fugiat laudantium sequi. Aliquam error cumque fugiat illum, reiciendis laudantium sit culpa magni corrupti quo saepe. Minima, alias laudantium.",
//         },
//       ],
//     },
//   ];
//   const [openModalIndex, setOpenModalIndex] = useState(null);
//   const [openModalEditIndex, setOpenModalEditIndex] = useState(null);
//   const openModalEdit = (index) => setOpenModalEditIndex(index);
//   const closeModalEdit = () => setOpenModalEditIndex(null);

//   const openModal = (index) => setOpenModalIndex(index);
//   const closeModal = () => setOpenModalIndex(null);
//   return (
//     <>
//       <div className={s.boardContainer}>
//         <span className={s.scrollBottomContainer}>
//           {columns.map((column, index) => (
//             <div key={index} className={s.columnWrapper}>
//               <div className={s.columnNameBox}>
//                 <h2 className={s.columnName}>
//                   {column.columnTitle} {boardId}
//                 </h2>
//                 <div className={s.iconsBox}>
//                   <SvgIcon id="icon-pencil" className={s.columnIcons} />
//                   <SvgIcon id="icon-trash" className={s.columnIcons} />
//                 </div>
//               </div>
//               <div className={s.cardList}>
//                 {column.cards.map((card, cardIndex) => (
//                   <div key={cardIndex} className={s.card}>
//                     <div className={s.cardStatusSpanWrapper}></div>
//                     <h3 className={s.cardTitle}>{card.cardTitle}</h3>
//                     <EllipsisText
//                       className={s.cardDescr}
//                       text={card.cardDescr}
//                       length="110"
//                     />
//                     {/*  */}
//                     <div className={s.cardDivider}></div>
//                     <div className={s.cardEditsInfo}>
//                       <div className={s.cardInfo}>
//                         <div className={s.priority}>
//                           <p className={s.priorityTitle}>Priority</p>
//                           <div className={s.priorityValueWrapper}>
//                             <div className={s.priorityCircle}></div>
//                             <p className={s.priorityValue}>Medium</p>
//                           </div>
//                         </div>
//                         <div className={s.cardDeadline}>
//                           <p className={s.deadline}>Deadline</p>
//                           <p className={s.deadlineDate}>31/10/2024</p>
//                         </div>
//                       </div>
//                       <div className={s.cardIcons}>
//                         <SvgIcon
//                           id="icon-arrow-circle-broken-right"
//                           className={s.columnIcons}
//                         />
//                         <button onClick={() => openModalEdit(index)}>
//                           <SvgIcon id="icon-pencil" className={s.columnIcons} />
//                         </button>
//                         <SvgIcon id="icon-trash" className={s.columnIcons} />
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <button className={s.addCardBtn} onClick={() => openModal(index)}>
//                 <span className={s.btnWrapper}>
//                   <span className={s.btnIconWrapper}>
//                     <SvgIcon id="icon-plus" className={s.columnIcons} />
//                   </span>
//                   <span>Add another card</span>
//                 </span>
//               </button>
//               {openModalIndex === index && (
//                 <div>
//                   <AddCardForm closeModal={closeModal} />
//                 </div>
//               )}
//               {openModalEditIndex === index && (
//                 <div>
//                   <EditCardForm closeModal={closeModalEdit} />
//                 </div>
//               )}
//             </div>
//           ))}
//           <button className={s.addColumnBtn}>
//             <span className={s.btnColumnWrapper}>
//               <span className={s.btnIconWrapper}>
//                 <SvgIcon id="icon-plus" className={s.columnIcons} />
//               </span>
//               <span>Add another column</span>
//             </span>
//           </button>
//         </span>
//       </div>
//     </>
//   );
// };

// export default MainDashBoard;
import { useState } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./MainDashBoard.module.css";
import EllipsisText from "react-ellipsis-text";
import AddCardForm from "../AddCard/AddCard.jsx";
import EditCardForm from "../EditCard/EditCard.jsx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const MainDashBoard = ({ boardId }) => {
  const labelOptions = [
    { color: "#8fa1d0", priority: "Low" },
    { color: "#e09cb5", priority: "Medium" },
    { color: "#bedbb0", priority: "High" },
    { color: "#656565", priority: "Without" },
  ];
  const [columns, setColumns] = useState([
    {
      columnTitle: "Column title 1",
      id: "1",
      bordId: "1",
      cards: [
        {
          cardTitle: "Card 1",
          columnId: "1",
          cardDescr: "Description 1",
          priority: "Medium",
        },
        {
          cardTitle: "Card 2",
          columnId: "1",
          cardDescr: "Description 2",
          priority: "High",
        },
      ],
    },
    {
      columnTitle: "Column title 2",
      id: "2",
      bordId: "1",
      cards: [
        {
          cardTitle: "Card 3",
          columnId: "2",
          cardDescr: "Description 3",
          priority: "High",
        },
      ],
    },
    {
      columnTitle: "Column title 3",
      id: "3",
      bordId: "1",
      cards: [
        {
          cardTitle: "Card 4",
          columnId: "3",
          cardDescr: "Description 4",
          priority: "Without",
        },
      ],
    },
  ]);

  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [openModalEditIndex, setOpenModalEditIndex] = useState(null);

  const openModalEdit = (index) => setOpenModalEditIndex(index);
  const closeModalEdit = () => setOpenModalEditIndex(null);

  const openModal = (index) => setOpenModalIndex(index);
  const closeModal = () => setOpenModalIndex(null);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destColumn = columns.find(
      (col) => col.id === destination.droppableId
    );

    if (sourceColumn === destColumn) {
      const updatedCards = Array.from(sourceColumn.cards);
      const [movedCard] = updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index, 0, movedCard);
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === sourceColumn.id ? { ...col, cards: updatedCards } : col
        )
      );
    } else {
      const sourceCards = Array.from(sourceColumn.cards);
      const destCards = Array.from(destColumn.cards);
      const [movedCard] = sourceCards.splice(source.index, 1);
      destCards.splice(destination.index, 0, movedCard);

      setColumns((prevColumns) =>
        prevColumns.map((col) => {
          if (col.id === sourceColumn.id) return { ...col, cards: sourceCards };
          if (col.id === destColumn.id) return { ...col, cards: destCards };
          return col;
        })
      );
    }

    console.log(
      `Card moved from column ${sourceColumn.id} to column ${destColumn.id}`
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.boardContainer}>
        <span className={s.scrollBottomContainer}>
          {columns.map((column, index) => (
            <Droppable key={column.id} droppableId={column.id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={s.columnWrapper}
                >
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
                    {column.cards.map((card, cardIndex) => {
                      const cardPriority = labelOptions.find(
                        (option) => option.priority === card.priority
                      );
                      const cardBackgroundColor = cardPriority
                        ? cardPriority.color
                        : "#fff";
                      return (
                        <Draggable
                          key={cardIndex}
                          draggableId={`${card.columnId}-${cardIndex}`}
                          index={cardIndex}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={s.card}
                            >
                              <div
                                className={s.cardStatusSpanWrapper}
                                style={{ backgroundColor: cardBackgroundColor }}
                              ></div>
                              <h3 className={s.cardTitle}>{card.cardTitle}</h3>
                              <EllipsisText
                                className={s.cardDescr}
                                text={card.cardDescr}
                                length={110}
                              />
                              <div className={s.cardDivider}></div>
                              <div className={s.cardEditsInfo}>
                                <div className={s.cardInfo}>
                                  <div className={s.priority}>
                                    <p className={s.priorityTitle}>Priority</p>
                                    <div className={s.priorityValueWrapper}>
                                      <div
                                        className={s.priorityCircle}
                                        style={{
                                          backgroundColor: cardBackgroundColor,
                                        }}
                                      ></div>
                                      <p className={s.priorityValue}>
                                        {card.priority}
                                      </p>
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
                                  <button onClick={() => openModalEdit(index)}>
                                    <SvgIcon
                                      id="icon-pencil"
                                      className={s.columnIcons}
                                    />
                                  </button>
                                  <SvgIcon
                                    id="icon-trash"
                                    className={s.columnIcons}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                  <button
                    className={s.addCardBtn}
                    onClick={() => openModal(index)}
                  >
                    <span className={s.btnWrapper}>
                      <span className={s.btnIconWrapper}>
                        <SvgIcon id="icon-plus" className={s.columnIcons} />
                      </span>
                      <span>Add another card</span>
                    </span>
                  </button>
                  {openModalIndex === index && (
                    <AddCardForm closeModal={closeModal} />
                  )}
                  {openModalEditIndex === index && (
                    <EditCardForm closeModal={closeModalEdit} />
                  )}
                </div>
              )}
            </Droppable>
          ))}
          <button className={s.addColumnBtn}>
            <span className={s.btnColumnWrapper}>
              <span className={s.btnIconWrapper}>
                <SvgIcon id="icon-plus" className={s.columnIcons} />
              </span>
              <span>Add another column</span>
            </span>
          </button>
        </span>
      </div>
    </DragDropContext>
  );
};

export default MainDashBoard;
