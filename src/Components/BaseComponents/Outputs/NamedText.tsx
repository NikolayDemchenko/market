import * as React from "react";
import { Stack } from "@mui/material";
import { BaseText, Variant } from "./BaseText";
export function NamedText({
  name,
  nameVariant,
  text,
  textVariant,
}: {
  name: string;
  nameVariant: Variant;
  text: string;
  textVariant: Variant;
}) {
  return (
    <Stack direction="row" spacing={1}>
      <BaseText {...{ variant: nameVariant, text: name }} />
      <BaseText {...{ variant: textVariant, text }} />
    </Stack>
  );
}
