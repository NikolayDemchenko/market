import PhoneInputView from "./PhoneView";

export default function PhoneInput({label,
  defaultValue,
  getPhoneNumber,
}: {
  label: string;
  defaultValue?: string;
  getPhoneNumber: Function;
}) {

  return (
    <PhoneInputView {...{label,defaultValue, getPhoneNumber}} />
  );
}