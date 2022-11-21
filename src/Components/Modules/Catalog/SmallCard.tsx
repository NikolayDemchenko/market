import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import {
  TAdventure,
  TAdventureImage,
  TImageRequestData,
} from "../../../Model/types";
import { styled } from "@mui/material";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import {
  Text,
  Variant,
} from "../../BaseComponents/DisplayingComponents/Text";

export type TImage = {
  img: string;
  title: string;
  requestData: TImageRequestData;
  checked?: boolean;
};

export type TCard = {
  name: string;
  images?: TImage[];
  description: string;
};

export function SmallCard({
  card,
  labelId,
  onClickItem,
  checkAdventure,
}: {
  card: TCard;
  labelId: string;
  onClickItem: Function;
  checkAdventure: Function;
}) {
  return (
    <Card sx={{ m: 1, maxWidth: 320, minWidth: 320 }}>
      <CardActionArea onClick={() => onClickItem(card)}>
        <CardMedia
          component="img"
          height="140"
          image={card.images && card.images[0].img}
          alt={card.images && card.images[0].title}
        />
        <CardContent>
          <Text
            {...{ gutterBottom: true, variant: Variant.h5, component: "div" }}
          >
            {card.name}
          </Text>
          <Typography variant="body2" color="text.secondary">
            {card.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
