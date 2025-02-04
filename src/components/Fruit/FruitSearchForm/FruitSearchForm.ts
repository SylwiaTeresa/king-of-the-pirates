// import { getFruit } from "../FruitAPI";
// import createFruitCard from "../../Card/FruitCard/FruitCard";
// import "./FruitSearchForm.scss";

// const createFruitSearchForm = () => {
//     const divForm = document.createElement("div") as HTMLDivElement;
//     divForm.classList.add("FruitSearchForm");
//     divForm.innerHTML = `<h2>Search for Devil fruits</h2>`;

//     const seaSearchInput = document.createElement("input");
//     seaSearchInput.addEventListener("keydown", (event) => {
//         if (event.key === 'Enter') {
//             handleSearch();
//         }
//     });

//     const seaButton = document.createElement("button");
//     seaButton.type = "button";
//     seaButton.textContent = "Search";

//     let fruitCards: HTMLDivElement[] = [];

//     const handleSearch = async () => {
//         const seaSearch = seaSearchInput.value;
//         const categorySelect = document.querySelector(".categorySelect") as HTMLSelectElement;
//         console.log(categorySelect.value);

//         const fruit = await getFruit(seaSearch, categorySelect.value);
//         console.log(fruit);

//         const newCard = createFruitCard(fruit);
//         fruitCards.push(newCard);
//         divForm.appendChild(newCard);

//         seaSearchInput.value = '';
//     };

//     seaButton.addEventListener("click", handleSearch);

//     const resetButton = document.createElement("button");
//     resetButton.type = "button";
//     resetButton.textContent = "Clear";

//     resetButton.addEventListener("click", () => {
//         fruitCards.forEach(card => {
//             divForm.removeChild(card);
//         });
//         fruitCards = [];
//     });

//     divForm.appendChild(seaSearchInput);
//     divForm.appendChild(seaButton);
//     divForm.appendChild(resetButton);

//     return divForm;
// };

// export default createFruitSearchForm;