export type OnePiece = Boat | Fruit;

export type Boat = {
    id: number;
    name: string;
    description: string;
    type: string;
    roman_name: string;
    crew? : {
        id?: number;
        name?: string;
        description?: any | string;
        status?: string;
        number?: string;
        roman_name?: string;
        total_prime?: string;
        is_yonko?: boolean;
    }
    character_captain?: {
        id?: number;
        name?: string;
        size?: string;
        job?: string;
        status?: string;
        age?: string;
        bounty?: string;
        crew?: {
            id?: number;
            name?: string;
            description?: any | string;
            status?: string;
            number?: string;
            roman_name?: string;
            total_prime?: string;
            is_yonko?: boolean;
        }
        fruit?: {
            filename?: string;
            name?: string;
            description?: string;
            technicalFile?: string;
        }
    }
};

export type Fruit = {
    id: number
    name: string
    description: string
    roman_name: string
    type: string
    filename: string
    technicalFile: string
};