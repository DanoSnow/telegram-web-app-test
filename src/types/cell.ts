interface CellName {
    en: string;
    es: string;
    ru: string;
    ua: string;
}

interface Description {
    en: string;
    es: string;
    ru: string;
    ua: string;
}

export interface CellParams {
    _id: string
    name: CellName;
    type: string;
    x: number;
    y: number;
    level: number;
    description: Description;
    pictureLink: string;
    npcList?: string[];
    mobList?: string[];
    buildingList?: string[];
    randomQuestList?: string[];
    resNodeList?: string[];
    passageList?: string[];
}

export interface CellDetailsParams extends CellParams {
    isOpen: boolean;
    onClose: () => void;
}