import * as React from "react";
import { Stack, Typography } from "@mui/material";

export enum Variant {
  button = "button",
  caption = "caption",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
  subtitle1 = "subtitle1",
  subtitle2 = "subtitle2",
  body1 = "body1",
  body2 = "body2",
  overline = "overline",
  inherit = "inherit",
}

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
      <Typography variant={nameVariant} gutterBottom>
        {name}
      </Typography>
      <Typography variant={textVariant} gutterBottom>
        {text}
      </Typography>
    </Stack>
  );
}
