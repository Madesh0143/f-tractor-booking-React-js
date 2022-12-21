import React,{ useState } from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";
import axios from 'axios';

const BookingForm = () => {

  const [errMsg, setErrMsg] = useState('')

  const [data, setData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      phone_no: '',
      nametractor:'',
      address: '',
      tractor_count: '',
      date_time: '',
      description: ''
  })

  const handleChange = e => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()

    axios.post(`http://localhost:5000/api/user/new`, data)
    .then((res) => {
      setErrMsg(res.data.msg)
      setData({
        firstname: '',
        lastname: '',
        email: '',
        phone_no: '',
        nametractor:'',
        address: '',
        tractor_count: '',
        date_time: '',
        description: ''
    })
    }).catch((err) => {
      setErrMsg(err.response.data.msg)
    })
  };


  return (

    <div>
      {errMsg && <div>{errMsg}</div>}
      <Form onSubmit={submitHandler}>
        
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input type="text" name="firstname" value={data.firstname} onChange={handleChange} placeholder="First Name" />
        </FormGroup>
        
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input type="text" name="lastname"  value={data.lastname} onChange={handleChange} placeholder="Last Name" />
        </FormGroup>

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input type="email" name="email"  value={data.email} onChange={handleChange} placeholder="Email" />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block ms-1 mb-4">
          <input type="number" name="phone_no"  value={data.phone_no} onChange={handleChange} placeholder="Phone Number" />
        </FormGroup>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="nametractor"  value={data.nametractor} onChange={handleChange} id="nametractor">
            <option value="Name-0-Tractor">Select :--</option>
            <option value="Nine Tyness Tractor">Nine Tyness Tractor</option>
            <option value="Rotavator Tractor">Rotavator Tractor</option>
            <option value="Cage Wheel Tractor">Cage Wheel Tractor</option>
            <option value="Loaded Tractor Tractor">Loaded Tractor Tractor</option>
            <option value="Five Tyness Tractor">Five Tyness Tractor</option>
            <option value="Crops Harvesting Tractor">Crops Harvesting Tractor</option>
            <option value="Seeding  Tractor Machine">Seeding Machine Tractor</option>
            <option value="Colorado Tractor">Colorado Tractor</option>
          </select>

          {/* <input  name="address"  value={data.address} onChange={handleChange} placeholder="From Address" /> */}
        </FormGroup>
        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input type="text" name="address"  value={data.address} onChange={handleChange} placeholder="From Address" />
        </FormGroup>
        

        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <select name="tractor_count"  value={data.tractor_count} onChange={handleChange} id="tractor_count">
            <option value="None">Select :--</option>
            <option value="1 Tractor">1 Tractor</option>
            <option value="2 Tractor">2 Tractor</option>
            <option value="3 Tractor">3 Tractor</option>
          </select>
        </FormGroup>


        <FormGroup className="booking__form d-inline-block me-4 mb-4">
          <input type="datetime-local"  value={data.date_time} onChange={handleChange} name="date_time" placeholder="Journey Date" />
        </FormGroup>

        

        <FormGroup>
          <textarea
            rows={2}
            type="textarea"
            className="textarea"
            value={data.description}
            onChange={handleChange}
            name="description"
            placeholder="Write Description"
          ></textarea>
        </FormGroup>

        <button to='/Home'  className="All-btn" type="submit">Submit</button>
      </Form>
    </div>
    
  );
};

export default BookingForm;
