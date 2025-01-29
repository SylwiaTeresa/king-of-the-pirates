import { Boat } from "../types/onepieceTypes";

export const getBoat = async (id: string): Promise<Boat> => {
    const response = await fetch(`https://api.api-onepiece.com/v2/boats/en/${id}`);
    const data = await response.json();

    return data;
};