import React from 'react'
import Server from './Server';

 
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'mm' };
  }
 
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }
 
  handleSubmit = (event) => {
    alert('A form was submitted: ' + this.state);
    const express = require("express");
    const bodyParser = require('body-parser');
    const cors = require("cors");
     
    const app = express();
     
    app.use(cors());
    // parse application/json
    app.use(bodyParser.json());
      
    //create database connection
    const conn = mysqli.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'dbdb'
    });
     
    //connect to database
    conn.connect((err) =>{
      if(err) throw err;
      console.log('Mysql Connected...');
    });
     
     
    //add new user
    app.post('/dbdb',(req, res) => {
      let data = {name: req.body.name};
      let sql = "INSERT INTO datas SET ?";
      let query = conn.query(sql, data,(err, results) => {
        if(err) throw err;
        res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
      });
    });
     
    app.listen(3000, () => {
      console.log("Server running successfully on 3000");
    });
    fetch('http://localhost/phpmyadmin/index.php?route=/sql&server=1&db=dbdb&table=datas&pos=0', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });
 
    event.preventDefault();
}
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
 
export default NameForm;