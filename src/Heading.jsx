import React from "react";

function Heading(){
   
const fname = "Wassay";
const lname = "Bajwa";

const img = "https://picsum.photos/200";
const customStyle = {
  color: "white",
  fontSize: "15px",
  border: "1px solid"
}
const customStyleTwo = {
  color: ""
}
let greetings = "";
const date = new Date();
const currentTime = date.getHours();
if (currentTime < 12){
  greetings = "Good Morning"
  customStyleTwo.color = "red";
} else {
  if(currentTime < 18){
    greetings = "Good Afternoon"
    customStyleTwo.color = "green"
  }else{
    greetings = "Have a great night"
    customStyleTwo.color = "yellow"
  }
}
    return <div>
        <h1> This website is created by {fname} {lname} </h1>
        <h3 className="heading" style = {customStyleTwo}>{greetings}</h3>
        <h5 style={customStyle} >Copyright {dateYear()}</h5>
        <img src={img + "?grayscale"} alt="images"></img>
    </div>    
     }
     function dateYear() {
        return (
            <p>{new Date().getFullYear()}</p>
        );
      }

export default Heading;