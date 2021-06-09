import React, { useState } from "react";
import AuthButton from "components/ui/AuthButton";
import CustomButton from "components/ui/CustomButton";
import InputWithLabel from "components/ui/InputWithLabel";
import CustomSwitch from "components/ui/Switch";
import { useHistory } from "react-router";
import { Container, Form } from "./style";

const SignInComponent = () => {
  const history = useHistory();
  const [isAgent, setIsAgent] = useState(false);

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
        <CustomSwitch
          checked={isAgent}
          onChange={(value) => setIsAgent(value)}
          label={isAgent ? "Agent" : "User"}
          style={{ marginBottom: 30 }}
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
            Forgot{" "}
            <span onClick={() => history.push("/auth/resetpassword")}>
              Password
            </span>
            ?
          </p>
        </div>
        <AuthButton
          label="Continue With Google"
          onClick={() => {}}
          style={{ marginTop: 20 }}
        />
      </Form>
    </Container>
  );
};

export default SignInComponent;
