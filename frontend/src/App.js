import { Container, Fab, Stack, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';

import { useEffect, useRef, useState } from 'react';
import api from './services/api';
import TaskList from './components/TaskList';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);
  const [checkedTasks, setCheckedTasks] = useState([]);

  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    handleGetTasks();
  }, []);

  function clearStates() {
    setId('');
    setTitle('');
    setDescription('');
    setCheckedTasks([]);
  }

  function fillStates(task) {
    setId(task.id);
    setTitle(task.title);
    setDescription(task.description);
  }

  async function handleGetTasks() {
    try {
      const taskData = await api.get('tasks');
      const taskList = await taskData.data;
      setTasks(taskList);
    } catch (error) {
      console.log(error);
    }
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
        alert('Erro ao adicionar Tarefa');
        console.log(error);
      }
    }
  }

  async function handleEditTask(event) {
    event.preventDefault();

    try {
      const body = {
        title,
        description,
      };

      await api.put(`tasks/${id}`, body);
      alert('Tarefa alterada com sucesso');
      clearStates();
      handleGetTasks();
    } catch (error) {
      alert('Erro ao alterar tarefa');
      console.log(error);
    }
  }

  async function handleDeleteTask(id) {
    try {
      await api.delete(`tasks/${id}`);
      alert('Tarefa deletada com sucesso');
      handleGetTasks();
    } catch (error) {
      alert('Erro ao deletar tarefa');
    }
  }

  async function handleSingleTaskCompletion({ id, title, description, done }) {
    const body = {
      title,
      description,
      done: true,
    };

    try {
      await api.put(`tasks/${id}`, body);
      handleGetTasks();
    } catch (error) {
      alert('Erro ao Atualizar o Status da Tarefa');
    }
  }

  async function handleSingleTaskReset({ id, title, description }) {
    const body = {
      title,
      description,
      done: false,
    };

    try {
      await api.put(`tasks/${id}`, body);
      handleGetTasks();
    } catch (error) {
      alert('Erro ao Atualizar o Status da Tarefa');
    }
  }
  async function handleSingleTaskToggle({ id, title, description, done }) {
    const body = {
      title,
      description,
      done: !done,
    };

    try {
      await api.put(`tasks/${id}`, body);
      handleGetTasks();
    } catch (error) {
      alert('Erro ao Atualizar o Status da Tarefa');
    }
  }

  function handleMultipleTasksCompletion() {
    const tasksToBeCompleted = tasks.filter(task =>
      checkedTasks.includes(task.id)
    );
    tasksToBeCompleted.forEach(taskToBeCompleted => {
      handleSingleTaskCompletion(taskToBeCompleted);
    });
  }

  function handleMultipleTasksReset() {
    tasks.forEach(task => handleSingleTaskReset(task));
  }

  function handleChange(event, task) {
    const { checked } = event.target;

    if (!checked && checkedTasks.includes(task.id)) {
      const filteredCheckedTasks = checkedTasks.filter(id => id !== task.id);
      setCheckedTasks(filteredCheckedTasks);
    } else if (checked) {
      setCheckedTasks([...checkedTasks, task.id]);
    }
  }

  function handleSelectAll() {
    const taskIds = tasks.map(task => task.id);
    setCheckedTasks(taskIds);
  }

  return (
    <Container maxWidth='sm'>
      <Box
        sx={{ my: 4 }}
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={id ? handleEditTask : handleAddTask}>
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
            {id ? 'Alterar' : 'Salvar'} Tarefa
          </Fab>
        </Stack>

        <Box sx={{ marginTop: 2 }}>
          <Stack spacing={2} direction='row' justifyContent='space-around'>
            <Fab
              color='primary'
              aria-label='add'
              variant='extended'
              onClick={handleSelectAll}>
              <SelectAllIcon />
              Selecionar Todos
            </Fab>
            <Fab
              color='primary'
              aria-label='add'
              variant='extended'
              onClick={handleMultipleTasksCompletion}>
              <DoneAllIcon />
              Finalizar Selecionados
            </Fab>
            <Fab
              color='primary'
              aria-label='add'
              variant='extended'
              onClick={handleMultipleTasksReset}>
              <SettingsBackupRestoreIcon />
              Resetar Selecionados
            </Fab>
          </Stack>
        </Box>
      </Box>

      <TaskList>
        {tasks?.map(task => (
          <TaskItem
            isTaskDone={task.done}
            key={task.id}
            title={task.title}
            description={task.description}
            onEditButtonClick={() => fillStates(task)}
            onDeleteButtonClick={() => handleDeleteTask(task.id)}
            onCompletionButtonClick={() => handleSingleTaskToggle(task)}
            onChange={event => handleChange(event, task)}
            checked={checkedTasks.includes(task.id)}
          />
        ))}
      </TaskList>
    </Container>
  );
}

export default App;
