import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { url } from '../common/constants';
import { Redirect } from 'react-router-dom';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [officers, setOfficers] = useState([]);
  const isSignin = useSelector((state) => state.isSignin);
  const history = useHistory();

  useEffect(() => {
    getUsers();
    getOfficers();
  }, []);

  const getUsers = () => {
    axios.get(url + '/admin/userList').then((response) => {
      const res = response.data;
      if (res.status === 'OK') {
        setUsers(res.result);
      } else {
        alert('Error while loading list of Users');
      }
    });
  };

  const getOfficers = () => {
    axios.get(url + '/admin/officerList').then((response) => {
      const res = response.data;
      if (res.status === 'OK') {
        setOfficers(res.result);
      } else {
        alert('Error while loading list of Officers');
      }
    });
  };

  if (!isSignin) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link active" to={{ pathname: '/adminpage' }}>
            Users List
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={{ pathname: '/feedback' }}>
            Feedbacks
          </Link>
        </li>
      </ul>
      <nav className="navbar navbar-expand-sm">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <a className="nav-link" href="/rtoregister">
              <button type="button" className="btn bg-danger my-2 my-sm-0 text-white">
                Register RTO Officer
              </button>
            </a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="/">
              <button type="button" className="btn bg-danger my-2 my-sm-0 text-white">
                Log Out
              </button>
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid mt-2">
        {/* Users Table */}
        <h2 className="bg-light" style={{ textAlign: 'center', fontFamily: 'redressed georgia garamond serif' }}>
          Users List
        </h2>
        <table className="table table-bordered table-hover table-secondary">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.firstName} {user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Officers Table */}
        <h2 className="bg-light" style={{ textAlign: 'center', fontFamily: 'redressed georgia garamond serif' }}>
          Officers List
        </h2>
        <table className="table table-bordered table-hover table-secondary">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {officers.map((officer) => (
              <tr key={officer.id}>
                <td>{officer.firstName} {officer.lastName}</td>
                <td>{officer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
