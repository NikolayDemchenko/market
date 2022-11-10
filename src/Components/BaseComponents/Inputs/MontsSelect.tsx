import * as React from "react";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AddButton from "../Buttons/BasicButton";
import { Text, Variant } from "../DisplayingComponents/Text";
import { ListItemButton, Toolbar } from "@mui/material";

export function MontsSelect({
  monts,
  getMonts,
}: {
  monts: string;
  getMonts: Function;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setValue] = React.useState<string[]>(
    monts.split(",").filter((el, index) => index !== 0)
  );
  console.log("value :>> ", value);
  return (
    <>


    <ListItemButton onClick={handleOpen}>
      <Box
        component="label"
        // onClick={handleOpen}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
        }}
      >
        {/* <Box sx={{ mr: 2 }}> */}
            <Toolbar>

          <Text {...{ text: "Сезонность", variant: Variant.h6 }} />
            </Toolbar>
        {/* </Box> */}
        <Text {...{ text: monts, variant: Variant.body1 }} />
      </Box>
      </ListItemButton>
      <Modal
        open={open}
        onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",       
            boxShadow: 24,
            p: 4,
          }}
        >
          <Sheet sx={{ width: "320px", mb: 2, borderRadius: "sm" }}>
            <Toolbar>
              <Text
                {...{ text: "Выберите месяцы", variant: Variant.h6 }}
              ></Text>
            </Toolbar>
            <List
              row
              wrap
              sx={{
                "--List-gap": "8px",
                "--List-item-radius": "20px",
                "--List-item-minHeight": "32px",
                // bgcolor: "red",
                justifyContent: "center",
              }}
            >
              {[
                "Декабрь",
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
              ].map((item) => (
                <ListItem sx={{ width: "30%" }} key={item}>
                  {value.includes(item) && (
                    <Done
                      fontSize="medium"
                      color="primary"
                      sx={{
                        ml: -0.5,
                        mr: 0.5,
                        zIndex: 2,
                        pointerEvents: "none",
                      }}
                    />
                  )}
                  <Checkbox
                    size="sm"
                    disableIcon
                    overlay
                    label={item}
                    checked={value.includes(item)}
                    variant={value.includes(item) ? "soft" : "outlined"}
                    onChange={(event) => {
                      if (event.target.checked) {
                        setValue((val) => [...val, item]);
                      } else {
                        setValue((val) => val.filter((text) => text !== item));
                      }
                    }}
                    componentsProps={{
                      action: ({ checked }) => ({
                        sx: checked
                          ? {
                              border: "1px solid",
                              borderColor: "primary.500",
                            }
                          : {},
                      }),
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Sheet>
          <AddButton
            btnText={"Применить"}
            onClick={() => {
              getMonts(value.join(", "));
              handleClose();
            }}
          />
        </Box>
      </Modal>
 
    </>
  );
}
