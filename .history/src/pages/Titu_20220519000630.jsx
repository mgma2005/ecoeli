//import styled from "styled-components";
import { useState } from "react";
import { ReactDOM } from "react";


function Titu() {
  const [title, setTitle] = useState(0);

  return (
    
    <div>
      
      <h1>{title}</h1>
      <input onClick={(event) => setTitle()}/>
    </div>
  )
}
ReactDOM.render(<Titu/>, document.getElementById('root'));


export default Titu;

