import Navbar from "./Navbar";
import Form from "./Form";

function LoginDeveloppeur() {
  return (
    <>
      <Navbar />
      <div>
        <Form
          h1={"Espace Developpeurs"}
          title={"Connexion"}
          adress={"http://localhost:3002/developpeurlogin"}
          redirectLink={"/registerDeveloppeur"}
          creation={"Créer un compte"}
          action={"loginDeveloppeur"}
          btn={"Se connecter"}
          questionnaire={"questionnaireDeveloppeur"}
        />
      </div>
    </>
  );
}

export default LoginDeveloppeur;
