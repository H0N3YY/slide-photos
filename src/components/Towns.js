import React from "react";
import { Button } from "@mui/material";
import { brown } from '@mui/material/colors';

export default function Towns(props) {
  return (
    <div className="card">
      <img className="town_image" src={props.url} alt="town" />
      <h2>{props.name}</h2>
      <p>
        <Button sx={{color: brown[800]}}> Sprawdź Oferte </Button>
      </p>
    </div>
  );
}
