import Button from "@mui/material/Button";
export default function BasicButton({
  btnText
}: {
  btnText: string;
  width: string;
}) {
  return (
    <Button sx={{ minWidth: "100%" }} variant="contained" size="large">
      {btnText}
    </Button>
  );
}
