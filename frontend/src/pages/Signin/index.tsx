import SignInComponent from "components/Auth/SignIn";
import { AuthContext } from "context/auth/AuthProvider";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { SigninUserType } from "types/authTypes";

const SignInPage = () => {
  const history = useHistory();

  const { signInUserContext } = useContext(AuthContext);

  const onSubmit = async (values: SigninUserType, { setSubmitting, setErrors }: any) => {
    console.log(values);
    try {
      setSubmitting(true);
    //   await signInUserContext(values);
      history.push("/home");
      setSubmitting(false);
    } catch (error) {
      setSubmitting(false);
      setErrors(error)
    }
  };

  return (
    <div>
      <SignInComponent onSubmit={onSubmit} />
    </div>
  );
};

export default SignInPage;
