import RegisterForm from "../Components/RegisterForm";

export const metadata = {
  title: "Register",
};

export default async function Register() {


  return (
    <>
      <style>{`
                body {
                    background-color: white;
                }
            `}</style>
      <div className="bg-white">

        <RegisterForm />
      </div>
    </>
  )
}