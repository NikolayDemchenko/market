import Button from "@mui/material/Button";
export default function BasicButton({
  btnText,onClick
}: {
  btnText: string;
onClick:Function
}) {
  return (
    <Button fullWidth variant="contained" size="large" onClick={()=>onClick()}>
      {btnText}
    </Button>
  );
}
