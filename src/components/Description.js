import React from "react";

export default function Description(props){
  return (
    <div id={props.first} style={{border:"1px solid black", marginBottom:"5px",padding:"5px"}}>
      <div id={props.second} style={{fontWeight:"700", fontSize:"1.2rem",marginBottom:"10px"}}>
        {props.name}
      </div>
      <div id={props.third} style={{textAlign:"left"}}>
        {props.desc}
      </div>
    </div>
  );
};
