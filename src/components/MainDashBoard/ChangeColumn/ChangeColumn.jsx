// import SvgIcon from "../../SvgIcon/SvgIcon.jsx";
// import css from "./ChangeColumn.module.css";

// const ChangeColumn = ({ columns, openMenuId, isMenuOpen, toggleMenu }) => {
//   console.log(
//     "ChangeColumn props - isMenuOpen:",
//     isMenuOpen,
//     "openMenuId:",
//     openMenuId
//   );

//   return (
//     <div className={css.container}>
//       <ul className={css.list}>
//         {columns.length !== 0
//           ? columns.map((el) => (
//               <li key={el._id}>
//                 <button className={css.btn} onClick={() => toggleMenu(el._id)}>
//                   {el.title}
//                   <SvgIcon
//                     id="icon-arrow-circle-broken-right"
//                     className={css.columnIcons}
//                   />
//                 </button>
//                 {isMenuOpen && openMenuId === el._id && (
//                   <div className={css.menu}>
//                     <p>Вміст меню для {el.title}</p>
//                   </div>
//                 )}
//               </li>
//             ))
//           : "not column"}
//       </ul>
//     </div>
//   );
// };

// export default ChangeColumn;
