import { getOnePiece } from "../../../api/OnePieceAPI";
import createBoatCard from "../../Card/BoatCard/BoatCard";
//import createFruitCard from "../../Card//FruitCard/FruitCard";
import "./SearchForm.scss";
import { OnePiece } from "../../../types/OnePieceTypes";

const createSearchForm = () => {
    const divForm = document.createElement("div") as HTMLDivElement;
    divForm.classList.add("SearchForm");
    divForm.innerHTML = `<h2>Search the sea for OnePiece boats</h2>`;

    const seaSearchInput = document.createElement("input") as HTMLInputElement;
    seaSearchInput.addEventListener("keydown", (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    });

    const seaButton = document.createElement("button") as HTMLButtonElement;
    seaButton.type = "button";
    seaButton.textContent = "Search the sea";

    let onePieceCards: HTMLDivElement[] = [];
    // let boatCards: HTMLDivElement[] = [];

    // let fruitCards: HTMLDivElement[] = [];

    const handleSearch = async () => {
        const seaSearch = seaSearchInput.value;
        const categorySelect = document.querySelector(".categorySelector") as HTMLSelectElement;
        console.log(categorySelect.value);

        const onePiece: OnePiece = await getOnePiece(seaSearch, categorySelect.value);

        const newCard = createBoatCard(onePiece);
        onePieceCards.push(newCard);
        divForm.appendChild(newCard);

        // const boat: Boat = await getOnePiece(seaSearch, categorySelect.value);
        // console.log(boat);
        
        // const newBoatCard = createBoatCard(boat);
        // boatCards.push(newBoatCard);
        // divForm.appendChild(newBoatCard);

        // const fruit: Fruit = await getOnePiece(seaSearch, categorySelect.value);
        // console.log(fruit);

        // const newFruitCard = createFruitCard(fruit)
        // fruitCards.push(newFruitCard);
        // divForm.appendChild(newFruitCard);
        
        seaSearchInput.value = '';
    };

    seaButton.addEventListener("click", handleSearch);

    const resetButton = document.createElement("button") as HTMLButtonElement;
    resetButton.type = "button";
    resetButton.textContent = "Clear the sea";

    resetButton.addEventListener("click", () => {
        onePieceCards.forEach(card => {
            divForm.removeChild(card);
        });
        onePieceCards = [];
        // boatCards.forEach(card => {
        //     divForm.removeChild(card);
        // });
        // boatCards = [];

        // fruitCards.forEach(card => {
        //     divForm.removeChild(card);
        // });
        // fruitCards = [];
    });

    divForm.appendChild(seaSearchInput);
    divForm.appendChild(seaButton);
    divForm.appendChild(resetButton);

    return divForm;
};

export default createSearchForm;