import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./NewBoard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import noBack from "../../images/images-bg/images-bg-default.png";
import { addBoard } from "../../redux/boards/operations.js";

const icons = [
  { id: "icon-Project", name: "Project" },
  { id: "icon-star", name: "Star" },
  { id: "icon-loading", name: "Loading" },
  { id: "icon-puzzle", name: "Puzzle" },
  { id: "icon-cube", name: "Cube" },
  { id: "icon-lightning", name: "Lightning" },
  { id: "icon-colors", name: "Colors" },
  { id: "icon-hexagon", name: "Hexagon" },
];

const backgrounds = [
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/vlk8bztf90uy6itveqjl.png",
    alt: "cappodocia",
    key: "cappodocia",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/v0wt4bwax3bhdlag1ziv.png",
    alt: "baloon",
    key: "baloon",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220071/backgrounds/mini/c08fbwcqicwfqwksxsyx.png",
    alt: "clouds",
    key: "clouds",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220071/backgrounds/mini/sey0nharzdv7uzxpt98w.png",
    alt: "fullMoon",
    key: "full-moon",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220069/backgrounds/mini/lfrtnx9rqh3koliovr7h.png",
    alt: "halfMoon",
    key: "half-moon",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/oyfwjk41qpxsud8g8ri9.png",
    alt: "magnolia",
    key: "magnolia",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/yjuxoyg5cjxzpk30oeoe.png",
    alt: "mountains",
    key: "mountains",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/yjyionahp9lthpybw5sg.png",
    alt: "nightTrailer",
    key: "night-trailer",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220071/backgrounds/mini/sce6oy35czbj7yb9osoe.png",
    alt: "palmLeaves",
    key: "palm-leaves",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/whne8ssdvejvamukn7sc.png",
    alt: "rockyBeach",
    key: "rocky-beach",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/womdt7hq0ngnofzbuhgu.png",
    alt: "sakura",
    key: "sakura",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/tqbovopj2qyuln6ing9o.png",
    alt: "sea",
    key: "sea",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/csxhywowypy9arxzig17.png",
    alt: "starrySky",
    key: "starry-sky",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/vaxhftlahpyrpje3itvb.png",
    alt: "violetCircle",
    key: "violet-circle",
  },
  {
    source:
      "https://res.cloudinary.com/dbxyhtguo/image/upload/v1693220070/backgrounds/mini/pgjqswykxm1qukwfyic0.png",
    alt: "yacht",
    key: "yacht",
  },
];

export const NewBoard = ({ closeModal }) => {
  const [iconsSelected, setIconsSelected] = useState("icon-Project");
  const [backgroundSelected, setBackgroundSelected] = useState("no-background");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleIconChange = (event) =>
    setIconsSelected(event.currentTarget.dataset.source);
  const handleBackgroundChange = (event) =>
    setBackgroundSelected(event.currentTarget.dataset.source);

  const newBoardObject = {
    title,
    icon: iconsSelected,
    background: backgroundSelected,
  };

  const createNewBoard = () => {
    dispatch(addBoard(newBoardObject));
    closeModal();
    navigate(`/${title}`);
  };

  return (
    <div
      className={styles.modalOverlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeModal();
      }}
    >
      <div className={styles.divCard}>
        <h2 className={styles.textNew}>New board</h2>
        <input
          className={styles.titleInput}
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <button onClick={closeModal}>
          <SvgIcon id="icon-close" className={styles.iconclose} />
        </button>
        <h3 className={styles.textIcons}>Icons</h3>
        <ul className={styles.listDarkIcons}>
          {icons.map((icon) => (
            <li key={icon.id}>
              <input
                type="radio"
                data-source={icon.id}
                name="icons"
                className={styles.inputRad}
                checked={iconsSelected === icon.id}
                onChange={handleIconChange}
              />
              <SvgIcon
                id={icon.id}
                className={
                  iconsSelected === icon.id ? styles.darkIcons : styles.serIcons
                }
              />
            </li>
          ))}
        </ul>
        <h3 className={styles.textBackground}>Background</h3>
        <ul className={styles.listColorIcons}>
          <li
            className={
              backgroundSelected === "no-background"
                ? styles.listItemActive
                : styles.listItem
            }
          >
            <input
              type="radio"
              name="backgrounds"
              data-source="no-background"
              className={styles.inputBack}
              checked={backgroundSelected === "no-background"}
              onChange={handleBackgroundChange}
            />
            <img src={noBack} alt="no-background" className={styles.img_back} />
          </li>
          {backgrounds.map((bg) => (
            <li
              key={bg.key}
              className={
                backgroundSelected === bg.key
                  ? styles.listItemActive
                  : styles.listItem
              }
            >
              <input
                type="radio"
                name="backgrounds"
                data-source={bg.key}
                className={styles.inputBack}
                checked={backgroundSelected === bg.key}
                onChange={handleBackgroundChange}
              />
              <img src={bg.source} alt={bg.alt} className={styles.img_back} />
            </li>
          ))}
        </ul>
        <button className={styles.mainButton} onClick={createNewBoard}>
          <div className={styles.plusBtnZaglushka}>
            <SvgIcon id="icon-plus" className={styles.plusIcon} />
          </div>
          Create
        </button>
      </div>
    </div>
  );
};

export default NewBoard;
