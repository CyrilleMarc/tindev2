import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/form.css";
import Button from "./Button";

function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistred, setIsRegistred] = useState(null);
  const [isConnected, setIsConnected] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();
    try {
      const response = await fetch(`${props.adress}`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        setEmail("");
        setPassword("");
        setIsRegistred(!isRegistred);
        if (props.action === "registerRecruteur") {
          setTimeout(() => {
            navigate("/LoginRecruteur");
          }, 3000);
        } else if (props.action === "registerDeveloppeur") {
          setTimeout(() => {
            navigate("/LoginDeveloppeur");
          }, 3000);
        }
      }
      if (response.status > 400) setError(!error);
    } catch (error) {
      console.log(error);
    }
  }

  async function login(e) {
    e.preventDefault(e);
    try {
      const response = await fetch(`${props.adress}`, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      if (response.ok) {
        setEmail("");
        setPassword("");
        setIsConnected(!isConnected);
        if (props.action === "loginRecruteur") {
          setTimeout(() => {
            navigate("/questionnaireRecruteur");
          }, 3000);
        } else if (props.action === "loginDeveloppeur") {
          setTimeout(() => {
            navigate("/questionnaireDeveloppeur");
          }, 3000);
        }
      }
      if (response.status > 400) setError(!error);
    } catch (error) {
      console.log(error);
    }
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (props.action === "registerRecruteur") {
      register(e);
    } else if (props.action === "loginRecruteur") {
      login(e);
    } else if (props.action === "registerDeveloppeur") {
      register(e);
    } else if (props.action === "loginDeveloppeur") {
      login(e);
    }
  }

  return (
    <div className="wrapper">
      <div className="vignetteContainer">
        <div className="vignetteContent">
          <h1>{props.h1}</h1>
          {isRegistred ? (
            <div style={{ color: "green" }}>
              Utilisateur enregistré avec succès, vous allez être redirigé.
            </div>
          ) : null}
          {isConnected ? (
            <div style={{ color: "green" }}>
              Utilisateur connecté avec succès, vous allez être redirigé.
            </div>
          ) : null}
          {error ? (
            <div style={{ color: "red" }}>
              Une erreur est survenue, veuillez recommencer
            </div>
          ) : null}
          <h3>{props.title}</h3>
          <form onSubmit={handleFormSubmit}>
            <label>Email</label>
            <input
              type="text"
              value={email}
              placeholder=" Entrez votre email"
              onChange={(e) => setEmail(e.target.value)}
              onClick={() => setError(null)}
            ></input>
            <br></br>
            <label>Mot de passe</label>
            <br></br>
            <input
              type="password"
              value={password}
              placeholder=" Entrez un mot de passe"
              onChange={(e) => setPassword(e.target.value)}
              onClick={() => setError(null)}
            ></input>
            <br></br>
            <div className="btn">
              <Button>{props.btn}</Button>
              <Link to={props.redirectLink} className="linkIsConnected">
                {props.creation}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
