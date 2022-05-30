import { render } from "@testing-library/react";
import React from "react";

class Fetch extends Component {
    constructor() {
        super();
    }
}

componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(response)
}

render() {
    return(
        <div className="Fetch">
            fetch
        </div>
    )
}

export default Fetch;