import React,{useState} from 'react'
import { useNavigate  } from "react-router-dom";
import axios from 'axios';
import "../../src/styles/login.css"
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet';



const AdminLogin = () => {

  const navigate = useNavigate()
  const [errMsg, setErrMsg] = useState('')

  const [data, setData] = useState({
    email: '',
    password: ''
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

    axios.post(`http://localhost:5000/api/admin/login`, data)
    .then(() => {
      navigate('/adminHome')
    }).catch((err) => {
      console.log(err);
      setErrMsg(err.response.data.msg);
    })

  }

  return  (
    <Helmet title="Admin login">
    <CommonSection title="Admin Login" />
    <section>
    <div className="register__container">
      <div className="register_box">
        <h2>Admin Login</h2>
        {errMsg && <div>{errMsg}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form__div">
           
            <input type="email" id='email' name='email' value={data.email} onChange={handleChange}  placeholder='Admin Email'/>
          </div>
          <div className="form__div">
            
            <input type="password" id='password' name='password' value={data.password} onChange={handleChange} placeholder="Password" />
          </div>
          <button className='All-btn' type='submit'>Login</button>
        </form>
      </div>
    </div>
    </section>
</Helmet>
  );
}

export default AdminLogin;