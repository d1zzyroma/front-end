// import { useParams } from "react-router-dom";
// import s from "./ScreensPage.module.css";
// import MainDashBoard from "../../components/MainDashBoard/MainDashBoard.jsx";
// import SvgIcon from "../../components/SvgIcon/SvgIcon.jsx";
// import Filter from "../../components/Filters/Filters.jsx";
// import { useState } from "react";
// import {
//   loadingColumns,
//   selectedBoardInfo,
// } from "../../redux/сolumns/selectors.js";
// import { useSelector } from "react-redux";
// import { BallTriangle } from "react-loader-spinner";
// import backgrounds from "../../images/background/background.js";

// const ScreensPage = () => {
//   const { boardId } = useParams();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const loadCollumn = useSelector(loadingColumns);
//   const boardInfo = useSelector(selectedBoardInfo);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const backgroundID = boardInfo.background;
//   const selectedBackground = backgrounds.find(
//     (bg) => bg.id === Number(backgroundID)
//   );

//   const containerStyle = {
//     backgroundImage: selectedBackground
//       ? `url(${selectedBackground.desktop})`
//       : "none",
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//   };

//   return (
//     <div
//       className={s.cont}
//       style={{
//         ...containerStyle,
//         "@media (min-width: 768px)": {
//           backgroundImage: selectedBackground
//             ? `url(${selectedBackground.tablet})`
//             : "none",
//         },
//         "@media (min-width: 1440px)": {
//           backgroundImage: selectedBackground
//             ? `url(${selectedBackground.desktop})`
//             : "none",
//         },
//       }}
//     >
//       <div className={s.boardTitleBox}>
//         <h2 className={s.boardTitle}>{boardInfo.title} </h2>
//         <button onClick={openModal} className={s.filterBox}>
//           <SvgIcon id="icon-filter" className={s.filterIcon} />
//           <h3 className={s.filter}>Filters</h3>
//         </button>
//         {isModalOpen && <Filter closeModal={closeModal} />}
//       </div>

//       {!loadCollumn ? (
//         <MainDashBoard boardId={boardId} />
//       ) : (
//         <BallTriangle
//           height={100}
//           width={100}
//           radius={5}
//           color="#4fa94d"
//           ariaLabel="ball-triangle-loading"
//           visible={true}
//         />
//       )}
//     </div>
//   );
// };

// export default ScreensPage;
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MainDashBoard from "../../components/MainDashBoard/MainDashBoard.jsx";
import SvgIcon from "../../components/SvgIcon/SvgIcon.jsx";
import Filter from "../../components/Filters/Filters.jsx";
import { useSelector } from "react-redux";
import { BallTriangle } from "react-loader-spinner";
import backgrounds from "../../images/background/background.js";
import {
  loadingColumns,
  selectedBoardInfo,
} from "../../redux/сolumns/selectors.js";

// Стилізовані компоненти
const Container = styled.div`
  background: var(--bg-screen);
  font-family: "Poppins", sans-serif;
  width: 375px;
  height: 812px;
  background-image: ${(props) =>
    props.bgImage ? `url(${props.bgImage.mobile})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 765px) {
    width: 768px;
    height: 1024px;
    background-image: ${(props) =>
      props.bgImage ? `url(${props.bgImage.tablet})` : "none"};
  }

  @media screen and (min-width: 1439px) {
    width: 1440px;
    height: 770px;
    max-width: calc(100vw - 260px);
    height: calc(100vh - 68px);
    background-image: ${(props) =>
      props.bgImage ? `url(${props.bgImage.desktop})` : "none"};
  }
`;

const BoardTitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
  padding-left: 14px;
  padding-right: 14px;
  margin-bottom: 40px;
  position: relative;

  @media screen and (min-width: 765px) {
    padding-top: 26px;
    padding-left: 32px;
    padding-right: 32px;
    margin-bottom: 26px;
  }

  @media screen and (min-width: 1439px) {
    padding-top: 10px;
    padding-left: 24px;
    padding-right: 24px;
    margin-bottom: 10px;
  }
`;

const BoardTitle = styled.h2`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--text-primary);

  @media screen and (min-width: 765px) {
    font-size: 18px;
  }
`;

const FilterBox = styled.button`
  display: flex;
  gap: 2px;
  background: none;
  border: none;
  cursor: pointer;
`;

const FilterText = styled.h3`
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  color: var(--text-secondary);
  transition: 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

const FilterIcon = styled(SvgIcon)`
  height: 16px;
  width: 16px;
  fill: none;
  stroke: var(--text-primary);
  stroke-opacity: 0.8;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
`;

const ScreensPage = () => {
  const { boardId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loadCollumn = useSelector(loadingColumns);
  const boardInfo = useSelector(selectedBoardInfo);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const backgroundID = boardInfo.background;
  const selectedBackground = backgrounds.find(
    (bg) => bg.id === Number(backgroundID)
  );

  return (
    <Container bgImage={selectedBackground}>
      <BoardTitleBox>
        <BoardTitle>{boardInfo.title}</BoardTitle>
        <FilterBox onClick={openModal}>
          <FilterIcon id="icon-filter" />
          <FilterText>Filters</FilterText>
        </FilterBox>
        {isModalOpen && <Filter closeModal={closeModal} />}
      </BoardTitleBox>

      {!loadCollumn ? (
        <MainDashBoard boardId={boardId} />
      ) : (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      )}
    </Container>
  );
};

export default ScreensPage;
