import React from 'react';
import 'formulario.css';

const Formulario = () => {


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

    return (
        <div>
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos } >
                <input 
                    type="text"
                    placeholder="Input name"
                    className="form-control mb-2"
                    onChange={ (e) => setName(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Input Adress"
                    className="form-control mb-2"
                    onChange={ e => setAdress(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Input Country"
                    className="form-control mb-2"
                    onChange={ e => setCountry(e.target.value) }
                />
                 <input 
                    type="text"
                    placeholder="Input Cardname"
                    className="form-control mb-2"
                    onChange={ e => setCardname(e.target.value) }
                />
                 <input 
                    type="text"
                    placeholder="Input Cardnumber"
                    className="form-control mb-2"
                    onChange={ e => setCardnumber(e.target.value) }
                />
                 <input 
                    type="text"
                    placeholder="Input Product"
                    className="form-control mb-2"
                    onChange={ e => setProduct(e.target.value) }
                />
                 <input 
                    type="text"
                    placeholder="Input Price"
                    className="form-control mb-2"
                    onChange={ e => setPrice(e.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Formulario
