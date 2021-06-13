import React from "react";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import SignInComponent from "..";
import { act } from "react-dom/test-utils";
import { useFormik } from "formik";
import { SigninUserType } from "types/authTypes";

describe("Render Signin Component", () => {
  let formik: any;
  let RenderFunc: any;
  beforeEach(() => {
    RenderFunc = () => {
      formik = useFormik<SigninUserType>({
        initialValues: {
          email: "test@gmail.com",
          password: "123456",
        },
        onSubmit: (values: SigninUserType) => {},
      });
      return null;
    };
    render(<RenderFunc />);
  });
  test("Test if signin render", async () => {
    const onSubmit = jest.fn();
    const { container } = render(<SignInComponent onSubmit={onSubmit} />);

    expect(container).toBeInTheDocument();
  });
  test("Test if values is truthy", async () => {
    const { values } = formik;

    expect(values).toBeTruthy();
  });
  test("Test if email is correct", async () => {
    const { values } = formik;

    expect(values.email).toEqual("test@gmail.com");
  });
//   test("Test if email is correct", async () => {
//     const onSubmit = jest.fn();

//     render(<SignInComponent onSubmit={onSubmit} />);

//     const form = screen.getByTestId("sign-in-form");

//     act(() => {
//       fireEvent.submit(form);
//     });

//     await waitForElementToBeRemoved(async () => {
//       expect(await onSubmit).toHaveBeenCalled();
//       expect(await onSubmit).toHaveBeenCalledTimes(1);
//     });
//   });
});
