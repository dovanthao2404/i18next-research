import { useTranslation } from "react-i18next";
import "./App.css";

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">

      <button onClick={() => {
        i18n.changeLanguage("vi");
      }}>vi</button>
      <button onClick={() => {
        i18n.changeLanguage("en");
      }}>en</button>
      <div></div>
      {t("hello.2")}
      <div></div>
      {t("good bye")}
      <div></div>
      {t("thanks")}
      <div></div>
      {t("hello.1")}

    </div>
  );
}

export default App;
