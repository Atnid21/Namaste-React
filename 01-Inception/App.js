import React from "react";
import ReactDOM  from "react-dom/client";
// creating nested structure through React
/* 
Structure-1
    <div id="parent">
        <div id="child">
            <h1>I'm okay</h1>
        </div>
    </div>

Structure-2
      <div id="parent">
        <div id="child">
            <h1>I'm okay</h1>
            <h1>I'm okay</h1>
        </div>
    </div>

Structure-3
      <div id="parent">
        <div id="child">
            <h1>I'm okay</h1>
            <h1>I'm okay</h1>
        </div>
        <div id="child2">
            <h1>I'm okay</h1>
            <h1>I'm okay</h1>
        </div>
    </div>


*/


// Structure-1
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm okay")
//   )
// );

// console.log(parent);

// Structure-2
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },[
//       React.createElement("h1", {}, "I'm okay"),
//       React.createElement("h2", {}, "I'm okay")
//     ]
    
//   )
// );

// console.log(parent);


// Structure-3
const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement(
      "div",
      { id: "child" },[
        React.createElement("h1", {}, "I'm okay"),
        React.createElement("h2", {}, "I'm okay")
      ]
      
    ),
    React.createElement(
      "div",
      { id: "child" },[
        React.createElement("h1", {}, "I'm okay"),
        React.createElement("h2", {}, "I'm okay")
      ]
      
    )
  ]
);

console.log(parent);



const heading = React.createElement(
  "h1",
  {
    id: "heading",
    xyz: "ancj",
  },
  "Hi this is me saying to React"
);
// this will take three parameters

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
