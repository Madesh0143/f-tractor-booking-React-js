import React,{useState} from 'react'
import { Link, useNavigate  } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../styles/login.css"



const Login = () => {
  
  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState('')

  const [data, setData] = useState({
    email: '',
    password: ''
  });
  const notify = () => {
    toast.success(' Success To Login!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
     
  };

  

  const handleChange = (e) => {

    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();


    axios.post(`http://localhost:5000/api/user/login`, data)
    .then(() => {
      navigate('/home')
    }).catch((err) => {
      console.log(err);
      setErrMsg(err.response.data.msg);
    })

  }

  return  (
    <Helmet title="Login">
      <CommonSection title="Login " />
      <section>
    <div className="register__container">
      <div className="register_box">
        <h2>Login</h2>
        {errMsg && <div>{errMsg}</div>}
        <form  className='login-form ' onSubmit={handleSubmit}>
          <div className="form__div">
            
            <input type="email" id='email' name='email' value={data.email} onChange={handleChange} placeholder='Email' size={35.5} />
          </div>
          <div className="form__div">
           
            <input type="password" id='password' name='password' value={data.password} onChange={handleChange} placeholder='Password' size={35.5} />
          </div>
          <button className='All-btn md-3' type='submit  ' onClick={notify}>Login</button>
          <ToastContainer />
        </form>
        <div>
          You don't have an account
          <Link to='/register'>Register here</Link>
        </div>
        <div>
          <Link to='/adminLogin'>Administrator Login</Link>
        </div>
      </div>
    </div>
      </section>

    </Helmet>

  );
}

export default Login;