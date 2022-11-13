import React from "react";
import pic1 from "../images/mypic.jpeg"

export default function Aboutus(){
    return(
        <>
        <div className="background">
        <div className="profilepic">
         <img src={pic1} alt="" />
        </div>

       <div className="profiledetails">
        <h1>SAQIB AKHTER SHIEKH</h1>
       <p>Asalamu Alaikum,Hope you guys are well!<br></br> 
        I am BTech CSE Engineer from Budgam Kashmir.I have graduated from IUST,Awantipora.<br></br>
        I have created project from scrap using React.js.This project will be for every one.</p>
        <a href="https://www.linkedin.com/in/reyan-saqib-6ba715169/" target="_blank">Please visit my LinkedIn Profile</a>
       </div>
        </div>

        </>
    )
}