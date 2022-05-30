import { useState, useEffect } from 'react';
import './fetching.css';

function Fetching() {

  const [articulos, setArticulos] = useState([])

  useEffect(() => {
    fetch('http://localhost/phpmyadmin/index.php?route=/sql&db=dbdb&table=datas&pos=0')
      .then((response) => {
        return response.json()
      })
      .then((articulos) => {
        setArticulos(articulos)
      })
  }, [])

  return (
    <div className='div'>
      <table border="1">
        <thead>
          <tr className='tr'>
            <th>Código</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(art => {
            return (
              <tr key={art.codigo}>
                <td>{art.codigo}</td>
                <td>{art.descripcion}</td>
                <td>{art.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Fetching