import React, { useState } from "react";

function ToggleText() {
  const [isHello, setIsHello] = useState(true);
  return (
    <div>
      <button onClick={(e) => setIsHello(!isHello)}>Toggle </button>
      <div>
        {isHello ? "Hello" : "Goodbye"}
      </div>
    </div>
  );
}

export default ToggleText;
