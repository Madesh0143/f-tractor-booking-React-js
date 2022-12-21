import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminHome = () => {

    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/admin/users')
        .then((res) => {
            setUserData(res?.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    

    return (
        <div>
            <div>
                <Link to='/adminHome'>Users</Link>
                <Link to='/tractors'>Tractor</Link>
            </div>
            <h2>AdminHome</h2>
            <h2>Users</h2>
            <table border="2" width="100%">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>CreateAt</th>
                    </tr>

                </thead>

                <tbody>
                    
                    {
                        userData?.map((val) => (
                            <tr key={val._id}>
                                <td>{val._id}</td>
                                <td>{val.username}</td>
                                <td>{val.email}</td>
                                <td>{val.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AdminHome;