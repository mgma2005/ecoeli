import styled from "styled-components";
import { useState } from "react";
import { ReactDOM } from "react";




function Titu() {
  const [title, setTitle] = useState(0);

  return (
    
    <div>
      <p>{title}</p>
      
      <button onClick={() => setTitle()}>titu</button>
    </div>
  )
}

ReactDOM.render(<Titu/>, document.getElementById(''));

export default Titu;

