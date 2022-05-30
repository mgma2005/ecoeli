import styled from "styled-components";
import { useState } from "react";
import { ReactDOM } from "react";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("https://www.ariat.com/dw/image/v2/AAML_PRD/on/demandware.static/-/Sites-ARIAT/default/dw0b1f6b31/images/zoom/10040428_3-4_front.jpg?sw=800&sh=800") center;
  background-repeat: no-repeat;
  background-size: auto;
  background-position: right;
  display: flex;
  align-items: 



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

