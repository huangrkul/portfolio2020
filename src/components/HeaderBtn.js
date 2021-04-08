import React, { useState } from "react";

const HeaderBtn = (props) => {
  const [hovering, setHovering] = useState(false);

  return (
    <button
      className={`${props.buttonId} ${props.buttonId}-${
        hovering ? "hover" : "out"
      }`}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
    />
  );
};

export default HeaderBtn;
