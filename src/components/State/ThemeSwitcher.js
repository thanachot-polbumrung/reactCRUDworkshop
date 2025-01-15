import { Style } from "@mui/icons-material";
import { colors } from "@mui/material";
import React, { useState } from "react";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  return (
    <div style={{backgroundColor:theme == "light" ? "white" : "black"}}>
      <button
        variant={theme === "light" ? "outline" : "default"}
        onClick={() =>
          setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
        }
      >
        {theme === "light" ? "light" : "dark"}
      </button>
      {theme}
    </div>
  );
}

export default ThemeSwitcher;
