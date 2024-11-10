import s from "./ScreensPageEmpty.module.css";

const ScreenPageEmpty = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Before starting your project, it is essential{" "}
        <span className={s.coloredText}>to create a board</span> to visualize
        and track all the necessary tasks and milestones. This board serves as a
        powerful tool to organize the workflow and ensure effective
        collaboration among team members.
      </p>
    </div>
  );
};

export default ScreenPageEmpty;
