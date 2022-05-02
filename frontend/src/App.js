import { Container, Fab, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SelectAllIcon from '@mui/icons-material/SelectAll';

import { useEffect, useState } from 'react';
import api from './services/api';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    handleGetTasks();
  }, []);

  async function handleGetTasks() {
    try {
      const taskData = await api.get('tasks');
      const taskList = await taskData.data;
      setTasks(taskList);
    } catch (error) {
      console.log(error);
    }
  }

  function clearStates() {
    setId('');
    setTitle('');
    setDescription('');
  }

  function fillStates(task) {
    setId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  }

  async function handleAddTask(event) {
    event.preventDefault();

    if (!title || !description) {
      alert('Preencha todos os campos');
    } else {
      const body = {
        title,
        description,
        done: false,
      };

      try {
        await api.post('tasks', body);
        alert('Tarefa cadastrada com sucesso');
        clearStates();
        handleGetTasks();
      } catch (error) {
        console.log(error);
        alert('Erro ao adicionar Tarefa');
      }
    }
  }

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{ my: 4 }}
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleAddTask}>
        <Typography variant='h4' component='h1' gutterBottom>
          Todo List - Desafio CI&T
        </Typography>

        <Stack spacing={2}>
          <TextField
            label='Título'
            value={title}
            onChange={event => setTitle(event.target.value)}></TextField>
          <TextField
            label='Descrição'
            value={description}
            onChange={event => setDescription(event.target.value)}></TextField>
          <Fab
            color='primary'
            aria-label='add'
            variant='extended'
            type='submit'>
            <AddIcon />
            Salvar Tarefa
          </Fab>
        </Stack>

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

      <TaskList>
        {tasks?.map(task => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </TaskList>
    </Container>
  );
}

export default App;
