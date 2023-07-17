import React from "react";

function App(){
let recentDate = new Date(2023,7,17,11);
recentDate = recentDate.getHours();
let greeting = "";
const cssStyle = {};

if(recentDate>1 && recentDate<12){
  greeting = "Good Morning";
  cssStyle.color = "#0065AF";
}else if(recentDate>=12 && recentDate<20){
  greeting = "Good Afternoon";
    cssStyle.color = "orange";
}else if(recentDate>=20 && recentDate<=24){
 
}

};

export default App;