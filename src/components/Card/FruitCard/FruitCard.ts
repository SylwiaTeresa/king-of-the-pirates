import { Fruit } from "../../../types/OnePieceTypes";
import "./FruitCard.scss";

const createFruitCard = (fruit: Fruit) => {
    const fruitCard = document.createElement("div");
    fruitCard.classList.add("FruitCard");

    fruitCard.innerHTML = `
    <h3>Fruits name: ${fruit.name}</h3>
    <p><strong>Id number:</strong> ${fruit.id}</p>
    <p><strong>Description:</strong> ${fruit.description}</p>
    <p><strong>Type:</strong> ${fruit.type}</p>
    `;

    return fruitCard;
};

export default createFruitCard;