import Navbar from "./Navbar";
import Form from "./Form";

function LoginRecruteur() {
  return (
    <>
      <Navbar />
      <div>
        <Form
          h1={"Espace recruteurs"}
          title={"Connexion"}
          adress={"http://localhost:3002/recruteurLogin"}
          redirectLink={"/registerRecruteur"}
          creation={"Créer un compte"}
          action={"loginRecruteur"}
          btn={"Se connecter"}
          questionnaire={"questionnaireRecruteur"}
        />
      </div>
    </>
  );
}

export default LoginRecruteur;
