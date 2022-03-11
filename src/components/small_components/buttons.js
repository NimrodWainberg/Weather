import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const GroupButtons = ({ onClick }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button label="Home" onClick={onClick}>
        Home
      </Button>
      <Button label="Favorites" onClick={onClick}>
        Favorites
      </Button>
    </ButtonGroup>
  );
};

export const FavoriteButton = ({ onClick }) => {
  const [likeButton, setLikeButton] = useState(false);
  const handleFavorite = () => {
    setLikeButton(!likeButton);
  };

  return (
    <IconButton
      color="error"
      aria-label="add to favorite"
      onClick={handleFavorite}>
      {likeButton ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
};
