import * as React from "react";
import Checkbox from "@mui/joy/Checkbox";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Sheet from "@mui/joy/Sheet";
import Done from "@mui/icons-material/Done";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { BasicButton } from "./Buttons/Buttons";
import { BaseText, Variant } from "../Outputs/BaseText";
import { ListItemButton, Toolbar } from "@mui/material";

export const MonthsSelect = ({
  months,
  getMonts,
}: {
  months: string;
  getMonts: Function;
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // console.log('months.replace().split() :>> ', months.replace(/\s/g, '').split(","));
  const [value, _setValue] = React.useState<string[]>(
    months.replace(/\s/g, "").split(",")
  );
  console.log("value :>> ", value);
  const setValue = (value: string[]) => {
    const months = [
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
      "Декабрь",
    ].filter((x) => value.includes(x));
    console.log("%c months :>> ", "background:#bbb", months);
    _setValue(months);
  };

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
            <BaseText {...{ text: "Сезонность", variant: Variant.h6 }} />
          </Toolbar>
          {/* </Box> */}
          <BaseText {...{ text: months, variant: Variant.body1 }} />
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
              <BaseText
                {...{ text: "Выберите месяцы", variant: Variant.h6 }}
              ></BaseText>
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
              ].map((item, index) => {
                // console.log('value.includes(item) :>> ',item,value, value.includes(item));
                return (
                  <ListItem sx={{ width: "30%" }} key={index}>
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
                          setValue([...value, item]);
                        } else {
                          setValue(value.filter((text) => text !== item));
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
                );
              })}
            </List>
          </Sheet>
          <BasicButton
            {...{
              onClick: () => {
                getMonts(value.join(", "));
                handleClose();
              },
            }}
          >
            Применить
          </BasicButton>
        </Box>
      </Modal>
    </>
  );
};
