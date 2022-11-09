import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useState } from 'react';

const Login = ()=> {

  const navigate = useNavigate();
  const [token, setToken] = useState('')
  const handleGoogleOnSuccess = async (response: any) => {
    //console.log('response', response.credential)
    if(response.credential) {
      const res = await axios.post(
        'http://localhost:4000/api/auth/login', 
      {},
      {
        headers: {
          id_token: response.credential,
          'content-type': 'application/json',
        },
      }
      ).then(() =>{
        localStorage.setItem('signedIn', 'true')
        navigate("/product")
      })
      setToken(res.data.token) 
      localStorage.setItem('token', res.data.token)
    }
    console.log('token', token)
  }
  
  return (
  <div>
    <GoogleLogin
       onSuccess={handleGoogleOnSuccess}
      onError={() => {
      console.log('Login Failed');
      }}
   />;
  </div>
  );
}
export default Login