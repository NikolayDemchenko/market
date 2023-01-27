import { Box } from "@mui/material";
import { BaseText, Variant } from "./BaseText";

export const DottedNameValue = (props: { name: string; value: string }) => {
    const { name, value } = props;
  
    return (
      <Box
        sx={{
          display: "flex",
          width: "100%",
          m: -0.3,
        }}
      >
      <>
        <Box sx={{ flexShrink: 0 }}>
          <BaseText {...{ fontWeight: 700, variant: Variant.body1, text: name,...props, }} />
        </Box>
        <Box sx={{ px: 0.3, overflow: "hidden", width: "100%" }}>
          {/* <Text
            {...{          
              variant: Variant.body1,
              text:Array(Math.pow(50, 2)).join("."),
              // text:".".repeat(Math.pow(50, 2)),
              ...props,
            }}
          /> */}
        </Box>
        <Box sx={{ flexShrink: 0 }}>
          <BaseText
            {...{
              variant: Variant.body2,
              text: value,...props,
            }}
            />
        </Box>
        </>
      </Box>
    );
  };