import { getBoat } from "../../api/onepieceAPI";
import createBoatCard from "../BoatCard/BoatCard";
//import { Boat } from "../../types/onepieceTypes";
import "./OnePieceSearchForm.scss";

const createBoatSearchForm = () => {
    const divForm = document.createElement("div");
    divForm.classList.add("BoatSearchForm");
    divForm.innerHTML = `<h3>Search One Piece boats</h3>`;

    const seaSearchInput = document.createElement("input");
    seaSearchInput.placeholder = "Search sea...";

    const seaButton = document.createElement("button");
    seaButton.textContent = "Search";

    const handleSearch = async () => {
        const seaSearch = seaSearchInput.value;
        
        const boat = await getBoat(seaSearch);
        //console.log(boat);
        
    };

    seaButton.addEventListener("click", handleSearch);
    
    divForm.appendChild(seaSearchInput);
    divForm.appendChild(seaButton);

    return divForm;
};

export default createBoatSearchForm;

const boatCard = document.querySelector("main") as HTMLDivElement;
boatCard.append(createBoatCard(getBoat));