import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/contacts/get/${id}`)
      .then((response) => setUser({ ...response.data[0] }));
  }, [id]);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <p>User Contact Details</p>
        </div>
        <div className="card-container">
          <strong>ID: </strong>
          <span>{user.id}</span>
          <br />
          <br />
          <strong>Name: </strong>
          <span>{user.name}</span>
          <br />
          <br />
          <strong>Email: </strong>
          <span>{user.email}</span>
          <br />
          <br />
          <strong>Contact: </strong>
          <span>{user.contact}</span>
          <br />
          <br />
          <Link to="/">
            <button className="btn btn-view">Go Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default View;
