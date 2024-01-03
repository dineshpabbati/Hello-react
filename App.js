/*

<div id="parent">
   <div id="child">
      <h1>I'm h1 tag</h1>
</div>
</div>
*/


import React from "react";
import ReactDOM  from "react-dom";
import FunctionalComponentHeading from "./FunctionalComponentHeading";
// const parent = React.createElement("div",{id:"parent"},[
// React.createElement("div",{id:"child"},
// [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")]),
// React.createElement("div",{id:"child2"},
// [React.createElement("h1",{},"I'm h1 tag"),React.createElement("h2",{},"I'm h2 tag")])
// ]
// );


//const heading= React.createElement("h1",{id: "heading"},"Hello World From React!")
const jsxHeading = <h1 className="heading">Hello World From React!"</h1>

const Dinesh = () => (
   <div id = "Edoti">
   <h1>
      Dinesh is Learning React
   </h1>
   </div>

)


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<FunctionalComponentHeading/>)