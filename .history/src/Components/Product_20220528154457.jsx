import React, { useState } from 'react';
import './for.css';



//import { popularProducts } from '../data';
import { ShoppingCartOutlined,Remove } from "@material-ui/icons";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: pink;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;



const Product = ({ item }) => {
  const [count, setCount] = useState(0);
  

  return (
  <><div>
      <p>Added {count} of this product.</p>
      <p>price is: {count * item.price}</p>

    </div><Container>
        <Circle />
        <Image src={item.img} />
        <Info>


          <Button onClick={() => setCount(count + 1)}>


            <ShoppingCartOutlined />
          </Button>
          <Button onClick={() => setCount(count - 1)}>

            <Remove />

          </Button>
        </Info>
      </Container>
      
    const [name, setName] = React.useState('')
    const [adress, setAdress] = React.useState('')
    const [country, setCountry] = React.useState('')
    const [cardname, setCardname] = React.useState('')
    const [cardnumber, setCardnumber] = React.useState('')
    const [product, setProduct] = React.useState('')
    const [price, setPrice] = React.useState('')
   

    const guardarDatos = (e) => {
        e.preventDefault()
          
        console.log('procesando datos...' + name +' '+ adress +' '+country+' '+cardname+' '
                     +' '+ cardnumber +' '+ product+' '+price+'' )

        e.target.reset()
        setName('')
        setAdress('')
        setCountry('')
        setCardname('')
        setCardnumber('')
        setProduct('')
        setPrice('')
}

        <div>
            <h2 className='titulo'>Buy Formulary</h2>
            <form className='frm' onSubmit={ guardarDatos } >
                <input id='in'
                    type="text"
                    placeholder="Input name"
                    className="form-control mb-2"
                    onChange={ (e) => setName(e.target.value) }
                />
                <input id='in'
                    type="text"
                    placeholder="Input Adress"
                    className="form-control mb-2"
                    onChange={ e => setAdress(e.target.value) }
                />
                <input 
                    type="text" id='in'
                    placeholder="Input Country"
                    className="form-control mb-2"
                    onChange={ e => setCountry(e.target.value) }
                />
                 <input 
                    type="text" id='in'
                    placeholder="Input Cardname"
                    className="form-control mb-2"
                    onChange={ e => setCardname(e.target.value) }
                />
                 <input 
                    type="text" id='in'
                    placeholder="Input Cardnumber"
                    className="form-control mb-2"
                    onChange={ e => setCardnumber(e.target.value) }
                />
                 <div>Total price is: {}</div>
            
            <div className='btn'>
            <button id='btn' className="btn btn-primary btn-block" type="submit">Buy Now</button>
            </div>
            </form>
        </div>
  );
};

export default Product;
