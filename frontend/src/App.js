import {
  Checkbox,
  Container,
  Divider,
  Fab,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SelectAllIcon from '@mui/icons-material/SelectAll';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    try {
      const taskData = await (
        await axios.get('http://localhost:8080/api/v1/tasks')
      ).data;
      setTasks(taskData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container maxWidth='sm'>
      <Box sx={{ my: 4 }}>
        <Typography variant='h4' component='h1' gutterBottom>
          Todo List - Desafio CI&T
        </Typography>

        <Stack spacing={2}>
          <TextField label='Título'></TextField>
          <TextField label='Descrição'></TextField>
          <Fab color='primary' aria-label='add' variant='extended'>
            <AddIcon />
            Salvar Tarefa
          </Fab>
        </Stack>

        <Box
          sx={{
            border: 'solid 1px',
            marginTop: 2,
            borderColor: 'rgba(0, 0, 0, 0.12)',
            borderRadius: 2,
          }}>
          <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            justifyContent='space-between'>
            <Checkbox />
            <Stack alignItems='center'>
              <Typography>Texto de Teste</Typography>
              <Typography variant='caption'>Descrição</Typography>
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

          <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            justifyContent='space-between'>
            <Checkbox />
            <Typography>Texto de Teste</Typography>
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

          <Stack
            direction='row'
            spacing={2}
            alignItems='center'
            justifyContent='space-between'>
            <Checkbox />
            <Typography>Texto de Teste</Typography>
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
        </Box>

        <Box sx={{ marginTop: 2 }}>
          <Stack spacing={2} direction='row' justifyContent='space-around'>
            <Fab color='primary' aria-label='add' variant='extended'>
              <SelectAllIcon />
              Selecionar Todos
            </Fab>
            <Fab color='primary' aria-label='add' variant='extended'>
              <DoneAllIcon />
              Finalizar Selecionados
            </Fab>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default App;
