import React from 'react'

import { Typography } from '@mui/material'
import { brown } from "@mui/material/colors";

const Description = () => {

  const formStyle = {
    backgroundColor: '#FFFFFF',
    padding: '4rem',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    color: brown[900],
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  
  const descriptionStyle = {
    fontSize: '1.4rem',
    marginBottom: '0.5rem',
  };

  return (
    <div style={formStyle}>
      <Typography style={headingStyle}>
        Why is it worth visiting Poland with us?
      </Typography>

      <Typography style={descriptionStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae nisl massa. Nullam elementum dolor lectus, eu euismod justo facilisis a. Donec vehicula posuere lorem quis consectetur.
        Cras commodo, arcu non suscipit aliquam, diam purus finibus lorem, non posuere massa augue non tellus. Cras nec augue imperdiet sem feugiat dapibus at sit amet lacus. Pellentesque placerat accumsan tincidunt.
        Etiam libero quam, pulvinar id felis sed, rutrum fringilla nisl. Vestibulum non neque erat.
      </Typography>
    </div>
  )
}

export default Description
