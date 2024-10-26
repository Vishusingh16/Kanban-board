import React, {useState,useEffect} from 'react'

const darkmode = () => {
 const [theme, setTheme]=useState(localStorage.theme)
 const colorTheme = theme === 'dark'?'light':'dark'
}

export default darkmode