import React from "react";

function App(){
let recentDate = new Date();
recentDate = recentDate.getHours();
let greeting = "";
const cssStyle = {};

if(recentDate>1 && recentDate<12){
  greeting = "Good Morning";
  cssStyle.color = "#FFCC00";
}else if(recentDate>=12 && recentDate<17){
  greeting = "Good Afternoon";
    cssStyle.color = "#FF9900";
}else if(recentDate>=17 && recentDate<=24){
  greeting = "Good Evening";
    cssStyle.color = "black";
}

return(
  <>
  <div>
  <h1>Hello Bimochan, <span style={cssStyle}>{greeting}</span></h1>
  </div> 
  </>
  );
};

export default App;