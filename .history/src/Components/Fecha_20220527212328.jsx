import React from "react";
var d = new Date();

const Fecha = () => {
document.write(d.getDate() + "/" + (d.getMonth() +1) + "/" + d.getFullYear())
} 

export default Fecha
