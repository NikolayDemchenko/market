import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  BottomNavigation,
  BottomNavigationAction,
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  Modal,
  Paper,
  styled,
  Toolbar,
} from "@mui/material";
import { TCharacteristic } from "../../../../types/provider";
import {
  Text,
  Variant,
} from "../../../BaseComponents/DisplayingComponents/Text";
import RowText from "../../../BaseComponents/Inputs/RowText";
import MultilineText from "../../../BaseComponents/Inputs/MultilineText";
import Amount from "../../../BaseComponents/Inputs/Amount";
import AppBar from "@mui/material/AppBar";
import DeleteIcon from "@mui/icons-material/Delete";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import BasicButton from "../../../BaseComponents/Buttons/BasicButton";
import { NamedText } from "../../../BaseComponents/DisplayingComponents/NamedText";
export default function Characteristics({
  characteristics = [],
  setCharacteristics,
}: {
  characteristics?: TCharacteristic[];
  setCharacteristics: Function;
}) {
  function getAmount(value: number) {
    console.log(value);
  }

  function getMultiText(value: string) {
    console.log(value);
  }

  function getText(value: string) {
    console.log(value);
  }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const checkedToggle = (item: any) => {
    console.log("item :>> ", item);
    setCharacteristics(
      characteristics.map((characteristic) =>
        characteristic === item
          ? { ...characteristic, checked: !characteristic.checked }
          : characteristic
      )
    );
  };
  const addCharacteristic = (characteristic: TCharacteristic) => {
    setCharacteristics([...characteristics, characteristic]);
  };


  return (
    <>
      <CharacteristicModal
        {...{
          handleClose,
          open,
          setCharacteristic:addCharacteristic,
        }}
      />
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Text {...{ variant: Variant.h6, text: "Характеристики" }} />
        </Toolbar>
        <Box sx={{ minWidth: "100%" }}>
          <BottomNavigation showLabels>
            <BottomNavigationAction
              label="Добавить"
              icon={<PlaylistAddIcon sx={{ color: "#616161" }} />}
              value={"Добавить"}
              onClick={handleOpen}
            />
            <BottomNavigationAction
              label="Удалить"
              icon={<DeleteIcon />}
              value={"Удалить"}
            />
          </BottomNavigation>
        </Box>
      </AppBar>
      {/* <Box sx={{ bgcolor: "rgba(0, 0, 0, 0.12)" }}> */}
      <List dense sx={{ width: "100%" }}>
        {characteristics &&
          characteristics.map(
            (characteristic: TCharacteristic, key: number) => {
              return (
                <Characteristic
                  {...{
                    characteristic,
                    key,
                    checkedToggle,
                    labelId: "",
                    setCharacteristic: (item:TCharacteristic) => {
                      setCharacteristics(characteristics.map(charact=>charact===characteristic?item:charact));
                    },
                  }}
                />
              );
            }
          )}
      </List>
      {/* </Box> */}
    </>
  );
}

export function CharacteristicModal({
  open,
  handleClose,
  setCharacteristic,
  characteristic,
}: {
  open: boolean;
  handleClose: Function;
  setCharacteristic: Function;
  characteristic?: TCharacteristic;
}) {
  console.log("characteristic :>> ", characteristic);
  const [modalState, setModalState] = React.useState({ ...characteristic });
  return (
    <Modal
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          // boxShadow: 24,
          p: 4,
        }}
      >
        <Stack spacing={1}>
          <Text
            {...{
              variant: Variant.body1,
              text: "Укажите характеристики",
            }}
          />
          <MultilineText
            {...{
              defaultValue: characteristic ? characteristic.name : "",
              getText: (name: string) =>
                setModalState((state) => ({ ...state, name })),
              label: "Название",
            }}
          />
          <MultilineText
            {...{
              defaultValue: characteristic ? characteristic.description : "",
              getText: (description: string) =>
                setModalState((state) => ({ ...state, description })),
              label: "Описание",
            }}
          />
          <Amount
            {...{
              label: "Количество участников",
              // max: 8,
              min: 1,
              defaultValue: characteristic
                ? characteristic.slotAmount
                : undefined,
              getAmount: (slotAmount: number) =>
                setModalState((state) => ({ ...state, slotAmount })),
            }}
          />
          <RowText
            {...{
              label: "Продолжительность",
              defaultValue: characteristic ? characteristic.duration : "",
              getText: (duration: string) =>
                setModalState((state) => ({ ...state, duration })),
            }}
          />
          <Amount
            {...{
              label: "Цена",
              // max: 8,
              min: 0,
              defaultValue: characteristic ? characteristic.price : undefined,
              getAmount: (price: number) =>
                setModalState((state) => ({ ...state, price })),
            }}
          />
          <RowText
            {...{
              label: "Дата цены",
              defaultValue: characteristic ? characteristic.priceData : "",
              getText: (priceData: string) =>
                setModalState((state) => ({ ...state, priceData })),
            }}
          />
          <BasicButton
            btnText={"Сохранить"}
            onClick={() => {
              setCharacteristic(modalState);
              handleClose();
            }}
          />
        </Stack>
      </Box>
    </Modal>
  );
}

export function Characteristic({
  characteristic,
  labelId,
  setCharacteristic,
  checkedToggle,
}: {
  characteristic: TCharacteristic;
  labelId: string;
  setCharacteristic: Function;
  checkedToggle: Function;
}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body1,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.primary,
  }));



  const [openEdit, setOpenEdit] = React.useState(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);
  return (
   
      <Item elevation={1}>
        <ListItem
          secondaryAction={
            <Checkbox
            edge="end"
            onChange={() => checkedToggle(characteristic)}
            checked={characteristic.checked}
            inputProps={{ "aria-labelledby": labelId }}
            />
          }
          disablePadding
        >
          <CharacteristicModal
            {...{
              handleClose: handleCloseEdit,
              open: openEdit,
              setCharacteristic,
              characteristic
            }}
          />
          <ListItemButton onClick={handleOpenEdit}>
            <Stack spacing={1}>
              <NamedText
                {...{
                  name: "Название",
                  nameVariant: Variant.caption,
                  text: characteristic.name,
                  textVariant: Variant.body1,
                }}
              />
              <NamedText
                {...{
                  name: "Описание",
                  nameVariant: Variant.caption,
                  text: characteristic.description,
                  textVariant: Variant.body1,
                }}
              />
              <NamedText
                {...{
                  name: "Количество участников",
                  nameVariant: Variant.caption,
                  text: `${characteristic.slotAmount}`,
                  textVariant: Variant.body1,
                }}
              />
              <NamedText
                {...{
                  name: "Продолжительность",
                  nameVariant: Variant.caption,
                  text: characteristic.duration,
                  textVariant: Variant.body1,
                }}
              />
              <NamedText
                {...{
                  name: "Цена",
                  nameVariant: Variant.caption,
                  text: `${characteristic.price}`,
                  textVariant: Variant.body1,
                }}
              />
            </Stack>
          </ListItemButton>
        </ListItem>
      </Item>
   
  );
}
