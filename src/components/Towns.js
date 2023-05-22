import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { brown } from '@mui/material/colors';

export default function Towns(props) {
  return (
    <div className="card">
      <Box sx={{color: brown[900]}}>
      <img className="town_image" src={props.url} alt="town" />
      <Typography variant="h4" paddingTop={2}>{props.name}</Typography>
      <p>
        <Button sx={{color: brown[500]}}> Sprawdź Oferte </Button>
      </p>
      </Box>
    </div>
  );
}
