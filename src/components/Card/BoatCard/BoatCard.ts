import { Boat } from "../../../types/OnePieceTypes";
import "./BoatCard.scss";

const createBoatCard = (boat: Boat) => {
    const boatCard = document.createElement("div");
    boatCard.classList.add("BoatCard");

    let inner = `
    <h5>Det här är själva resultat kortet</h5>
    <h4>Båtens namn: ${boat.name}</h4>
    <p>Kapten på båten: ${boat.character_captain?.name ? `${boat.character_captain.name}` : ""}</p>
    <p>Nummer i ordningen: ${boat.id}</p>
    <p>Beskrivning: ${boat.type}</p>
    <p>Besättning: ${boat.crew?.number}</p>
    `;
    
    // if (boat.crew) {
    //     inner += `<p>Besättning: ${boat.crew?.number}</p>`
    // };
    
    // if (boat.character_captain) {
    //     inner += `<p>Kapten på båten: ${boat.character_captain?.name}</p>`
    // }
        
    boatCard.innerHTML = inner;
    return boatCard;
};
    
    export default createBoatCard;
    
    // div.innerHTML = `<h2>Search result${
        //    charList.search ? ` for "${charList.search}"` : ""
        // }:</h2>`;
        
        //
            