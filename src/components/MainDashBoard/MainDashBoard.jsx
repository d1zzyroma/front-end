import { useState } from "react";
import SvgIcon from "../SvgIcon/SvgIcon";
import s from "./MainDashBoard.module.css";
import EllipsisText from "react-ellipsis-text";
import AddCardForm from "../AddCard/AddCard.jsx";
import EditCardForm from "../EditCard/EditCard.jsx";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AddColumnForm from "../AddColumnForm/AddColumnForm.jsx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { allColumnsByBoard } from "../../redux/сolumns/selectors.js";

import { useDispatch } from "react-redux";
import { deleteColumn } from "../../redux/сolumns/operations.js";
import { deleteCard } from "../../redux/cards/operations.js";
import EditColumnForm from "../EditColumnForm/EditColumnForm.jsx";
import ChangeColumn from "./ChangeColumn/ChangeColumn.jsx";

const MainDashBoard = () => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  // 1. Параметри для пріоритетів карток
  const labelOptions = [
    { color: "#8fa1d0", priority: "Low" },
    { color: "#e09cb5", priority: "Medium" },
    { color: "#bedbb0", priority: "High" },
    { color: "#656565", priority: "Without priority" },
  ];

  const columns = useSelector(allColumnsByBoard);

  // 3. Стан для контролю відкриття/закриття модальних вікон
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [openModalEditIndex, setOpenModalEditIndex] = useState(null);
  const [openModalAddIndex, setOpenModalAddColumn] = useState(null);
  const [openChangeCardsFromColumn, setOpenChangeCardsFromColumn] =
    useState(null);
  const [columnIdForChange, setColumnIdForChange] = useState(null);
  ////cards update and delete
  const [openModalEditId, setOpenModalEditId] = useState(null);
  const openModalEdit = (cardId) => setOpenModalEditId(cardId);
  const closeModalEdit = () => setOpenModalEditId(null);

  // 4. Функції для керування модальними вікнами

  const openModalAddColumn = () => setOpenModalAddColumn(true);
  const closeModalAddColumn = () => setOpenModalAddColumn(null);
  const openModal = (index) => setOpenModalIndex(index);
  const closeModal = () => setOpenModalIndex(null);
  const [editColumnId, setEditColumnId] = useState(null);

  const openEditColumn = (id) => {
    setEditColumnId(id);
  };

  const closeEditColumn = () => {
    setEditColumnId(null);
  };

  const handleDeleteColumn = (id) => {
    // Запускаем действие удаления через dispatch
    dispatch(deleteColumn(id));
  };

  const handleDeleteCard = (cardId) => {
    dispatch(deleteCard(cardId));
  };
  // 5. Логіка Drag and Drop для переміщення карток між колонками
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = columns.find((col) => col.id === source.droppableId);
    const destColumn = columns.find(
      (col) => col.id === destination.droppableId
    );

    if (sourceColumn === destColumn) {
      // Переміщення картки всередині тієї ж колонки
      const updatedCards = Array.from(sourceColumn.cards);
      const [movedCard] = updatedCards.splice(source.index, 1);
      updatedCards.splice(destination.index, 0, movedCard);
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.id === sourceColumn.id ? { ...col, cards: updatedCards } : col
        )
      );
    } else {
      // Переміщення картки в іншу колонку
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
  };

  // 6. Відображення компонентів
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={s.boardContainer}>
        <span className={s.scrollBottomContainer}>
          {columns && columns.length > 0 ? (
            columns.map((column, index) => (
              <Droppable key={column.id} droppableId={column.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={s.columnWrapper}
                  >
                    {/* Заголовок колонки с иконками редактирования и удаления */}
                    <div className={s.columnNameBox}>
                      <h2 className={s.columnName}>{column.title}</h2>
                      <div className={s.iconsBox}>
                        <button
                          type="button"
                          onClick={() => openEditColumn(column._id)}
                        >
                          <SvgIcon id="icon-pencil" className={s.columnIcons} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteColumn(column._id)}
                        >
                          <SvgIcon id="icon-trash" className={s.columnIcons} />
                        </button>
                      </div>
                    </div>

                    {/* Список карточек в колонке */}
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

                          if (isDeadlinePassed) {
                            console.log("Дедлайн пройшов");
                          } else {
                            console.log("Дедлайн ще не настав");
                          }
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
                                    style={{
                                      backgroundColor: cardBackgroundColor,
                                    }}
                                  ></div>
                                  <h3 className={s.cardTitle}>{card.title}</h3>
                                  <EllipsisText
                                    className={s.cardDescr}
                                    text={card.description}
                                    length={110}
                                  />
                                  <div className={s.cardDivider}></div>
                                  <div className={s.cardEditsInfo}>
                                    {/* Отображение информации о приоритете и крайнем сроке */}
                                    <div className={s.cardInfo}>
                                      <div className={s.priority}>
                                        <p className={s.priorityTitle}>
                                          Priority
                                        </p>
                                        <div className={s.priorityValueWrapper}>
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
                                        <p className={s.deadline}>Deadline</p>
                                        <p className={s.deadlineDate}>
                                          {card.deadline.split("T")[0]}
                                        </p>
                                      </div>
                                    </div>

                                    {/* Иконки для редактирования, перемещения и удаления карточек */}
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
                                          // console.log(column._id);
                                        }}
                                      >
                                        <SvgIcon
                                          id="icon-arrow-circle-broken-right"
                                          className={s.columnIcons}
                                        />
                                      </button>

                                      <button
                                        onClick={() => openModalEdit(card._id)}
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
                                  {openChangeCardsFromColumn === card._id && (
                                    <ChangeColumn
                                      closeEditColumn={
                                        setOpenChangeCardsFromColumn
                                      }
                                      cardId={card._id}
                                      columnId={columnIdForChange}
                                    />
                                  )}
                                </div>
                              )}
                            </Draggable>
                          );
                        })
                      ) : (
                        <p></p> // Если нет карточек, показываем сообщение
                      )}
                      {provided.placeholder}
                    </div>

                    {/* Кнопка для добавления карточки */}
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

                    {/* Модальные окна для добавления и редактирования карточек */}
                    {openModalIndex === index && (
                      <AddCardForm
                        closeModal={closeModal}
                        columnId={column._id}
                      />
                    )}
                  </div>
                )}
              </Droppable>
            ))
          ) : (
            <p></p> // Если нет колонок, показываем сообщение
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
