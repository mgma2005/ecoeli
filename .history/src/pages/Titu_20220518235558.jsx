//import styled from "styled-components";
import { useState } from "react";
import { ReactDOM } from "react";


function Titu() {
  const [title, setTitle] = useState(0);

  return (
    
    <div>
      <p>{title}</p>
      <h1>ggyguguguiuyiyigiuygiigigy</h1>
      <button onClick={() => setTitle()}>titu</button>
    </div>
  )
}

ReactDOM.render(<Titu/>, document.getElementById('root'));

export default Titu;

