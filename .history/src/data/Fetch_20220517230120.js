//import { render } from "@testing-library/react";
import React from "react";
import Component from "react";

class Fetch extends Component {
    constructor() {
        super();
    }


componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(response => {
       console.log(response); 
    })
}

render() {
    return(
        <div className="Fetch">
            lore
        </div>
    )
}
}
export default Fetch;