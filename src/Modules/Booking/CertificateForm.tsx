import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import React from "react";
import { BaseText, Variant } from "../../Components/BaseComponents/Outputs/BaseText";
import { RowTextInput } from "../../Components/BaseComponents/Inputs/RowTextInput";
import { BasicButton } from "../../Components/BaseComponents/Inputs/Buttons/Buttons";

export type TCertificate = {
  sertificateNumber: string;
  sertificateCode: string;
};
export const CertificateForm = ({getCertificate}:{getCertificate:(certificate:TCertificate)=>void}) => {
  const [state, setState] = React.useState<TCertificate>({
    sertificateNumber: "",
    sertificateCode: "",
  });

  const getSertificateNumber = (sertificateNumber: string) => {
    setState({ ...state, sertificateNumber });
    console.log("sertificateNumber :>> ", sertificateNumber);
  };
  const getSertificateCode = (sertificateCode: string) => {
    setState({ ...state, sertificateCode });
    console.log("sertificateCode :>> ", sertificateCode);
  };

  return (
    <Stack spacing={2} >
      <Grid container justifyContent="center">
        <BaseText {...{ variant: Variant.h6, text: "Сертификат" }} />
      </Grid>
      <RowTextInput
        {...{
          label: "Номер сертификата",
          defaultValue: "",
          getText: getSertificateNumber,
        }}
      />
      <RowTextInput
        {...{
          label: "Секретный код сертификата",
          defaultValue: "",
          getText: getSertificateCode,
        }}
      />
      <BasicButton
        {...{
          onClick: () => {
            if (state.sertificateCode && state.sertificateNumber) {    
              getCertificate(state)
            } else {
              alert("Не все поля заполнены!");
            }
          },
        }}
      >
        ПРИМЕНИТЬ
      </BasicButton>
    </Stack>
  );
};
