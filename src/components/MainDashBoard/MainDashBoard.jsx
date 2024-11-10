// import { useState } from "react";
// import SvgIcon from "../SvgIcon/SvgIcon";
// import s from "./MainDashBoard.module.css";
// import EllipsisText from "react-ellipsis-text";
// import AddCardForm from "../AddCard/AddCard.jsx";
// import EditCardForm from "../EditCard/EditCard.jsx";
// import AddColumnForm from "../AddColumnForm/AddColumnForm.jsx";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { allColumnsByBoard } from "../../redux/сolumns/selectors.js";
// import { useDispatch } from "react-redux";
// import { deleteColumn } from "../../redux/сolumns/operations.js";
// import { deleteCard } from "../../redux/cards/operations.js";
// import EditColumnForm from "../EditColumnForm/EditColumnForm.jsx";
// import ChangeColumn from "./ChangeColumn/ChangeColumn.jsx";

// const MainDashBoard = () => {
//   const { boardId } = useParams();
//   const dispatch = useDispatch();

//   // Параметри для пріоритетів карток
//   const labelOptions = [
//     { color: "#8fa1d0", priority: "Low" },
//     { color: "#e09cb5", priority: "Medium" },
//     { color: "#bedbb0", priority: "High" },
//     { color: "#656565", priority: "Without priority" },
//   ];

//   const columns = useSelector(allColumnsByBoard);

//   // Стан для контролю відкриття/закриття модальних вікон
//   const [openModalIndex, setOpenModalIndex] = useState(null);
//   const [openModalAddIndex, setOpenModalAddColumn] = useState(null);
//   const [openChangeCardsFromColumn, setOpenChangeCardsFromColumn] =
//     useState(null);
//   const [columnIdForChange, setColumnIdForChange] = useState(null);

//   // Функції для керування модальними вікнами
//   const openModalAddColumn = () => setOpenModalAddColumn(true);
//   const closeModalAddColumn = () => setOpenModalAddColumn(null);
//   const openModal = (index) => setOpenModalIndex(index);
//   const closeModal = () => setOpenModalIndex(null);
//   const [editColumnId, setEditColumnId] = useState(null);
//   const [openModalEditId, setOpenModalEditId] = useState(null);
//   const openModalEdit = (cardId) => setOpenModalEditId(cardId);
//   const closeModalEdit = () => setOpenModalEditId(null);
//   const openEditColumn = (id) => {
//     setEditColumnId(id);
//   };

//   const closeEditColumn = () => {
//     console.log("zbs");

//     setEditColumnId(null);
//   };

//   const handleDeleteColumn = (id) => {
//     // Запускаем действие удаления через dispatch
//     dispatch(deleteColumn(id));
//   };

//   const handleDeleteCard = (cardId) => {
//     dispatch(deleteCard(cardId));
//   };

//   // Відображення компонентів
//   return (
//     <div className={s.boardContainer}>
//       <span className={s.scrollBottomContainer}>
//         {columns && columns.length > 0 ? (
//           columns.map((column, index) => (
//             <div key={column.id} className={s.columnWrapper}>
//               {/* Заголовок колонки с іконками редагування і видалення */}
//               <div className={s.columnNameBox}>
//                 <h2 className={s.columnName}>{column.title}</h2>
//                 <div className={s.iconsBox}>
//                   <button
//                     type="button"
//                     onClick={() => openEditColumn(column._id)}
//                   >
//                     <SvgIcon id="icon-pencil" className={s.columnIcons} />
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => handleDeleteColumn(column._id)}
//                   >
//                     <SvgIcon id="icon-trash" className={s.columnIcons} />
//                   </button>
//                 </div>
//                 {editColumnId === column._id && (
//                   <EditColumnForm
//                     title={column.title}
//                     closeModal={closeEditColumn}
//                     columnId={column._id}
//                   />
//                 )}
//               </div>

//               {/* Список карток в колонці */}
//               <div className={s.cardList}>
//                 {column.cards && column.cards.length > 0 ? (
//                   column.cards.map((card, cardIndex) => {
//                     const cardPriority = labelOptions.find(
//                       (option) => option.priority === card.priority
//                     );
//                     const cardBackgroundColor = cardPriority
//                       ? cardPriority.color
//                       : "#fff";
//                     const deadline = card.deadline;
//                     const currentDate = new Date();

//                     const isDeadlinePassed = currentDate > deadline;

//                     return (
//                       <div key={cardIndex} className={s.card}>
//                         <div
//                           className={s.cardStatusSpanWrapper}
//                           style={{
//                             backgroundColor: cardBackgroundColor,
//                           }}
//                         ></div>
//                         <h3 className={s.cardTitle}>{card.title}</h3>
//                         <EllipsisText
//                           className={s.cardDescr}
//                           text={card.description}
//                           length={110}
//                         />
//                         <div className={s.cardDivider}></div>
//                         <div className={s.cardEditsInfo}>
//                           {/* Відображення інформації про пріоритет і крайній термін */}
//                           <div className={s.cardInfo}>
//                             <div className={s.priority}>
//                               <p className={s.priorityTitle}>Priority</p>
//                               <div className={s.priorityValueWrapper}>
//                                 <div
//                                   className={s.priorityCircle}
//                                   style={{
//                                     backgroundColor: cardBackgroundColor,
//                                   }}
//                                 ></div>
//                                 <p className={s.priorityValue}>
//                                   {card.priority}
//                                 </p>
//                               </div>
//                             </div>
//                             <div className={s.cardDeadline}>
//                               <p className={s.deadline}>Deadline</p>
//                               <p className={s.deadlineDate}>
//                                 {card.deadline.split("T")[0]}
//                               </p>
//                             </div>
//                           </div>

//                           {/* Іконки для редагування, переміщення і видалення карток */}
//                           <div className={s.cardIcons}>
//                             {!isDeadlinePassed && (
//                               <SvgIcon
//                                 id="icon-bell"
//                                 className={s.columnIcons}
//                               />
//                             )}
//                             <button
//                               onClick={() => {
//                                 setOpenChangeCardsFromColumn(card._id);
//                                 setColumnIdForChange(column._id);
//                               }}
//                             >
//                               <SvgIcon
//                                 id="icon-arrow-circle-broken-right"
//                                 className={s.columnIcons}
//                               />
//                             </button>

//                             <button onClick={() => openModalEdit(card._id)}>
//                               <SvgIcon
//                                 id="icon-pencil"
//                                 className={s.columnIcons}
//                               />
//                             </button>
//                             <button onClick={() => handleDeleteCard(card._id)}>
//                               <SvgIcon
//                                 id="icon-trash"
//                                 className={s.columnIcons}
//                               />
//                             </button>

//                             {openModalEditId === card._id && (
//                               <EditCardForm
//                                 cardInfo={card}
//                                 closeModal={closeModalEdit}
//                                 cardId={openModalEditId}
//                                 columnId={column.id}
//                               />
//                             )}
//                           </div>
//                         </div>
//                         {openChangeCardsFromColumn === card._id && (
//                           <ChangeColumn
//                             closeEditColumn={setOpenChangeCardsFromColumn}
//                             cardId={card._id}
//                             columnId={columnIdForChange}
//                           />
//                         )}
//                       </div>
//                     );
//                   })
//                 ) : (
//                   <p></p> // Якщо немає карток, показуємо повідомлення
//                 )}
//               </div>

//               {/* Кнопка для додавання картки */}
//               <button className={s.addCardBtn} onClick={() => openModal(index)}>
//                 <span className={s.btnWrapper}>
//                   <span className={s.btnIconWrapper}>
//                     <SvgIcon id="icon-plus" className={s.columnIcons} />
//                   </span>
//                   <span>Add another card</span>
//                 </span>
//               </button>

//               {/* Модальні вікна для додавання і редагування карток */}
//               {openModalIndex === index && (
//                 <AddCardForm closeModal={closeModal} columnId={column._id} />
//               )}
//             </div>
//           ))
//         ) : (
//           <p></p> // Якщо немає колонок, показуємо повідомлення
//         )}

//         {/* Кнопка для додавання нової колонки */}
//         <button className={s.addColumnBtn} onClick={openModalAddColumn}>
//           <span className={s.btnColumnWrapper}>
//             <span className={s.btnIconWrapper}>
//               <SvgIcon id="icon-plus" className={s.columnIcons} />
//             </span>
//             <span>Add another column</span>
//           </span>
//         </button>
//         {openModalAddIndex && (
//           <AddColumnForm closeModal={closeModalAddColumn} boardId={boardId} />
//         )}
//       </span>
//     </div>
//   );
// };

// export default MainDashBoard;
import { useState } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./MainDashBoard.module.css";
import EllipsisText from "react-ellipsis-text";
import AddCardForm from "../AddCard/AddCard.jsx";
import EditCardForm from "../EditCard/EditCard.jsx";
import AddColumnForm from "../AddColumnForm/AddColumnForm.jsx";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { allColumnsByBoard } from "../../redux/сolumns/selectors.js";
import { deleteColumn } from "../../redux/сolumns/operations.js";
import { deleteCard, replaceCard } from "../../redux/cards/operations.js";
import EditColumnForm from "../EditColumnForm/EditColumnForm.jsx";
import ChangeColumn from "./ChangeColumn/ChangeColumn.jsx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// Компонент основної дошки для управління колонками та картками
const MainDashBoard = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();

  // Параметри для пріоритетів карток
  const labelOptions = [
    { color: "#8fa1d0", priority: "Low" },
    { color: "#e09cb5", priority: "Medium" },
    { color: "#bedbb0", priority: "High" },
    { color: "#656565", priority: "Without priority" },
  ];

  const columns = useSelector(allColumnsByBoard);

  // Стан для контролю відкриття/закриття модальних вікон
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [openModalAddIndex, setOpenModalAddColumn] = useState(null);
  const [openChangeCardsFromColumn, setOpenChangeCardsFromColumn] =
    useState(null);
  const [columnIdForChange, setColumnIdForChange] = useState(null);

  // Функції для керування модальними вікнами
  const openModalAddColumn = () => setOpenModalAddColumn(true);
  const closeModalAddColumn = () => setOpenModalAddColumn(null);
  const openModal = (index) => setOpenModalIndex(index);
  const closeModal = () => setOpenModalIndex(null);
  const [editColumnId, setEditColumnId] = useState(null);
  const [openModalEditId, setOpenModalEditId] = useState(null);
  const openModalEdit = (cardId) => setOpenModalEditId(cardId);
  const closeModalEdit = () => setOpenModalEditId(null);
  const openEditColumn = (id) => setEditColumnId(id);
  const closeEditColumn = () => setEditColumnId(null);

  // Видалення колонки
  const handleDeleteColumn = (id) => {
    dispatch(deleteColumn(id));
  };

  // Видалення картки
  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard(cardId));
  };
  function handleDragEnd(result) {
    const { draggableId, destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId !== source.droppableId ||
      destination.index !== source.index
    ) {
      const payload = {
        cardId: draggableId,
        newColumnId: destination.droppableId,
        columnId: source.droppableId,
      };
      //source , staryii id
      //destination newId
      console.log(payload);

      dispatch(replaceCard(payload));
    }
  }

  // Відображення компонентів
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className={s.boardContainer}>
        <span className={s.scrollBottomContainer}>
          {columns && columns.length > 0 ? (
            columns.map((column, index) => (
              <div key={column._id} className={s.columnWrapper}>
                <Droppable droppableId={column._id}>
                  {(provided) => (
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                      {/* Заголовок колонки з іконками редагування і видалення */}
                      <div className={s.columnNameBox}>
                        <h2 className={s.columnName}>{column.title}</h2>
                        <div className={s.iconsBox}>
                          <button
                            type="button"
                            onClick={() => openEditColumn(column._id)}
                          >
                            <SvgIcon
                              id="icon-pencil"
                              className={s.columnIcons}
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteColumn(column._id)}
                          >
                            <SvgIcon
                              id="icon-trash"
                              className={s.columnIcons}
                            />
                          </button>
                        </div>
                        {editColumnId === column._id && (
                          <EditColumnForm
                            title={column.title}
                            closeModal={closeEditColumn}
                            columnId={column._id}
                          />
                        )}
                      </div>

                      {/* Список карток в колонці */}
                      <div className={s.cardList}>
                        {column.cards && column.cards.length > 0 ? (
                          column.cards.map((card, cardIndex) => {
                            const cardPriority = labelOptions.find(
                              (option) => option.priority === card.priority
                            );
                            const cardBackgroundColor = cardPriority
                              ? cardPriority.color
                              : "#fff";
                            const deadline = card.deadline;
                            const currentDate = new Date();
                            const isDeadlinePassed = currentDate > deadline;

                            return (
                              <div key={cardIndex} className={s.card}>
                                <Draggable
                                  draggableId={card._id}
                                  index={index}
                                  oldCOlumn={column._id}
                                >
                                  {(provided) => (
                                    <div
                                      {...provided.dragHandleProps}
                                      {...provided.draggableProps}
                                      ref={provided.innerRef}
                                    >
                                      <div
                                        className={s.cardStatusSpanWrapper}
                                        style={{
                                          backgroundColor: cardBackgroundColor,
                                        }}
                                      ></div>
                                      <h3 className={s.cardTitle}>
                                        {card.title}
                                      </h3>
                                      <EllipsisText
                                        className={s.cardDescr}
                                        text={card.description}
                                        length={110}
                                      />
                                      <div className={s.cardDivider}></div>
                                      <div className={s.cardEditsInfo}>
                                        {/* Інформація про пріоритет і крайній термін */}
                                        <div className={s.cardInfo}>
                                          <div className={s.priority}>
                                            <p className={s.priorityTitle}>
                                              Priority
                                            </p>
                                            <div
                                              className={s.priorityValueWrapper}
                                            >
                                              <div
                                                className={s.priorityCircle}
                                                style={{
                                                  backgroundColor:
                                                    cardBackgroundColor,
                                                }}
                                              ></div>
                                              <p className={s.priorityValue}>
                                                {card.priority}
                                              </p>
                                            </div>
                                          </div>
                                          <div className={s.cardDeadline}>
                                            <p className={s.deadline}>
                                              Deadline
                                            </p>
                                            <p className={s.deadlineDate}>
                                              {card.deadline.split("T")[0]}
                                            </p>
                                          </div>
                                        </div>

                                        {/* Іконки для редагування, переміщення і видалення карток */}
                                        <div className={s.cardIcons}>
                                          {!isDeadlinePassed && (
                                            <SvgIcon
                                              id="icon-bell"
                                              className={s.columnIcons}
                                            />
                                          )}
                                          <button
                                            onClick={() => {
                                              setOpenChangeCardsFromColumn(
                                                card._id
                                              );
                                              setColumnIdForChange(column._id);
                                            }}
                                          >
                                            <SvgIcon
                                              id="icon-arrow-circle-broken-right"
                                              className={s.columnIcons}
                                            />
                                          </button>

                                          <button
                                            onClick={() =>
                                              openModalEdit(card._id)
                                            }
                                          >
                                            <SvgIcon
                                              id="icon-pencil"
                                              className={s.columnIcons}
                                            />
                                          </button>
                                          <button
                                            onClick={() =>
                                              handleDeleteCard(card._id)
                                            }
                                          >
                                            <SvgIcon
                                              id="icon-trash"
                                              className={s.columnIcons}
                                            />
                                          </button>

                                          {openModalEditId === card._id && (
                                            <EditCardForm
                                              cardInfo={card}
                                              closeModal={closeModalEdit}
                                              cardId={openModalEditId}
                                              columnId={column.id}
                                            />
                                          )}
                                        </div>
                                      </div>
                                      {openChangeCardsFromColumn ===
                                        card._id && (
                                        <ChangeColumn
                                          closeEditColumn={
                                            setOpenChangeCardsFromColumn
                                          }
                                          cardId={card._id}
                                          columnId={columnIdForChange}
                                        />
                                      )}
                                      {provided.placeholder}
                                    </div>
                                  )}
                                </Draggable>
                              </div>
                            );
                          })
                        ) : (
                          <p></p> // Повідомлення при відсутності карток
                        )}
                      </div>

                      {/* Кнопка для додавання картки */}
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

                      {/* Модальні вікна для додавання і редагування карток */}
                      {openModalIndex === index && (
                        <AddCardForm
                          closeModal={closeModal}
                          columnId={column._id}
                        />
                      )}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            ))
          ) : (
            <p></p> // Повідомлення при відсутності колонок
          )}

          {/* Кнопка для додавання нової колонки */}
          <button className={s.addColumnBtn} onClick={openModalAddColumn}>
            <span className={s.btnColumnWrapper}>
              <span className={s.btnIconWrapper}>
                <SvgIcon id="icon-plus" className={s.columnIcons} />
              </span>
              <span>Add another column</span>
            </span>
          </button>
          {openModalAddIndex && (
            <AddColumnForm closeModal={closeModalAddColumn} boardId={boardId} />
          )}
        </span>
      </div>
    </DragDropContext>
  );
};

export default MainDashBoard;
