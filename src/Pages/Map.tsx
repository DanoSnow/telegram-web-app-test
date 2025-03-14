import { Link } from "react-router-dom"
import Cell from "../Components/map/Cell"
import mapData from "../data/locations"
import { CellParams } from "../types/cell"

const Map = () => {
    const rows = 3;
    const cols = 3;
    const mapGrid: (CellParams | null)[][] = Array.from({ length: rows }, () => 
        Array.from({ length: cols }, () => null)
    );

    mapData.forEach(cell => {
        const x = cell.x;
        const y = cell.y;
        const row = y - 9;
        const col = x - 9;
        console.log(col, row)
        if (row >= 0 && row < rows && col >= 0 && col < cols) {
            mapGrid[row][col] = cell;
        }
    });

    console.log(mapGrid)

    return (
        <div>
            <div className="fixed z-10 right-0 bottom-0 p-2 text-2xl">
                <Link to="/telegram-web-app-test">Back</Link>
            </div>
            <h1>This is map</h1>
            <div className="p-1 gap-1 flex items-center justify-center">
                {mapGrid.map((row, rowIndex) => (
                    <div key={rowIndex.toString()} className="flex flex-col space-y-1">
                        {row.map((location, locationIndex) => (
                            <div key={locationIndex.toString()}>
                                {location ? 
                                    <Cell cell={location} />
                                    :
                                    <div className="w-24 h-24 border-1 border-black rounded-md bg-neutral-300"></div>
                                }
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Map
