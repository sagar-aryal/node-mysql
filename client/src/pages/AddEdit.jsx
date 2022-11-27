import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const initialInputValues = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [inputValues, setInputValues] = useState(initialInputValues);
  const navigate = useNavigate();
  const { id } = useParams();

  const { name, email, contact } = inputValues;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/contacts/get/${id}`)
      .then((response) => setInputValues({ ...response.data[0] }));
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      toast.error("Please enter all the input values");
    } else {
      if (!id) {
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
      } else {
        try {
          axios.put(`http://localhost:5000/api/v1/contacts/update/${id}`, {
            name,
            email,
            contact,
          });
          setInputValues(initialInputValues);
          toast.success("Contact data updated succesfully");
          setTimeout(() => {
            navigate("/");
          }, 500);
        } catch (error) {
          toast.error(error.response.data);
        }
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
          value={name || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email Address..."
          value={email || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          name="contact"
          placeholder="Contact Number..."
          value={contact || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <input type="submit" value={id ? "Update" : "Add"} />
        <Link to="/">
          <input type="button" value="Go Back" />
        </Link>
      </form>
    </div>
  );
};

export default AddEdit;
