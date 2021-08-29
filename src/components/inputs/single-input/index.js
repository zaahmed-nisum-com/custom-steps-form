import React from "react";

function SingleInput({ item, obj, ...props }) {
  return (
    <div>
      <label className="form-label mb-2">{item.toUpperCase()}</label>
      <input
        value={obj[item]}
        type=""
        onChange={props.handleChange}
        className="m-2 form-control "
        id=""
        aria-describedby=""
      />
    </div>
  );
}

export default SingleInput;
