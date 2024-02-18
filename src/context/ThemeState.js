import React, { useState } from "react";
import ThemeContext from "./ThemeContext"; // Import ThemeContext using PascalCase

const ThemeState = (props) => {
    const [theme, setTheme] = useState('light');

    const getColor = () => {
        return theme === "light" ? "black" : "white";
      };

    const [result, setResult] = useState("");

    const [value, setValue] = useState('')
    
    const updateValue = (newValue) => {
        setValue(newValue); // Update value state
      };
    
    return (
        <ThemeContext.Provider value={{theme, setTheme,getColor,result, setResult, value,setValue, updateValue}}>
             {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeState;
