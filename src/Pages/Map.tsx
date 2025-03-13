import { Link } from "react-router-dom"

const Map = () => {
    return (
        <div>
            <div className="fixed z-10 right-0 bottom-0 p-2 text-2xl">
                <Link to="/telegram-web-app-test">Back</Link>
            </div>
            <h1>This is map</h1>
        </div>
    )
}

export default Map
