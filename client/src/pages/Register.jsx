import React,{useState} from 'react'
import { Link, useNavigate  } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from 'axios';


const Register = () => {

  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState('')

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const handleChange = (e) => {

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();


    axios.post(`http://localhost:5000/api/user/register`, data)
    .then(() => {
      navigate('/login')
    }).catch((err) => {
      console.log(err);
      setErrMsg(err.response.data.msg);
    })

  }

  return  (
    <Helmet title="Register">
    <CommonSection title="Register" />
    <section>
    <div className="register__container">
      <div className="register_box">
        <h2>Register</h2>
        {errMsg && <div>{errMsg}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form__div">
            <input type="text" id='username' name='username' value={data.username} onChange={handleChange} placeholder='Username' size={35.5} />
          </div>
          <div className="form__div">
            <input type="email" id='email' name='email' value={data.email} onChange={handleChange} placeholder='Email' size={35.5}/>
          </div>
          <div className="form__div">
            <input type="password" id='password' name='password' value={data.password} onChange={handleChange} placeholder='Password'size={35.5} />
          </div>
          <div className="form__div">
            
            <input type="password" id='password2' name='password2' value={data.password2} onChange={handleChange} placeholder='Confirm password' size={35.5}/>
          </div>
          <button to='/register' className='All-btn' type='submit'>Register</button>
        </form>
        <div>
          You have an account
          <Link to='/login'> Login here</Link>
        </div>
      </div>
    </div>
    </section>

    </Helmet>

  );
}

export default Register;