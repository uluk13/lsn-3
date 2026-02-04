import React, { useState } from "react";
import "./style.css";

const Svet = () => {
const [svet, setSvet] = useState("")

const red_fn = () => {
    setSvet("red");
    document.querySelector(".info_block").style.backgroundColor = "red";
}
const yellow_fn = () => {
    setSvet("yellow")
    document.querySelector(".info_block").style.backgroundColor = "yellow";
     if (svet === "yellow"){
        document.querySelector(".btn_2").style.color = svet
    }else{
        document.querySelector(".btn_2").style.color = "black"
    }
}
const green_fn =() => {
    setSvet("go")
    document.querySelector(".info_block").style.backgroundColor = "green";
}

  return (
    <div className="main_block">
      <div className="left_block">
        <button className="btn_1" onClick={red_fn}>red</button>
        <button className="btn_2" onClick={yellow_fn}>yellow</button>
        <button className="btn_3" onClick={green_fn}>green</button>
      </div>
      <div className="info_block">
        <p >{svet}</p>
      </div>
    </div>
  );
};

export default Svet;