import { Boat } from "../../types/onepieceTypes";
import "./BoatCard.scss";

const createBoatCard = (data: Boat) => {
    const resultCard = document.createElement("div");
    resultCard.classList.add("Card");

    resultCard.innerHTML = `
    <h4>Båtens namn: ${data.name}</h4>
    `;

    return resultCard;
};

export default createBoatCard;