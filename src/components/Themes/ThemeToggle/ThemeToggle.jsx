// // src/components/Themes/ThemeToggle.js

// import { useTheme } from "../ThemeContext/ThemeContext.jsx"; // Імпортуємо хук для використання теми

// const ThemeToggle = () => {
//   const { toggleTheme, modes } = useTheme(); // Отримуємо значення з контексту

//   return (
//     <div>
//       <h1>Перемикач теми</h1>
//       <button onClick={() => toggleTheme("lightTheme")}>Світла тема</button>
//       <button onClick={() => toggleTheme("darkTheme")}>Темна тема</button>
//       <button onClick={() => toggleTheme("violetTheme")}>Фіолетова тема</button>

//       <div>
//         <h2>Огляд кольорів:</h2>

//         {/* Відображення кольорів для кожної теми */}
//         {Object.keys(modes).map((themeKey) => (
//           <div key={themeKey}>
//             <h3>{themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}:</h3>
//             <ul>
//               {/* Оновлені підказки для кольорів */}
//               <li>
//                 <strong>primary.light:</strong>{" "}
//                 {modes[themeKey].palette.primary.light} - Світлий відтінок
//                 основного кольору, використовується для фону та акцентів.
//               </li>
//               <li>
//                 <strong>primary.main:</strong>{" "}
//                 {modes[themeKey].palette.primary.main} - Основний колір,
//                 зазвичай використовується для кнопок та заголовків.
//               </li>
//               <li>
//                 <strong>primary.dark:</strong>{" "}
//                 {modes[themeKey].palette.primary.dark} - Темний відтінок
//                 основного кольору, підходить для тіней та акцентів.
//               </li>
//               <li>
//                 <strong>primary.darker:</strong>{" "}
//                 {modes[themeKey].palette.primary.darker} - Найтемніший відтінок
//                 основного кольору, використовується для сильних акцентів.
//               </li>
//               <li>
//                 <strong>primary.contrastText:</strong>{" "}
//                 {modes[themeKey].palette.primary.contrastText} - Контрастний
//                 текст для покращення читабельності на фоні основного кольору.
//               </li>
//               <li>
//                 <strong>background.default:</strong>{" "}
//                 {modes[themeKey].palette.background.default} - Основний фон
//                 застосунку, зазвичай світлий або темний.
//               </li>
//               <li>
//                 <strong>background.paper:</strong>{" "}
//                 {modes[themeKey].palette.background.paper} - Фон для карток і
//                 панелей, що дозволяє виділити інформацію.
//               </li>
//               <li>
//                 <strong>text.primary:</strong>{" "}
//                 {modes[themeKey].palette.text.primary} - Основний текст,
//                 використовується для заголовків і важливої інформації.
//               </li>
//               <li>
//                 <strong>text.secondary:</strong>{" "}
//                 {modes[themeKey].palette.text.secondary} - Другорядний текст,
//                 зазвичай використовується для менш важливих даних.
//               </li>
//               <li>
//                 <strong>text.disabled:</strong>{" "}
//                 {modes[themeKey].palette.text.disabled} - Текст для елементів,
//                 які неактивні або вимкнені.
//               </li>
//               <li>
//                 <strong>error.text:</strong>{" "}
//                 {modes[themeKey].palette.text.error} - Текст для повідомлень про
//                 помилки, щоб привернути увагу користувача.
//               </li>
//               <li>
//                 <strong>success.text:</strong>{" "}
//                 {modes[themeKey].palette.text.success} - Текст для повідомлень
//                 про успіх, щоб показати позитивні результати.
//               </li>
//               <li>
//                 <strong>hint.text:</strong> {modes[themeKey].palette.text.hint}{" "}
//                 - Текст для підказок та додаткової інформації.
//               </li>
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ThemeToggle;
// src/components/Themes/ThemeToggle.js

// src/components/Themes/ThemeToggle.js

import SvgIcon from "../../SvgIcon/SvgIcon.jsx";
import { useTheme } from "../ThemeContext/ThemeContext.jsx"; // Імпортуємо хук для використання теми
import "./ThemeToggle.css"; // Імпортуємо CSS для стилізації

const ThemeToggle = () => {
  const { toggleTheme, modes } = useTheme(); // Отримуємо значення з контексту

  return (
    <div>
      <h1>Перемикач теми</h1>
      <button onClick={() => toggleTheme("lightTheme")}>Світла тема</button>
      <button onClick={() => toggleTheme("darkTheme")}>Темна тема</button>
      <button onClick={() => toggleTheme("violetTheme")}>Фіолетова тема</button>

      <div>
        <h2>Огляд кольорів:</h2>

        {/* Відображення кольорів для кожної теми */}
        {Object.keys(modes).map((themeKey) => {
          const palette = modes[themeKey]?.palette; // Отримуємо палітру теми, якщо вона існує

          return (
            <div key={themeKey}>
              <h3>{themeKey.charAt(0).toUpperCase() + themeKey.slice(1)}:</h3>
              <ul>
                {palette && (
                  <>
                    <li>
                      <strong>primary.light:</strong>{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: palette.primary.light }}
                      ></span>
                      {palette.primary.light} - Світлий відтінок основного
                      кольору.
                    </li>
                    <li>
                      <strong>primary.main:</strong>{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: palette.primary.main }}
                      ></span>
                      {palette.primary.main} - Основний колір, зазвичай
                      використовується для кнопок.
                    </li>
                    <li>
                      <strong>primary.dark:</strong>{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: palette.primary.dark }}
                      ></span>
                      {palette.primary.dark} - Темний відтінок основного
                      кольору, підходить для акцентів.
                    </li>
                    <li>
                      <strong>primary.contrastText:</strong>{" "}
                      <span
                        className="color-box"
                        style={{
                          backgroundColor: palette.primary.contrastText,
                        }}
                      ></span>
                      {palette.primary.contrastText} - Контрастний текст для
                      покращення читабельності.
                    </li>
                    <li>
                      <strong>background.default:</strong>{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: palette.background.default }}
                      ></span>
                      {palette.background.default} - Основний фон застосунку.
                    </li>
                    <li>
                      <strong>background.paper:</strong>{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: palette.background.paper }}
                      ></span>
                      {palette.background.paper} - Фон для карток і панелей.
                    </li>
                    <li>
                      <strong>text.primary:</strong>{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: palette.text.primary }}
                      ></span>
                      {palette.text.primary} - Основний текст для заголовків.
                    </li>
                    <li>
                      <strong>text.secondary:</strong>{" "}
                      <span
                        className="color-box"
                        style={{ backgroundColor: palette.text.secondary }}
                      ></span>
                      {palette.text.secondary} - Другорядний текст для менш
                      важливих даних.
                    </li>
                  </>
                )}
              </ul>
            </div>
          );
        })}
      </div>

      <div>
        <h2>Інструкція по використанню кольорів у CSS модулях:</h2>
        <p>
          Ви можете використовувати кольори з тем у своїх CSS модулях,
          імплементуючи змінні. Наприклад:
        </p>
        <pre>
          {`
          .your-class {
            background-color: var(--primary-main); /* Для основного кольору */
            color: var(--text-primary); /* Для основного тексту */
          }
          `}
        </pre>
      </div>

      <div>
        <h2>Інструкція по використанню icons</h2>
        <p>
          Ви можете використовувати компонент SvgIcon з наших компонентів не
          мюі! передавати в нього айді , і по айді зі спрайту буде витягатись
          іконка
        </p>
        <pre>{`<SvgIcon id="icon-welcome" className="user-icon" />`}</pre>{" "}
        <br />
        Приклад:
        <SvgIcon id="icon-welcome" className="user-icon" />
      </div>
    </div>
  );
};

export default ThemeToggle;
