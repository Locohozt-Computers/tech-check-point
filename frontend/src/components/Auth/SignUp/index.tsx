import CustomButton from "components/ui/CustomButton";
import InputWithLabel from "components/ui/InputWithLabel";
import React from "react";
import { useHistory } from "react-router";
import { Container, Form } from "./style";

const SignUpComponent = () => {
    const history = useHistory();

  return (
    <Container>
      <Form>
        <h1>Sign Up</h1>
        <InputWithLabel
          placeholder="Enter Name"
          label="Name"
          onChange={() => {}}
          style={{
            marginBottom: 30,
          }}
        />
        <InputWithLabel
          placeholder="Enter Username"
          label="Username"
          onChange={() => {}}
          style={{
            marginBottom: 30,
          }}
        />
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
          <p></p>
          <p className="forgot-password">
            Do you have an account?{" "}
            <span onClick={() => history.push("/auth/signin")}>Signin</span>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default SignUpComponent;
