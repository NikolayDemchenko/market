import * as React from "react";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

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

export function Text(props: { text: string; variant: Variant }) { 
  return <BootstrapTypography {...props}>{props.text}</BootstrapTypography>;
}

const BootstrapTypography = styled(Typography)(({ theme }) => ({
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
}));
