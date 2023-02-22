import Navbar from "./Navbar";
import Form from "./Form";

function RegisterRecruteur() {
  return (
    <>
      <Navbar />
      <div>
        <Form
          h1={"Espace recruteurs"}
          title={"Inscription"}
          adress={"http://localhost:3002/recruteurRegister"}
          redirectLink={"/loginRecruteur"}
          creation={"Déjà inscrit"}
          action={"registerRecruteur"}
          btn={"S'inscrire"}
        ></Form>
      </div>
    </>
  );
}

export default RegisterRecruteur;
