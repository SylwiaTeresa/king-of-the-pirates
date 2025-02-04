import createcategorySelect from "./components/A/drop-down";
import createSearchForm from "./components/A/SearchForm/SearchForm";
//import createFruitSearchForm from "./components/Fruit/FruitSearchForm/FruitSearchForm";
import "./style.scss";

const main = document.querySelector("main") as HTMLDivElement;

main.append(createcategorySelect());
main.append(createSearchForm());
//main.append(createFruitSearchForm())