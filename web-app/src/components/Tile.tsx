import { useState, useEffect } from "react"
import TileDetails from "./TileDetails"

interface TileProps {
    cardinalDirection: 'NW' | 'NE' | 'SE' | 'SW'
    X: number
    Y: number
    tileImgUrl: string
}

const Tile = ({ cardinalDirection, X, Y, tileImgUrl }: TileProps) => {
    const [tileState, setTileState] = useState({
        cardinalDirection: cardinalDirection,
        X: X, Y: Y, tileImgUrl: tileImgUrl
    });
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTileState({
            cardinalDirection: cardinalDirection,
            X: X, Y: Y, tileImgUrl: tileImgUrl
        });
    }, [cardinalDirection, X, Y, tileImgUrl]);

    const openDialog = () => {
        setOpen(true);
    }

    const closeDialog = () => {
        setOpen(false);
    }

    return (
        <div
            className="w-24 h-24 border-1 border-black rounded-xs bg-cover bg-center relative cursor-pointer"
            style={{ backgroundImage: `url(${tileImgUrl})` }} onClick={openDialog}
        >
            <span className="absolute left-1">{`${cardinalDirection}`}</span>
            <span className="absolute right-1">{`(${X};${Y})`}</span>
            <TileDetails
                cardinalDirection={tileState.cardinalDirection}
                X={tileState.X} Y={tileState.Y}
                tileImgUrl={tileState.tileImgUrl}
                isOpen={open}
                onClose={closeDialog}
            />
        </div>
    )
}

export default Tile
