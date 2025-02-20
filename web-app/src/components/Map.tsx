import Tile from "./Tile"
import goblinCave from '../assets/Goblin cave.jpg'
import desert from '../assets/Desert.jpg'
import fairyForest from '../assets/Fairy forest.jpg'
import forest from '../assets/Forest.jpg'
import valley from '../assets/Valley.jpg'
import village from '../assets/Village.jpg'
import coliseum from '../assets/Coliseum.jpg'

const Map = () => {
    return (
        <div className="space-y-1 p-1 flex flex-col items-center">
            <div className="flex gap-1">
                <Tile cardinalDirection="NW" X={2} Y={2} tileImgUrl={goblinCave} />
                <Tile cardinalDirection="NW" X={1} Y={2} tileImgUrl={desert} />
                <Tile cardinalDirection="NE" X={1} Y={2} tileImgUrl={valley} />
                <Tile cardinalDirection="NE" X={2} Y={2} tileImgUrl={forest} />
            </div>
            <div className="flex gap-1">
                <Tile cardinalDirection="NW" X={2} Y={1} tileImgUrl={forest} />
                <Tile cardinalDirection="NW" X={1} Y={1} tileImgUrl={village} />
                <Tile cardinalDirection="NE" X={1} Y={1} tileImgUrl={coliseum} />
                <Tile cardinalDirection="NE" X={2} Y={1} tileImgUrl={fairyForest} />
            </div>
            <div className="flex gap-1">
                <Tile cardinalDirection="SW" X={2} Y={1} tileImgUrl={fairyForest} />
                <Tile cardinalDirection="SW" X={1} Y={1} tileImgUrl={forest} />
                <Tile cardinalDirection="SE" X={1} Y={1} tileImgUrl={desert} />
                <Tile cardinalDirection="SE" X={2} Y={1} tileImgUrl={valley} />
            </div>
            <div className="flex gap-1">
                <Tile cardinalDirection="SW" X={2} Y={2} tileImgUrl={desert} />
                <Tile cardinalDirection="SW" X={1} Y={2} tileImgUrl={goblinCave} />
                <Tile cardinalDirection="SE" X={1} Y={2} tileImgUrl={valley} />
                <Tile cardinalDirection="SE" X={2} Y={2} tileImgUrl={forest} />
            </div>
        </div>
    )
}

export default Map
