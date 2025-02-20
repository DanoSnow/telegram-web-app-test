interface TileProps {
    cardinalDirection: 'NW' | 'NE' | 'SE' | 'SW'
    X: number
    Y: number
    tileImgUrl: string
}

const Tile = ({ cardinalDirection, X, Y, tileImgUrl }: TileProps) => {
    return (
        <div className="w-24 h-24 border-1 border-black rounded-xs bg-cover bg-center relative" style={{ backgroundImage: `url(${tileImgUrl})` }}>
            <span className="absolute left-1">{`${cardinalDirection}`}</span>
            <span className="absolute right-1">{`(${X};${Y})`}</span>
        </div>
    )
}

export default Tile
