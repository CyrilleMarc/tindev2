import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/userList.css";

function ListRecruteurs() {
  const [recruteurs, setRecruteurs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3002/recruteurList").then((response) => {
      response.json().then((recruteurs) => {
        setRecruteurs(recruteurs);
      });
    });
  }, []);

  function deleteRecruteur(id) {
    fetch(`http://localhost:3002/deleteRecruteur/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        response.json().then((data) => {
          console.log(data);
          navigate("/usersList");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="usersList">
        <h1>Liste recruteurs</h1>
        <div className="tableau">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                {/* <th>Created date</th> */}
                <th>Action</th>
              </tr>
            </thead>
            {recruteurs.length > 0 &&
              recruteurs.map((recruteur) => (
                <>
                  <tbody>
                    <tr>
                      <td key={recruteur._id}>{recruteur._id}</td>
                      <td>{recruteur.email}</td>
                      {/* <td>{recruteur.createdAt}</td> */}
                      <td className="tabBtn">
                        <Link to={`/editRecruteur/${recruteur._id}`}>
                          <button className="edit">Edit</button>
                        </Link>
                        <Link to={`/delete/${recruteur._id}`}>
                          <button
                            className="delete"
                            onClick={() => deleteRecruteur(recruteur._id)}
                          >
                            Delete
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </>
              ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default ListRecruteurs;
