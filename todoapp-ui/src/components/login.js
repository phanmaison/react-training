import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import axios from 'axios';

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm(){
        return email.length > 0 ;
    }

      function handleSubmit(event){
        event.preventDefault();
        var item = {};
        item.email = email;  
        item.password = password;
        // try {debugger
          // const xhr = new XMLHttpRequest();
          // xhr.open('POST', 'http://demo-todo-app.somee.com/api/Auth/login',{model: item});
          //   axios.post(("http://demo-todo-app.somee.com/api/Auth/login",{model: item}),
             
          //   { 
          //            headers: {
          //                'Access-Control-Allow-Origin': '*',
          //             }}
          //   ) 
          //   .then(function (response) {
          //     console.log(response.data);
          //     this.setState({ users: response.data });
          //     alert("Logged in");
          //   })
             
            
          // } catch (e) {
          //   alert(e.message);
          // }

    //    debugger
    //     axios.post( ('http://demo-todo-app.somee.com/api/Auth/login',item),
    //     { 
    //          headers: {
    //              'Access-Control-Allow-Origin': '*',
    //           }
    //    }).then(function (response) {
    //      console.log(response.data);
    //    }).catch(function (error) {
    //        console.log(error.response);
    //    });

    // }
   axios.post('/api/Auth/login',item).then(res => {
     const user=res.data;
     setEmail(user);
     console.log(res.data)
   })
    // fetch('/api/Auth/login',item, {
    //   method: 'POST',
    //   mode: 'no-cors'
    // }).then(results => {
    //   return results.json();
    // }).then(data => {
      
    //   // email = data.results.username
    //   // console.log(email);
    //   console.log(data);
    // })
  }

    return (
        <div className="Login">
          <form onSubmit={handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
              />
            </FormGroup>
            <Button block bsSize="large" disabled={!validateForm()} type="submit">
              Login
            </Button>
          </form>
        </div>
      );
}