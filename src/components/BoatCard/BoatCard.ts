import { Boat } from "../../types/onepieceTypes";
import "./BoatCard.scss";

const createBoatCard = (boat: Boat) => {
    const boatCard = document.createElement("div");
    boatCard.classList.add("BoatCard");

    boatCard.innerHTML = `
    <h2>Sök resultat</h2>
    <h4>Båtens namn: ${boat.name}</h4>
    `;

    return boatCard;
};

export default createBoatCard;

// <p>Nummer i ordningen: ${boat.id}</p>
// <p>Beskrivning: ${boat.type}</p>
// <p>Besättning: ${boat.crew?.number}</p>
// <p>Kapten på båten: ${boat.character_captain?.name}</p>