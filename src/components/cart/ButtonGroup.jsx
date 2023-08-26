import React from 'react'
import { Box, Button, ButtonGroup } from '@mui/material'
import { styled } from "@mui/material/styles";

const Component = styled(ButtonGroup)`
    margin-top: 30px;
`;

const StyledButton = styled(Button)`
    border-radius: 50%;
`;


const GroupButton = () => {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <Button>+</Button>
        <StyledButton>1</StyledButton>
    </Component>
  )
}

export default GroupButton