import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

const Header = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);

    const toggleMode = (e) => {
        e.preventDefault();
        setDarkMode(!darkMode)
    };

    return (
        <div className="header">
            <h1>Players</h1>
            <button data-testid="toggle-mode" onClick={toggleMode}>Switch Mode</button>
        </div>
    )
}

export default Header;