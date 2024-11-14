import styled from "styled-components";

import { useState } from "react";
import MainDashBoard from "../../components/MainDashBoard/MainDashBoard.jsx";
import SvgIcon from "../../components/SvgIcon/SvgIcon.jsx";
import Filter from "../../components/Filters/Filters.jsx";
import { useSelector } from "react-redux";

import backgrounds from "../../images/background/background.js";
import {
  selectedBoardId,
  selectedBoardInfo,
} from "../../redux/сolumns/selectors.js";
import ScreenPageEmpty from "./ScreenPageEmpty.jsx";

// Стилізовані компоненти
const Container = styled.div`
  background: var(--bg-screen);
  font-family: "Poppins", sans-serif;
  max-width: 375px;
  height: 100vh;
  background-image: ${({ hasBackground, mobile }) =>
    hasBackground ? `url(${mobile})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 765px) {
    min-width: 768px;

    background-image: ${({ hasBackground, tablet }) =>
      hasBackground ? `url(${tablet})` : "none"};
  }

  @media screen and (min-width: 1439px) {
    width: 1440px;

    max-width: calc(100vw - 260px);

    background-image: ${({ hasBackground, desktop }) =>
      hasBackground ? `url(${desktop})` : "none"};
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

  padding: ${({ hasBackground }) => (hasBackground ? "10px" : "none")};
  border-radius: ${({ hasBackground }) => (hasBackground ? "8px" : "none")};
  background-color: ${({ hasBackground }) =>
    hasBackground ? "var(--background-paper)" : "transparent"};

  @media screen and (min-width: 765px) {
    font-size: 18px;
  }
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

const FilterBox = styled.button`
  display: flex;
  gap: 2px;
  background: none;
  border: none;
  cursor: pointer;

  padding: ${({ hasBackground }) => (hasBackground ? "10px" : "none")};
  border-radius: ${({ hasBackground }) => (hasBackground ? "8px" : "none")};
  background-color: ${({ hasBackground }) =>
    hasBackground ? "var(--background-paper)" : "transparent"};
  transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);

  &:hover {
    ${({ hasBackground }) =>
      hasBackground
        ? `
          background-color: var(--hover-btn);
        `
        : `
          & ${FilterText} {
            color: var(--hover-btn);
          }
          & ${FilterIcon} {
            stroke: var(--hover-btn);
          }
        `}
  }
`;

const ScreensPage = () => {
  // const { boardId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const loadCollumn = useSelector(selectedBoardInfo);
  const boardInfo = useSelector(selectedBoardInfo);
  const boardId = useSelector(selectedBoardId);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const backgroundID = boardInfo.background;
  const selectedBackground = backgrounds.find(
    (bg) => bg.id === Number(backgroundID)
  );

  return (
    <Container
      hasBackground={Boolean(selectedBackground)}
      desktop={selectedBackground?.desktop}
      tablet={selectedBackground?.tablet}
      mobile={selectedBackground?.mobile}
    >
      <BoardTitleBox>
        <BoardTitle hasBackground={Boolean(selectedBackground)}>
          {boardInfo.title}
        </BoardTitle>
        <FilterBox
          onClick={openModal}
          hasBackground={Boolean(selectedBackground)}
        >
          <FilterIcon id="icon-filter" />
          <FilterText>Filters</FilterText>
        </FilterBox>
        {isModalOpen && <Filter closeModal={closeModal} />}
      </BoardTitleBox>
      {loadCollumn && Object.keys(loadCollumn).length > 0 ? (
        <MainDashBoard boardId={boardId} />
      ) : (
        <ScreenPageEmpty />
      )}
    </Container>
  );
};

export default ScreensPage;
