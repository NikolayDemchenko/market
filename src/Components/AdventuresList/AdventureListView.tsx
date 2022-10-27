import List from "@mui/material/List";
import AdvListItem from "./AdventureListItem";
import { AdventureItem } from "../../types/provider";
import { Text, Variant } from "../BaseComponents/DisplayingComponents/Text";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AddIcon from "@mui/icons-material/Add";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppBar, Paper, Stack, Toolbar } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
export default function AdventureListView({
  adventures,
}: {
  adventures: AdventureItem[];
}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));

  return (
    <>
      <AppBar color="inherit">
        <Toolbar>
          <Box sx={{ minWidth: "100%" }}>
            <Text {...{ variant: Variant.h4, text: "Приключения" }} />
            <BottomNavigation showLabels>
              <BottomNavigationAction label="Добавить" icon={<AddIcon />} />
              <BottomNavigationAction
                label="Опубликовать"
                icon={<AddTaskIcon />}
              />
              <BottomNavigationAction
                label="Снять с публикации"
                icon={<RemoveCircleOutlineIcon />}
              />
              <BottomNavigationAction label="Удалить" icon={<DeleteIcon />} />
            </BottomNavigation>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.12)", pt: 12.5 }}>
        <List dense sx={{ width: "100%" }}>
          <Stack spacing={0.6}>
            {adventures.map((adventure: AdventureItem,index) => {
              const labelId = `checkbox-list-secondary-label-${adventure.id}`;
              return (
                <Item key={index} elevation={1}>
                  <AdvListItem {...{ adventure, labelId }} />
                </Item>
              );
            })}
          </Stack>
        </List>
      </Box>
    </>
  );
}
