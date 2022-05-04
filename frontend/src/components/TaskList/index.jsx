import { Box } from '@mui/material';
import React from 'react';

function TaskList(props) {
  return (
    <Box
      sx={{
        border: 'solid 1px',
        marginTop: 2,
        borderColor: 'rgba(0, 0, 0, 0.12)',
        borderRadius: 2,
      }}>
      {props.children}
    </Box>
  );
}

export default TaskList;
