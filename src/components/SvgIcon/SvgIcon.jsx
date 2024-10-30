// src/components/SvgIcon.js

import sprite from "../../images/icons/icons.svg"; // Імпортуємо спрайт

const SvgIcon = ({ id, className = "", ...props }) => {
  return (
    <svg className={`icon ${className}`} {...props}>
      <use xlinkHref={`${sprite}#${id}`} />
    </svg>
  );
};

export default SvgIcon;
