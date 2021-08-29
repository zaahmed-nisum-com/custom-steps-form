import React from "react";

function IconButton({ styles, ...props }) {
  return (
    <button
      style={styles}
      onClick={props.handleClick}
      type="button"
      class="btn btn-primary"
    >
      <i className="fas fa-long-arrow-alt-left"></i>
    </button>
  );
}

export default IconButton;
