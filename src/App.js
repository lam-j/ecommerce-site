import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";

function App() {
    return (
        <div className="App">
            <Header />
            <hr />
            <Outlet />
        </div>
    );
}

export default App;
