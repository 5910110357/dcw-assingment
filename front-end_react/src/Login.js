import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Card, Image } from 'react-bootstrap';
import './App.css'; 

function Login() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }
  
  
    return (         
        <div class="container">
          
            <center>
          <color1> 
            <h1>Welcome</h1>
          </color1>
        </center>
          <Card style={{ width: '500px' }}>
            <Card.Header>
              {!login &&
                <FacebookLogin
                  appId="1164957047575899"
                  autoLoad={true}
                  fields="name,email,picture"
                  scope="public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook" />
              }
              
              {login &&
                <Image src={picture} roundedCircle />
              }
            </Card.Header>
          </Card> 
            {login &&
              <Card.Body>
                <Card.Title style={{ color: 'black' }} >{data.name}</Card.Title> 
                <Card.Text style={{ color: 'black' }}> {data.email} </Card.Text>
                <button>
                      <a style={{ color: 'black', textDecoration: 'none' }}
                          href='/test'> Go to Website</a>
                  </button>  
              </Card.Body>
            }
        </div>   
        
      
    );
  
}

export default Login