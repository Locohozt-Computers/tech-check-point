import CustomButton from "components/ui/CustomButton";
import InputWithLabel from "components/ui/InputWithLabel";
import React from "react";
import { useHistory } from "react-router";
import { Container, Form } from "./style";

const SignInComponent = () => {
  const history = useHistory();

  return (
    <Container>
      <Form>
        <h1>Sign In</h1>
        <InputWithLabel
          placeholder="Enter Email"
          label="Email address"
          onChange={() => {}}
          style={{
            marginBottom: 30,
          }}
        />
        <InputWithLabel
          placeholder="Enter Password"
          label="Password"
          onChange={() => {}}
          style={{
            marginBottom: 30,
          }}
        />
        <CustomButton
          label="Submit"
          onClick={() => {}}
          background={"#177BFF"}
        />
        <div className="flex">
          <p className="forgot-password">
            Are you new?{" "}
            <span onClick={() => history.push("/auth/signup")}>Signup</span>
          </p>
          <p className="forgot-password">
            Forgot <span>Password</span>?
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default SignInComponent;
