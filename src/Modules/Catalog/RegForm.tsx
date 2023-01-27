import { Stack } from "@mui/joy";
import React from "react";
import {
  BasicButton,
  TFCButton,
} from "../../Components/BaseComponents/Inputs/Buttons/Buttons";
import { PhoneInput, TFCPhoneInput } from "../../Components/BaseComponents/Inputs/MaskedInputs";
import { PasswordInput, TFCPasswordInput } from "../../Components/BaseComponents/Inputs/Password";


type TRegistration = {
  phone: string;
  password: string;
  confirmPassword: string;
};


interface IRegistration {
  phoneInput: TFCPhoneInput;
  passwordInput: TFCPasswordInput;
  confirmButton: TFCButton;
  render: () => JSX.Element;
}


export class MyRegistration implements IRegistration {
  phoneInput: TFCPhoneInput;
  passwordInput: TFCPasswordInput;
  confirmButton: TFCButton;
  constructor(
    phoneInput: TFCPhoneInput,
    passwordInput: TFCPasswordInput,
    confirmButton: TFCButton
  ) {
    this.phoneInput = phoneInput;
    this.passwordInput = passwordInput;
    this.confirmButton = confirmButton;
  }

  render = () => {
    const [state, setState] = React.useState<TRegistration>({
      phone: "",
      password: "",
      confirmPassword: "",
    });

    return (
      <Stack sx={{ width: 420 }} direction={"column"} spacing={1}>
        <this.phoneInput
          {...{
            label: "Введите номер телефона",
            defaultValue: "",
            getPhone: (phone: string) => setState({ ...state, phone }),
            // console.log("phone :>> ", phone),
          }}
        />
        <this.passwordInput
          {...{
            label: "Введите пароль",
            getPassword: (password: string) => setState({ ...state, password }),
            // console.log("password :>> ", password),
          }}
        />
        <this.passwordInput
          {...{
            label: "Подтвердите пароль",
            getPassword: (confirmPassword: string) =>
              setState({ ...state, confirmPassword }),
            // console.log("confirmPassword :>> ", confirmPassword),
          }}
        />
        <this.confirmButton
          {...{ onClick: () => console.log("state :>> ", state) }}
        >
          Подтвердить
        </this.confirmButton>
      </Stack>
    );
  };
}


export const RegForm = new MyRegistration(
  PhoneInput,
  PasswordInput,
  BasicButton
).render;
