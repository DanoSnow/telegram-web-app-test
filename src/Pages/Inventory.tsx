import { Link } from "react-router-dom"
import Bag from "../assets/Inventory interface.jpg"

const Inventory = () => {
    return (
        <div>
            <div className="fixed z-10 right-0 bottom-0 p-2 text-white text-2xl">
                <Link to="/telegram-web-app-test">Back</Link>
            </div>
            <h1>This is inventory</h1>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${Bag})` }} />
        </div>
    )
}

export default Inventory
