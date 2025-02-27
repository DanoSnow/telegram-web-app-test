import Tile from "./Tile"
import goblinCave from '../assets/Goblin cave.jpg'
import desert from '../assets/Desert.jpg'
import fairyForest from '../assets/Fairy forest.jpg'
import forest from '../assets/Forest.jpg'
import valley from '../assets/Valley.jpg'
import village from '../assets/Village.jpg'
import coliseum from '../assets/Coliseum.jpg'

/*const locationsData = {
    village: {
        description: "A quaint village nestled between rolling hills, where cobblestone streets wind past charming cottages and the scent of fresh bread fills the air.",
        tileImgUrl: village
    },
    coliseum: {
        description: "An ancient coliseum, its weathered stones echoing the roars of past battles, stands as a testament to glory and valor, inviting brave souls to test their might.",
        tileImgUrl: coliseum
    },
    goblinCave: {
        description: "Dark and damp, the Goblin Cave is a labyrinth of twisting tunnels, filled with the sounds of chattering goblins and the glint of stolen treasures hidden in the shadows.",
        tileImgUrl: goblinCave
    },
    desert: {
        description: "A vast expanse of golden sands stretches endlessly under the scorching sun, where mirages dance on the horizon and secrets of the ancients lie buried beneath the dunes.",
        tileImgUrl: desert
    },
    fairyForest: {
        description: "A magical forest alive with shimmering lights and the sweet sound of laughter, where fairies flit between vibrant flowers and ancient trees whisper secrets of enchantment.",
        tileImgUrl: fairyForest
    },
    forest: {
        description: "A dense forest teeming with life, where towering trees create a canopy of green, and the air is filled with the sounds of rustling leaves and distant wildlife.",
        tileImgUrl: forest
    },
    valley: {
        description: "A serene valley cradled between majestic mountains, where a gentle river flows and wildflowers bloom in vibrant colors, creating a peaceful haven for travelers and creatures alike.",
        tileImgUrl: forest
    }
}

const mapData = [
    {
        cardinalDirection: "NW",
        X: 2,
        Y: 2,
        location: locationsData.goblinCave
    },
    {
        cardinalDirection: "NW",
        X: 1,
        Y: 2,
        location: locationsData.desert
    },
    {
        cardinalDirection: "NE",
        X: 1,
        Y: 2,
        location: locationsData.valley
    },
    {
        cardinalDirection: "NE",
        X: 2,
        Y: 2,
        location: locationsData.forest
    },
    {
        cardinalDirection: "NW",
        X: 2,
        Y: 1,
        location: locationsData.forest
    },
    {
        cardinalDirection: "NW",
        X: 1,
        Y: 1,
        location: locationsData.village
    },
    {
        cardinalDirection: "NE",
        X: 1,
        Y: 1,
        location: locationsData.coliseum
    },
    {
        cardinalDirection: "NE",
        X: 2,
        Y: 1,
        location: locationsData.fairyForest
    },
    {
        cardinalDirection: "SW",
        X: 2,
        Y: 1,
        location: locationsData.fairyForest
    },
    {
        cardinalDirection: "SW",
        X: 1,
        Y: 1,
        location: locationsData.forest
    },
    {
        cardinalDirection: "SE",
        X: 1,
        Y: 1,
        location: locationsData.desert
    },
    {
        cardinalDirection: "SE",
        X: 2,
        Y: 1,
        location: locationsData.valley
    },
    {
        cardinalDirection: "SW",
        X: 2,
        Y: 2,
        location: locationsData.desert
    },
    {
        cardinalDirection: "SW",
        X: 1,
        Y: 2,
        location: locationsData.goblinCave
    },
    {
        cardinalDirection: "SE",
        X: 1,
        Y: 2,
        location: locationsData.valley
    },
    {
        cardinalDirection: "SE",
        X: 2,
        Y: 2,
        location: locationsData.forest
    },
]*/

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
