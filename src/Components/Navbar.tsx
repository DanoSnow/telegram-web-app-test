import { useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { RouteContext } from "../App"
import Map from "../assets/Map.jpg"
import Bag from "../assets/Bag.jpg"

const Navbar = () => {
    const routeContext = useContext(RouteContext);
    const location = useLocation();

    useEffect(() => {
        routeContext?.setCurrentRoute(location.pathname);
    }, [location.pathname, routeContext?.currentRoute]);

    return (
        <div className="fixed z-10 right-0 bottom-0 p-2">
            <div className='flex flex-col text-lg main-font space-y-2'>
                <Link to="/telegram-web-app-test/map">
                    <div
                        className="w-24 h-24 border-2 border-black rounded-md bg-cover bg-center relative cursor-pointer"
                        style={{ backgroundImage: `url(${Map})` }}
                    />
                </Link>
                <Link to="/telegram-web-app-test/inventory">
                    <div
                        className="w-24 h-24 border-2 border-black rounded-md bg-cover bg-center relative cursor-pointer"
                        style={{ backgroundImage: `url(${Bag})` }}
                    />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
