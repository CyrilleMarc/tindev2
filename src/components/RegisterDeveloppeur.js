import Navbar from "./Navbar";
import Form from "./Form";

function RegisterDeveloppeur() {
  return (
    <>
      <Navbar />
      <div>
        <Form
          h1={"Espace Developpeurs"}
          title={"Inscription"}
          adress={"http://localhost:3002/developpeurRegister"}
          redirectLink={"/loginDeveloppeur"}
          creation={"Déjà inscrit"}
          action={"registerDeveloppeur"}
          btn={"S'inscrire"}
        />
      </div>
    </>
  );
}

export default RegisterDeveloppeur;
