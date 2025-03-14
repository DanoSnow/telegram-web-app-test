import { useState, useEffect } from "react"
import { CellParams } from "../../types/cell"
import CellDetails from "./CellDetails"

interface CellProps {
    cell: CellParams
}

const Cell = ({cell}: CellProps) => {
    const [cellState, setCellState] = useState(cell);
    useEffect(()=>{
        setCellState(cell);
    }, [cell]);

    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }
    const closeDialog = () => {
        setOpen(false);
    }

    return (
        <div
            className="w-24 h-24 border-2 border-black rounded-md bg-cover bg-center relative cursor-pointer"
            style={{ backgroundImage: `url(${cellState.pictureLink})` }} onClick={openDialog}
        >
            {/* Keep in mind the name object */}
            <span className="absolute left-1">{`${cellState.name.en}`}</span>
            {/* Keep in mind the name object */}
            <span className="absolute right-1 bottom-1">{`(${cellState.x};${cellState.y})`}</span>
            <CellDetails cellDetails={{...cellState, isOpen: open, onClose: closeDialog}} />
        </div>
    )
}

export default Cell
