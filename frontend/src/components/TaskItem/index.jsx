import {
  Checkbox,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import React from 'react';

function TaskItem(props) {
  return (
    <>
      <Stack
        direction='row'
        spacing={2}
        alignItems='center'
        justifyContent='space-between'>
        <Checkbox />
        <Stack alignItems='center'>
          <Typography>{props.title}</Typography>
          <Typography variant='caption'>{props.description}</Typography>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <DoneIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
}

export default TaskItem;
