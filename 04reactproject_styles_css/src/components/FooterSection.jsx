import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";



const FooterSection = () => {
  const footerStyle = {
    maxHeight: "250px",
    width: "200px",
    backgroundColor: "red",
    border: "1px solid red",
  };
  const navItems={
    padding:"10px",
    fontSize:"15px",
    borderBottom:"1px solid black",


  }
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={footerStyle}>
        <div style={navItems}><FaInstagramSquare style={{fontSize:"30px"}}/></div>
        <div style={navItems}><FaFacebook/></div>
        <div style={navItems}><FcAndroidOs style={{fontSize:"30px"}}/></div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
      </div>
      <div style={footerStyle}>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
      </div>
      <div style={footerStyle}>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
      </div>
      <div style={footerStyle}>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
      </div>
      <div style={footerStyle}>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
        <div style={navItems}>ABC</div>
      </div>
    </div>
  );
};

export default FooterSection;
