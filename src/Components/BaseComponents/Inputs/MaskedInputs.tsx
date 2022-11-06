import { DateMask, DurationMask, PhoneMask } from "./IMaskedInputs";


export default function PhoneInput({label,
  defaultValue,
  getPhoneNumber,
}: {
  label: string;
  defaultValue?: string;
  getPhoneNumber: Function;
}) {

  return (
    <PhoneMask {...{label,defaultValue, getPhoneNumber}} />
  );
}


export  function DurationInput({label,
  defaultValue,
  getData,
}: {
  label: string;
  defaultValue?: string;
  getData: Function;
}) {

  return (   
    <DurationMask {...{label,defaultValue, getData}} />
  );
}
export  function DateInput({label,
  defaultValue,
  getData,
}: {
  label: string;
  defaultValue?: string;
  getData: Function;
}) {

  return (   
    <DateMask {...{label,defaultValue, getData}} />
  );
}