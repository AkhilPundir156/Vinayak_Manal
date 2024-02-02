import React, { useState } from 'react'
import loginimg from "../images/login_person.webp"
import "../styles/Login.scss"

const Login = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        showPassword: false,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const togglePasswordVisibility = () => {
        setFormData({
          ...formData,
          showPassword: !formData.showPassword,
        });
      };

  return (
    <div className='login-main'>
        <div className="login-item">
            <div className="loginimg">
                <img src={loginimg} alt="" srcset="" />
            </div>
        </div>
        <div className="login-item1">
            <div className="loginbox">
                <h2>Welcome Back !</h2>
                <p>Please sign-in to your account and start the adventure</p>
            <form action="">
  <label htmlFor="email">Email</label>
  <input type="text" name="email" id="email" />

  <label htmlFor="password">Password</label>
  <input type="password" name="password" id="password" />

  <button type="submit">Login</button>
  <a href="">Forgot Password</a>
</form>
            </div>
        </div>
    </div>
  )
}

export default Login
