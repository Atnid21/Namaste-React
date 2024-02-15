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

const jsxHeading = <h1>Hello JSX</h1>

// Component
// const Title = () =>(
//   <div>
//   <h1>Hello from Title</h1>
//   </div>
// )


// const HeadingComponent = () =>(
//   <div id="container">
//     <Title />
//     <h1 className="Heading">Namaste Heading</h1>
//   </div>
// );



// Creating a component composition 

// const ParaComponent= () =>{
//   return <div>
//     <h1>Hi from para</h1>
//   </div>
// }


// const Header = () =>{
//   return <div>
//     <ParaComponent/>
//     <h1>This is from header</h1>
//   </div>
// }


// React Element in component
const para= (
  <div>
    <h1>Hi from para Eleemtn</h1>
  </div>
)


const Header = () =>{
  return <div>
    {para}
    <h1>This is from header</h1>
  </div>
}













root.render(<Header/>);
