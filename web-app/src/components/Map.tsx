import Tile from "./Tile"
import mapData from "../data/locations"

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

    return (
        <div className="p-1 gap-1 flex items-center justify-center">
            {grid.map((row, rowIndex) => (
                <div id={rowIndex.toString()} className="flex flex-col space-y-1">
                    {row.map((location, locationIndex) => (
                        <div id={`${rowIndex}-${locationIndex}`}>
                            {location ? (
                                <Tile
                                    name={location?.name['en']}
                                    type={location?.type}
                                    x={location?.x}
                                    y={location?.y}
                                    description={location?.description['en']}
                                    level={location?.level}
                                    pictureLink={location?.pictureLink}
                                    npcList={location?.npcList}
                                    mobList={location?.mobList}
                                    buildingList={location?.buildingList}
                                    randomQuestList={location?.randomQuestList}
                                    resNodeList={location?.resNodeList}
                                    passageList={location?.passageList}
                                />
                            ) :
                                <div className="w-24 h-24 border-1 border-black rounded-md bg-neutral-300"></div>
                            }
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Map
