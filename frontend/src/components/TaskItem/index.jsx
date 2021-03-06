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
        style={
          props.isTaskDone
            ? {
                backgroundColor: '#81c784',

                borderRadius: 2,
              }
            : { backgroundColor: 'white', borderRadius: 2 }
        }
        direction='row'
        spacing={2}
        alignItems='center'
        justifyContent='space-between'>
        <Checkbox checked={props.checked} onChange={props.onChange} />
        <Stack alignItems='center'>
          <Typography>{props.title}</Typography>
          <Typography variant='caption'>{props.description}</Typography>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'>
          <IconButton onClick={props.onEditButtonClick}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={props.onDeleteButtonClick}>
            <DeleteIcon />
          </IconButton>
          <IconButton onClick={props.onCompletionButtonClick}>
            <DoneIcon />
          </IconButton>
        </Stack>
      </Stack>
      <Divider />
    </>
  );
}

export default TaskItem;
