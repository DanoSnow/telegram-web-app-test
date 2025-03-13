import { createContext, useState } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import HomePage from "./Pages/HomePage";
import Map from "./Pages/Map";
import Inventory from "./Pages/Inventory";

interface RouteContextType {
  currentRoute: string;
  setCurrentRoute: (route: string) => void;
}

export const RouteContext = createContext<RouteContextType | undefined>(undefined);

function App() {
  const [currentRoute, setCurrentRoute] = useState<string>("/");

  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/telegram-web-app-test/" element={<HomePage />} />
            <Route path="/telegram-web-app-test/map" element={<Map />} />
            <Route path="/telegram-web-app-test/inventory" element={<Inventory />} />
            <Route path="*" element={<Navigate to="/telegram-web-app-test" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </RouteContext.Provider >
  )
}

export default App
