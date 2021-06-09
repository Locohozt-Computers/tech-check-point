import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import AuthButton from "components/ui/AuthButton";
import CustomButton from "components/ui/CustomButton";
import InputWithLabel from "components/ui/InputWithLabel";
import CustomSwitch from "components/ui/Switch";
import { Container, Form } from "./style";

const ForgotPassword = () => {
  const history = useHistory();
  const [isAgent, setIsAgent] = useState(false);

  return (
    <Container>
      <Form>
        <h1>Reset Password</h1>
        <InputWithLabel
          placeholder="Enter Email"
          label="Email address"
          onChange={() => {}}
          style={{
            marginBottom: 30,
          }}
        />
        <CustomButton
          label="Submit Email"
          onClick={() => {}}
          background={"#177BFF"}
        />
        <div className="flex">
          <p className="forgot-password">
            Go back to ?{" "}
            <span onClick={() => history.push("/auth/signin")}>Signin</span>
          </p>
        </div>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
