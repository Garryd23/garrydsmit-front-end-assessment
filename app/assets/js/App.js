import "../css/styles.css";
import "./modules/Background.js";
import MobileMenu from "./modules/MobileMenu";

new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
