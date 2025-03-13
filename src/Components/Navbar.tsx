import { useContext, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { RouteContext } from "../App"

const Navbar = () => {
    const routeContext = useContext(RouteContext);
    const location = useLocation();

    useEffect(() => {
        routeContext?.setCurrentRoute(location.pathname);
    }, [location.pathname, routeContext?.currentRoute]);

    return (
        <div className="navbar bg-slate-800 bg-opacity-70 fixed z-10">
            <div className="navbar-start"></div>
            <div className="navbar-center">
                <div className='flex md:space-x-16 space-x-8 text-lg main-font'>
                    <Link to="/telegram-web-app-test/" className={routeContext?.currentRoute === '/telegram-web-app-test/' ? 'text-red-500' : 'text-white'}>Home</Link>
                    <Link to="/telegram-web-app-test/map" className={routeContext?.currentRoute === '/telegram-web-app-test/map' ? 'text-red-500' : 'text-white'}>Map</Link>
                    <Link to="/telegram-web-app-test/inventory" className={routeContext?.currentRoute === '/telegram-web-app-test/inventory' ? 'text-red-500' : 'text-white'}>Inventory</Link>
                </div>
            </div>
            <div className="navbar-end"></div>
        </div>
    )
}

export default Navbar
