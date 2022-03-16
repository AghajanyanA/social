import React from 'react'
import { useEffect } from 'react'
import useLocalStorage from 'use-local-storage'
import c from './settings.module.css'

const Settings = ({currentTheme, changeTheme}) => {


    const [theme, setTheme] = useLocalStorage('theme', 'blue')

    useEffect(() => {
        changeTheme(theme)
        return function () {
            changeTheme(theme)
        } //eslint-disable-next-line
    }, [theme])

    const handleThemeChange = appliedTheme => {
        if (appliedTheme !== currentTheme) {
            setTheme(appliedTheme)
            changeTheme(theme)
        }
    }

    return (
        <div className={c.settings}>
            <h3>Settings</h3>
            <div className={c.colorTheme} data-theme={theme}>
                <h3>Themes</h3>
                <div className={c.themes} >
                    <div className={c.whiteTheme} onClick={ () => handleThemeChange('white') } />
                    <div className={c.blueTheme} onClick={ () => handleThemeChange('blue') } />
                </div>
                <p>Current Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}</p>
            </div>
        </div>
    )
}

export default Settings