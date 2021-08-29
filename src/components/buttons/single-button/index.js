import React from "react";

function SingleButton({ title, ...props }) {
  return (
    <div>
      <button
        onClick={() => props.handleClick()}
        type="submit"
        className="m-2 btn btn-primary m-2"
      >
        {title}
      </button>
    </div>
  );
}

export default SingleButton;
