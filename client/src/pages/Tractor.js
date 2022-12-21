import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tractor = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/tractor')
        .then((res) => {
            setUserData(res?.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(userData);
    

    return (
        <div>
            <div>
                <Link  to='/adminHome'>Users</Link>
                <Link to='/tractors'>Tractor</Link>
            </div>
            <h2>Tractor</h2>
            <table border="2" width="100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Phone No</th>
                        <th>Tractor Name</th>
                        <th>Address</th>
                        <th>Tractor Count</th>
                        <th>Date Time</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        userData?.map((val) => (
                            <tr key={val._id}>
                                <td>{val._id}</td>
                               
                                <td>{val.firstname}</td>
                                <td>{val.lastname}</td>
                                <td>{val.email}</td>
                                <td>{val.phone_no}</td>
                                <td>{val.nametractor}</td>
                                <td>{val.address}</td>
                                <td>{val.tractor_count}</td>
                                <td>{val.date_time}</td>
                                <td>{val.description}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tractor;