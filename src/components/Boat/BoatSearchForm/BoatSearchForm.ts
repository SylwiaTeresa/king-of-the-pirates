import { getBoat } from "../BoatAPI";
import createBoatCard from "../BoatCard/BoatCard";
import "./BoatSearchForm.scss";

const createBoatSearchForm = () => {
    const divForm = document.createElement("div");
    divForm.classList.add("BoatSearchForm");
    divForm.innerHTML = `<h3>Search the sea for OnePiece boats</h3>`;

    const seaSearchInput = document.createElement("input");
    seaSearchInput.addEventListener("keydown", (event) => {
        
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSearch();
        }
    });

    const seaButton = document.createElement("button");
    seaButton.type = "button";
    seaButton.textContent = "Search the sea";
    
    let boatCards: HTMLDivElement[] = [];

    const handleSearch = async () => {
        const seaSearch = seaSearchInput.value;
        
        const boat = await getBoat(seaSearch);
        console.log(boat);
        
        const newCard = createBoatCard(boat);
        boatCards.push(newCard);
        divForm.appendChild(newCard);
        
        seaSearchInput.value = '';
    };

    seaButton.addEventListener("click", handleSearch);

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.textContent = "Clear the sea";

    resetButton.addEventListener("click", () => {
        boatCards.forEach(card => {
            divForm.removeChild(card);
        });
        boatCards = [];
    });

    divForm.appendChild(seaSearchInput);
    divForm.appendChild(seaButton);
    divForm.appendChild(resetButton);

    return divForm;
};

export default createBoatSearchForm;