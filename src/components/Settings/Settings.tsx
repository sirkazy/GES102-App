import './Settings.css'
import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext/ThemeContext.tsx'

export const Settings : React.FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext) ?? {theme : "", toggleTheme : () => {}}

    return (
        <div className="settings">
            <h2>Settings</h2>
            <div className='settings-body'>
                <button onClick={toggleTheme}>
                    {theme === "light" ? "🌙 Enable Dark Mode" : "☀️ Enable Light Mode"}</button>
                <button>Delete account</button>
            </div>
        </div>
    )
}