import SvgIcon from "../SvgIcon/SvgIcon";
import styles from "./NewBoard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import noBack from "../../images/images-bg/images-bg-default.png";
import { addBoard } from "../../redux/boards/operations.js";

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

const NewBoard = ({ openModal }) => {
  const [icons, setIcons] = useState("icon-Project");
  const [background, setBackground] = useState("no-background");
  const [title, setTitle] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getTitle = (event) => {
    setTitle(event.target.value);
  };

  const closeModal = () => {
    openModal();
  };

  const getIcon = (event) => {
    setIcons(event.currentTarget.dataset.source);
  };

  const getBack = (event) => {
    setBackground(event.currentTarget.dataset.source);
  };

  const newBoardObject = {
    title: title,
    icon: icons,
    background: background,
  };

  const newBoardFunc = () => {
    dispatch(addBoard(newBoardObject));
    closeModal();
    navigate(`${title}`);
  };

  return (
    <div className={styles.divCard}>
      <h2 className={styles.textNew}>New board</h2>
      <input
        className={styles.titleInput}
        type="text"
        placeholder="Title"
        onChange={getTitle}
      />
      <h3 className={styles.textIcons}>Icons</h3>
      <ul className={styles.listDarkIcons}>
        <li>
          {/* <button
//               data-source="project"
//               className={styles.buttonIcons}
//               onClick={getIcon}
//             > */}
          <input
            type="radio"
            data-source="icon-Project"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-Project"}
            className={
              icons === "icon-Project" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
        <li>
          <input
            type="radio"
            data-source="icon-star"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-star"}
            className={
              icons === "icon-star" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
        <li>
          <input
            type="radio"
            data-source="icon-loading"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-loading"}
            className={
              icons === "icon-loading" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
        <li>
          <input
            type="radio"
            data-source="icon-puzzle"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-puzzle"}
            className={
              icons === "icon-puzzle" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
        <li>
          <input
            type="radio"
            data-source="icon-cube"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-cube"}
            className={
              icons === "icon-cube" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
        <li>
          <input
            type="radio"
            data-source="icon-lightning"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-lightning"}
            className={
              icons === "icon-lightning" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
        <li>
          <input
            type="radio"
            data-source="icon-colors"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-colors"}
            className={
              icons === "icon-colors" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
        <li>
          <input
            type="radio"
            data-source="icon-hexagon"
            name="buttons"
            className={styles.inputRad}
            onClick={getIcon}
          />
          <SvgIcon
            id={"icon-hexagon"}
            className={
              icons === "icon-hexagon" ? styles.darkIcons : styles.serIcons
            }
          ></SvgIcon>
        </li>
      </ul>
      <h3 className={styles.textBackground}>Background</h3>
      <ul className={styles.listColorIcons}>
        <li
          className={
            background === "no-background"
              ? styles.listItemActive
              : styles.listItem
          }
        >
          <input
            type="radio"
            name="backs"
            data-source="no-background"
            className={styles.inputBack}
            onClick={getBack}
          />
          <img src={noBack} alt="no-back" className={styles.img_back} />
        </li>
        {backgrounds.map((bg) => (
          <li
            key={bg.key}
            className={
              background === bg.key ? styles.listItemActive : styles.listItem
            }
          >
            <input
              type="radio"
              name="backs"
              className={styles.inputBack}
              data-source={bg.key}
              onClick={getBack}
            />
            <img src={bg.source} alt={bg.alt} className={styles.img_back} />
          </li>
        ))}
      </ul>
      <button className={styles.mainButton} onClick={newBoardFunc}>
        <div className={styles.plusBtnZaglushka}>
          <SvgIcon id={"plus"} className={styles.plusIcon} />
        </div>
        Create
      </button>
    </div>
  );
};

export default NewBoard;
