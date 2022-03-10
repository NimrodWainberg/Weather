import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const GroupBottons = ({ onClick }) => {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button name="Home" onClick={onClick}>
        Home
      </Button>
      <Button name="Favorites" onClick={onClick}>
        Favorites
      </Button>
    </ButtonGroup>
  );
};

export default GroupBottons;
