import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../assets/styles/userList.css";

function EditUser() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3002/editRecruteur/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setName(data.name);
        setEmail(data.email);
      });
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updatedUser = { name, email };

    fetch(`http://localhost:3002/editRecruteur/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then(() => {
        navigate("/usersList");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="EditUserList">
      <h1>Edit Recruteur</h1>
      {user&& (
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">ID</label>
          <input
            type="text"
            id="name"
            name="name"
            value={id}
            onChange={handleNameChange}
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />

          <button className="save" type="submit">
            Save
          </button>
          <Link to="/usersList">
            <button className="retour">Retour</button>
          </Link>
        </form>
      )}
    </div>
  );
}

export default EditUser;
