import "../css/styles.css";
import "./modules/Background.js";
import MobileMenu from "./modules/MobileMenu";
import Flights from "./modules/Flights";
import CurrencyDropdown from "./modules/CurrencyDropdown";
import AdvancedSearch from "./modules/AdvancedSearch";
import Hotels from "./modules/Hotels";

new Hotels();
new AdvancedSearch();
new MobileMenu();
new CurrencyDropdown();
new Flights();

if (module.hot) {
  module.hot.accept();
}
