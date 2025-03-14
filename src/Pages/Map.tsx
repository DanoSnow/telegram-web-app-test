import { Link } from "react-router-dom"
import Cell from "../Components/map/Cell"
import mapData from "../data/locations"
import bwForest from "../assets/bw forest.jpg"

const Map = () => {
    const organizeLocations = () => {
        const grid: (typeof mapData[0] | null)[][] = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];

        mapData.forEach(location => {
            const x = (location.x - 9);
            const y = 2 - (location.y - 9);
            grid[y][x] = location;
        });

        return grid;
    }

    const grid = organizeLocations();
    console.log(grid);

    return (
        <div>
            <div className="fixed z-10 right-0 bottom-0 p-2 text-2xl">
                <Link to="/telegram-web-app-test">Back</Link>
            </div>
            <h1>This is map</h1>
            <Cell cell={{
                "_id": "loc_9_9_0",
                "name": {
                    "en": "Forest",
                    "es": "Bosque",
                    "ru": "Лес",
                    "ua": "Ліс"
                },
                "type": "plain",
                "x": 9,
                "y": 9,
                "level": 0,
                "description": {
                    "en": "A dense forest with tall trees.",
                    "es": "Un bosque denso con árboles altos.",
                    "ru": "Густой лес с высокими деревьями.",
                    "ua": "Густий ліс з високими деревами."
                },
                "pictureLink": bwForest,
                "npcList": [],
                "mobList": ["Wolf", "Bear"],
                "buildingList": [],
                "randomQuestList": [],
                "resNodeList": [],
                "passageList": []
            }} />
        </div>
    )
}

export default Map
