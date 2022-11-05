import * as React from "react";
import { Stack } from "@mui/material";
import { Text, Variant } from "./Text";
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
      <Text {...{ variant: nameVariant, text: name }} />
      <Text {...{ variant: textVariant, text }} />
    </Stack>
  );
}
