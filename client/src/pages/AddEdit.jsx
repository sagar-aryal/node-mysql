import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialInputValues = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = useState(initialInputValues);

  const { name, email, contact } = inputValues;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please enter all the input values");
    } else {
      try {
        axios.post("http://localhost:5000/api/v1/contacts/post", {
          name,
          email,
          contact,
        });
        setInputValues(initialInputValues);
        toast.success("Contact data added succesfully");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } catch (error) {
        toast.error(error.response.data);
      }
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name..."
          value={name}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email Address..."
          value={email}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          name="contact"
          placeholder="Contact Number..."
          value={contact}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input type="submit" value="Add" />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
