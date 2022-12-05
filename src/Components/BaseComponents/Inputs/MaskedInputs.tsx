
import { DateMask, DurationMask, PhoneMask } from "./IMaskedInputs";
export type TFCPhoneInput = (props: {
  label: string;
  defaultValue?: string;
  getPhone: Function;
}) => JSX.Element;
export const PhoneInput: TFCPhoneInput = ({
  label,
  defaultValue,
  getPhone,
}) => {
  return <PhoneMask {...{ label, defaultValue, getPhone }} />;
};

export function DurationInput({
  label,
  defaultValue,
  getData,
}: {
  label: string;
  defaultValue?: string;
  getData: Function;
}) {
  return <DurationMask {...{ label, defaultValue, getData }} />;
}
export function DateInput({
  label,
  defaultValue,
  getData,
}: {
  label: string;
  defaultValue?: string;
  getData: Function;
}) {
  return <DateMask {...{ label, defaultValue, getData }} />;
}
