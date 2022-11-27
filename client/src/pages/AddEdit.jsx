import { useState } from "react";
import { Link } from "react-router-dom";

const initialInputValues = {
  name: "",
  emai: "",
  contact: "",
};

const AddEdit = () => {
  const [inputValues, setInputValues] = useState(initialInputValues);

  const { name, email, contact } = inputValues;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prev) => [...prev, { ...inputValues, [name]: value }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email Address..."
          value={email}
          onChange={handleInputChange}
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          name="contact"
          placeholder="Contact Number..."
          value={contact}
          onChange={handleInputChange}
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
