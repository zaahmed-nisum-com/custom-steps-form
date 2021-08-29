import React from "react";
import "./style.css";

function Stories(props) {
  const stories = [
    { id: 1, url: "", text: "text", isRead: false },
    { id: 2, url: "", text: "", isRead: false },
    { id: 3, url: "", text: "text", isRead: true },
    // { id: 4, url: "", text: "", isRead: false },
  ];
  //   "red", "green", "blue", "grey", "yellow", "purple"
  const rotateRatio = 360 / stories.length;
  return (
    <div style={{ margin: "100px", height: "500px", width: "500px" }}>
      <div className="stories-lib-main" style={{ margin: "105px" }}></div>
      
      {stories.map((item, index) => {
        return (
          <div className="stories-bg" style={{ margin: "100px" }}>
            <svg height="200px" width="200px">
              <circle
                cx="100"
                cy="100"
                r="95"
                stroke="black"
                stroke-width="8"
                fill="transparent"
              />
            </svg>
          </div>
        );
      })}
      {stories.map((item, index) => {
        return (
          <div className="stories-bg" style={{ margin: "100px" }}>
            <svg height="200px" width="200px">
              <rect
                x={index == 0 ? "5" : index == 1 ? "186" : "100"}
                y={index == 0 ? "80" : index == 1 ? "100" : "14"}
                r={index == 0 ? "100" : index == 1 ? "10" : "10"}
                stroke="red"
                stroke-width="8"
                fill="transparent"
              />
            </svg>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;

// cx={index == 0 ? "111" : index == 1 ? "100" : "87"}
// height="100"
// width="100"
// cy={index == 0 ? "93" : index == 1 ? "113" : "94"}
// r={index == 0 ? "87" : index == 1 ? "87" : "85"}
// stroke="black"
// stroke-width="5"
// fill="transparent"
