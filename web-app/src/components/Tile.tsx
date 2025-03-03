import { useState, useEffect } from "react"
import TileDetails from "./TileDetails"

interface TileProps {
    name: string;
    type: string;
    x: number;
    y: number;
    level: number;
    description: string;
    pictureLink: string;
    npcList?: string[];
    mobList?: string[];
    buildingList?: string[];
    randomQuestList?: string[];
    resNodeList?: string[];
    passageList?: string[];
}

const Tile = ({
    name, type, x, y, level, description, pictureLink, npcList, mobList, buildingList, randomQuestList, resNodeList, passageList
}: TileProps) => {
    const [tileState, setTileState] = useState({
        name: name, type: type, x: x, y: y, level: level, description: description, pictureLink: pictureLink,
        npcList: npcList, mobList: mobList, buildingList: buildingList, randomQuestList: randomQuestList,
        resNodeList: resNodeList, passageList: passageList
    });
    useEffect(() => {
        setTileState({
            name: name, type: type, x: x, y: y, level: level, description: description, pictureLink: pictureLink,
            npcList: npcList, mobList: mobList, buildingList: buildingList, randomQuestList: randomQuestList,
            resNodeList: resNodeList, passageList: passageList
        });
    }, [name, type, x, y, level, description, pictureLink, npcList, mobList, buildingList, randomQuestList, resNodeList, passageList]);
    
    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }
    const closeDialog = () => {
        setOpen(false);
    }

    return (
        <div
            className="w-24 h-24 border-1 border-black rounded-md bg-cover bg-center relative cursor-pointer"
            style={{ backgroundImage: `url(${tileState.pictureLink})` }} onClick={openDialog}
        >
            <span className="absolute left-1">{`${tileState.name}`}</span>
            <span className="absolute right-1 bottom-1">{`(${tileState.x};${tileState.y})`}</span>
            <TileDetails
                name={tileState.name}
                type={tileState.type}
                x={tileState.x}
                y={tileState.y}
                description={tileState.description}
                level={tileState.level}
                pictureLink={tileState.pictureLink}
                npcList={tileState.npcList}
                mobList={tileState.mobList}
                buildingList={tileState.buildingList}
                randomQuestList={tileState.randomQuestList}
                resNodeList={tileState.resNodeList}
                passageList={tileState.passageList}
                isOpen={open}
                onClose={closeDialog}
            />
        </div>
    );
}

export default Tile