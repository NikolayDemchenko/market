import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Text, Variant } from "../../DisplayingComponents/Text";
export function HiddenDelete({
  items,
  setItems,
}: {
  items: { checked?: boolean }[];
  setItems: Function;
}) {
  return (
    (items.find((item) => item.checked) && (
      <IconButton
        size="large"
        onClick={() => setItems(items.filter((item) => !item.checked))}
      >
        <Grid container direction="column" alignItems="center">
          <DeleteIcon />
          <Text {...{ variant: Variant.caption, text: "Удалить" }} />
        </Grid>
      </IconButton>
    )) || <></>
  );
}
