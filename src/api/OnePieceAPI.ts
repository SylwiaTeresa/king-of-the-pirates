import { OnePiece } from "../types/OnePieceTypes";

export const getOnePiece = async (id: string, category: string): Promise<OnePiece> => {
    const response = await fetch(`https://api.api-onepiece.com/v2/${category}/en/${id}`);
    const data = await response.json();

    return data;
};