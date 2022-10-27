import * as React from "react";
import { Typography } from "@mui/material";

export enum Variant {button="button" , caption="caption" , h1="h1" , h2="h2" , h3="h3" , h4="h4" , h5="h5" , h6="h6" , subtitle1="subtitle1" , subtitle2="subtitle2" , body1="body1" , body2="body2" , overline="overline" , inherit="inherit"}

export function Text({ text, variant }: { text: string, variant: Variant }) {
  return (
    <div>
      <Typography variant={variant} gutterBottom>
        {text}
      </Typography>
    </div>
  );
}
